import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';
export async function GET(req: NextRequest) {
  // 배포 환경에서는 localhost:8087 사용, 개발 환경에서는 동적 URL 사용
  const url = process.env.NODE_ENV === 'production' 
    ? 'http://localhost:3000' 
    : new URL(req.url).origin;

  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-web-security',
    ],
  });
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: 'networkidle0' });

  await page.evaluate(() => {
    const elements = document.querySelectorAll('.no-pdf');
    if (elements) elements.forEach(item => (item as HTMLElement).style.display = 'none');
  });

  const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true, margin: { top: '40px', bottom: '40px'} });

  await browser.close();

  return new NextResponse(Buffer.from(pdfBuffer), {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="resume.pdf"',
    },
  });
}