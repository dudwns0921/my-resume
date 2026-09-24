// `pnpm build` 결과물을 잠시 띄워 이력서 PDF를 public/resume.pdf로 만든다.
// 이력서는 배포 단위로만 바뀌므로 운영에서는 이 정적 파일을 그대로 내려준다.
import { spawn } from 'node:child_process';
import { cpSync, mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer';
import { launchOptions, renderPdf } from '../src/lib/render-pdf.mjs';

const root = process.cwd();
const standalone = path.join(root, '.next/standalone');
const output = path.join(root, 'public/resume.pdf');
const port = Number(process.env.PDF_PORT ?? 3100);
const origin = `http://127.0.0.1:${port}`;

// 운영 이미지와 같게 정적 파일과 public을 standalone 서버 옆에 둔다.
cpSync(path.join(root, '.next/static'), path.join(standalone, '.next/static'), { recursive: true });
cpSync(path.join(root, 'public'), path.join(standalone, 'public'), { recursive: true });

const server = spawn(process.execPath, ['server.js'], {
  cwd: standalone,
  env: { ...process.env, NODE_ENV: 'production', PORT: String(port), HOSTNAME: '127.0.0.1' },
  stdio: 'inherit',
});

const waitForServer = async () => {
  for (let i = 0; i < 60; i++) {
    try {
      if ((await fetch(origin)).ok) return;
    } catch {
      // 아직 뜨는 중
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error(`서버가 ${origin}에서 응답하지 않습니다.`);
};

let browser;
try {
  await waitForServer();
  browser = await puppeteer.launch(launchOptions);
  const pdf = await renderPdf(browser, { origin, assetPrefix: '/my-resume/' });
  mkdirSync(path.dirname(output), { recursive: true });
  writeFileSync(output, pdf);
  console.log(`PDF 생성 완료: ${path.relative(root, output)} (${pdf.length} bytes)`);
} finally {
  await browser?.close();
  server.kill();
}
