export const sideProjects = [
  {
    title: '서울 교통 시각화 · Seoul Traffic Visualization',
    period: '2026.05',
    role: '팀장 · Frontend Developer',
    href: 'https://obigo-hackathon.vercel.app/',
    description:
      '서울 도심 실시간 교통 상황을 3D 씨티맵 위에 시각화하는 웹 대시보드. Claude Push to Prod 해커톤 사전 제출 프로젝트로, 2인 팀장으로 리드.',
    techStack: ['Next.js 15', 'TypeScript 5', 'MapLibre GL JS', 'next-intl', 'pnpm'],
    achievements: [
      {
        description:
          'Replit 빠른 프로토타이핑 → Claude Code 반복 개선 → Vercel 라이브 배포까지 AI 주도 개발 사이클 완결',
        strong: true,
      },
      {
        description: 'TOPIS 실시간 교통 API 연동 (5,800+ 도로 링크, 폴링 주기 최적화 — 실시간 60초, 일별 5분)',
        strong: false,
      },
      {
        description: 'MapLibre GL JS 기반 3D 씨티맵 + 속도 구간별 도로 색상 그라디언트 렌더링',
        strong: false,
      },
      {
        description: 'next-intl 국제화(한국어/영어) 적용 및 반응형 UI 개선 (위젯 크기 1.75배 확대)',
        strong: false,
      },
    ],
  },
];
