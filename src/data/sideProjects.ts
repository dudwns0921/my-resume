export const sideProjects = [
  {
    title: '23 · NAN 2026 AI 게임 해커톤',
    period: '2026.09',
    role: 'Developer · 게임 로직 · LLM 서버 · 배포',
    href: 'https://dudwns0921.github.io/2026/09/08/NAN-2026-Retrospective/',
    description:
      '감각이 화폐가 된 2026년, LLM 손님과 자연어로 흥정하며 감각을 사고파는 1인칭 3D 상점 운영 시뮬레이션. NHN 주최 AI 게임 제작 해커톤 NAN 2026 본선에 2인 팀으로 참여해 개발(게임 로직·LLM 서버·배포)과 내부 문서·발표 자료를 담당 — 팀이 약 40시간 만에 완성해 588팀 중 3위(우수상) 수상.',
    techStack: ['Godot 4.7.2', 'GDScript', 'TypeScript', 'Railway', 'Claude Code', 'Godot MCP Pro', 'GUT', 'vitest'],
    achievements: [
      {
        description:
          "'숫자는 게임이, 말은 서버가' LLM 경계 설계 — 가격 공식·거짓말 판정·평판 규칙은 게임이, 대사·수락/역제안 선택·기분 변화는 LLM 서버가 맡도록 첫 커밋 설계 문서에 명시해 LLM 비결정성과 무관하게 밸런스를 측정할 수 있는 구조 확보",
        strong: true,
      },
      {
        description:
          '팀 공동 GDD 기반 초안을 ultracode(Claude Code 멀티 에이전트 워크플로우)로 병렬 생성 → 플레이 테스트 이슈는 Fable이 분석·문서화하고 Opus/Sonnet이 구현하는 모델 역할 분리로 토큰 절약',
        strong: true,
      },
      {
        description:
          'Godot MCP Pro로 AI 세션을 Godot 에디터에 직접 연결 — 씬 트리 조작·스크립트 생성/검증·실행 스크린샷·에러 로그 확인까지 에디터 안에서 AI 주도 개발',
        strong: false,
      },
      {
        description: '팀 커밋 320개 중 243개 기여 — 프로젝트 테스트 게임 GUT 526개 · 서버 vitest 175개',
        strong: false,
      },
      {
        description:
          'LLM 서버 Railway 모노레포 자동 재배포(main push) + Windows zip·macOS dmg 빌드를 팀 공유 폴더로 배포하는 스크립트 구성 — 오버엔지니어링 없이 빌드 공유',
        strong: false,
      },
    ],
  },
];
