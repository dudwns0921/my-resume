import type { Metadata } from 'next';
import './styles/globals.css';

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
      <body>
        {children}
      </body>
    </html>
  );
}
