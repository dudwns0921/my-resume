import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const urlParam = searchParams.get('url');
  const url = urlParam;

  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-web-security',
    ],
  });
  const page = await browser.newPage();

  if(!url) {
    return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 });
  }

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