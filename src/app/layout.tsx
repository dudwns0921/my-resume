import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './styles/globals.css';

// next/font가 폰트를 _next/static으로 서빙하므로 로컬·운영(assetPrefix) 모두에서 같은 경로로 동작한다.
const pretendard = localFont({
  src: [
    { path: '../../public/fonts/Pretendard-Regular.woff', weight: '400' },
    { path: '../../public/fonts/Pretendard-SemiBold.woff', weight: '600' },
    { path: '../../public/fonts/Pretendard-Bold.woff', weight: '700' },
  ],
  display: 'swap',
});

export const metadata: Metadata = {
  title: '정영준 | 프론트엔드 개발자 이력서',
  description: 'AI를 업무 전반에 녹여 내는 5년차 웹 프론트엔드 개발자 정영준의 이력서입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        {children}
      </body>
    </html>
  );
}
