import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 });
  }

  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-web-security',
        '--disable-dev-shm-usage',
      ],
    });
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

    await page.evaluate(() => {
      const elements = document.querySelectorAll('.no-pdf');
      if (elements) elements.forEach(item => (item as HTMLElement).style.display = 'none');
    });

    const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true, margin: { top: '40px', bottom: '40px' } });

    return new NextResponse(Buffer.from(pdfBuffer), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="resume.pdf"',
      },
    });
  } catch (error) {
    console.error('PDF generation error:', error);
    return NextResponse.json({ error: 'Failed to generate PDF' }, { status: 500 });
  } finally {
    if (browser) await browser.close();
  }
}