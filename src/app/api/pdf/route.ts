import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';
export async function GET(req: NextRequest) {
  const url = 'http://localhost:3000';

  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
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