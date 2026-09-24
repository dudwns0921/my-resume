import { NextRequest, NextResponse } from 'next/server';
import puppeteer, { type Browser } from 'puppeteer';

const isProd = process.env.NODE_ENV === 'production';
// next.config.ts의 assetPrefix. 내부 서버는 이 prefix 없이 에셋을 서빙한다.
const ASSET_PREFIX = '/my-resume/';

// 브라우저는 요청마다 띄우지 않고 재사용한다.
let browserPromise: Promise<Browser> | null = null;
// 이력서는 배포 단위로만 바뀌므로 운영에서는 한 번 만든 PDF를 재사용한다.
let pdfPromise: Promise<Uint8Array> | null = null;

const getBrowser = () => {
  browserPromise ??= puppeteer
    .launch({
      headless: true,
      executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    })
    .then((browser) => {
      browser.on('disconnected', () => {
        browserPromise = null;
      });
      return browser;
    })
    .catch((error) => {
      browserPromise = null;
      throw error;
    });
  return browserPromise;
};

// 공개 URL을 거치지 않고 같은 서버의 내부 주소로 페이지를 연다.
const renderPdf = async (origin: string) => {
  const browser = await getBrowser();
  const page = await browser.newPage();
  try {
    await page.setViewport({ width: 800, height: 600 });

    if (isProd) {
      const prefixed = origin + ASSET_PREFIX;
      await page.setRequestInterception(true);
      page.on('request', (request) => {
        const url = request.url();
        if (url.startsWith(prefixed)) {
          request.continue({ url: `${origin}/${url.slice(prefixed.length)}` });
        } else {
          request.continue();
        }
      });
    }

    await page.goto(`${origin}/`, { waitUntil: 'load', timeout: 30000 });
    await page.evaluate(() => document.fonts.ready);

    return await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: '40px', bottom: '40px' },
    });
  } finally {
    await page.close();
  }
};

export async function GET(req: NextRequest) {
  const origin = isProd ? `http://127.0.0.1:${process.env.PORT ?? 3000}` : req.nextUrl.origin;

  try {
    const pdf = isProd
      ? (pdfPromise ??= renderPdf(origin).catch((error) => {
          pdfPromise = null;
          throw error;
        }))
      : renderPdf(origin);

    return new NextResponse(Buffer.from(await pdf), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="resume.pdf"',
      },
    });
  } catch (error) {
    console.error('PDF generation error:', error);
    return NextResponse.json({ error: 'Failed to generate PDF' }, { status: 500 });
  }
}
