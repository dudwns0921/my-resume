export const workExperiences = [
  {
    title: '오비고',
    subInfo: '2022.03 - 현재',
    subInfo2: 'Frontend Developer',
    description:
      'Toyota, 현대모비스, KGM 등 글로벌 모빌리티 기업들과 협업하며 차량용 인포테인먼트, 뮤직 스트리밍, AI 서비스 등 다양한 모빌리티 솔루션을 개발하고 있습니다. AI 도구를 적극 활용해 개발 생산성을 높이고, 반복 작업을 자동화하여 핵심 개발에 집중하는 방식으로 업무를 수행합니다.',
    projects: [
      {
        title: 'KGM Music - 차량용 뮤직 스트리밍 서비스',
        period: '2025.12 - 진행중',
        role: 'Frontend Developer',
        description:
          'KGM 차량 AVN에 탑재되는 뮤직 스트리밍 클라이언트 개발. 백엔드 API 연동부터 Android 브릿지 구현, E2E 테스트, JIRA 이슈 관리까지 개발 전 과정에 Claude Code를 깊이 통합해 운영.',
        techStack: ['React 19', 'TypeScript', 'TanStack Query', 'Tailwind CSS v4', 'Vite', 'React Router v7'],
        achievements: [
          {
            description: '백엔드·브릿지·음성발화 등 도메인 규격을 Claude Code 스킬화 — AI가 프로젝트 컨텍스트를 즉시 파악해 개발 효율 전반 향상',
            strong: true,
          },
          {
            description: 'JIRA 커맨드 개발 — 티켓 번호 입력만으로 이슈 조회·수정·ESLint·E2E 검증·커밋까지 원커맨드 자동화',
            strong: true,
          },
          {
            description: 'WebView ↔ Native(AAOS) 브릿지 인터페이스 설계 및 구현',
            strong: true,
          },
          {
            description: '서비스 아키텍처 전체 설계 주도 (상태 관리·에러 핸들링·로딩 시스템·테마 등)',
            strong: false,
          },
        ],
      },
      {
        title: '근무일지 작성 자동화 솔루션',
        period: '2025.10 - 2025.10(1주)',
        role: 'Full-stack Developer',
        description: 'JIRA 데이터 기반 근무일지 자동 생성 및 메일 전송 솔루션 개발',
        techStack: ['Next.js', 'TypeScript', 'n8n', 'chatGPT API', 'JIRA API'],
        achievements: [
          {
            description: '사내 AI 챌린지 1위',
            strong: true,
          },
          {
            description: '이사진, 인사팀에게 실용성을 인정받아 전사 적용 계획 수립',
            strong: true,
          },
          {
            description: 'Next.js App Router와 Server Actions를 활용한 서버 사이드 API 통합',
            strong: false,
          },
          {
            description: 'JIRA 티켓 자동 분석 및 일지 생성으로 작성 시간 90% 단축',
            strong: false,
          },
          {
            description: 'n8n 워크플로우 자동화로 수동 개입 최소화',
            strong: false,
          }
        ],
      },
      {
        title: 'Toyota 차량관리용 모바일 앱',
        period: '2024.11 - 진행중',
        role: 'Frontend Developer',
        description: 'TOYOTA 차량 관리를 위한 하이브리드 모바일 앱 개발',
        techStack: ['Vue.js', 'TypeScript', 'Vite', 'Jenkins'],
        achievements: [
          {
            description: '프로젝트 초기 인프라 및 환경 설정 주도',
            strong: true,
          },
          {
            description: 'Vitest를 활용한 유닛/통합 테스트 환경 구축',
            strong: true,
          },
          {
            description: 'RESTful API 연동 및 비동기 데이터 처리 최적화',
            strong: false,
          },
          {
            description: '중앙집중형 에러 핸들링 구조 설계 및 구현',
            strong: false,
          },
          {
            description: 'WebView - 네이티브 통신 인터페이스 설계 및 반응형 UI 구현',
            strong: true,
          },
          {
            description: 'Jenkins 기반 빌드·배포·테스트 자동화',
            strong: false,
          },
        ],
      },
      {
        title: '현대모비스 GENESIS 차량용 AI 서비스',
        period: '2024.05 - 2025.01',
        role: 'Full-stack & AI Integration Developer',
        description: '차량 음성 인식 및 개인화 서비스를 제공하는 AI 기반 차량용 WebApp 개발',
        techStack: ['Vue.js', 'TypeScript', 'Vite', 'Node.js', 'LangChain', 'Jenkins'],
        achievements: [
          {
            description: '현대제네시스 전무 대상 데모 주도 및 성공적 시연',
            strong: true,
          },
          {
            description: 'Node.js + LangChain 백엔드 개발 및 Vue.js 프론트엔드 통합으로 풀스택 개발 수행',
            strong: true,
          },
          {
            description: 'LangChain 및 RAG 기반 AI 응답 시스템 설계 및 구현',
            strong: true,
          },
          {
            description: '프로젝트 초기 인프라 및 환경 설정 주도',
            strong: false,
          },
          {
            description: 'Jenkins 기반 빌드·배포·테스트 자동화',
            strong: false,
          },
        ],
      },
      {
        title: 'Toyota 차량용 Infortainment 서비스',
        period: '2023.06 - 진행중',
        role: 'Frontend Developer',
        description:
          '편의 기능 및 엔터테인먼트 기능을 제공하는 차량용 하이브리드 Infortainment 서비스 개발',
        techStack: ['Vue.js', 'JavaScript', 'Flow', 'Webpack', 'Jenkins'],
        achievements: [
          {
            description: '유닛/통합 테스트 환경 구축 및 가이드 문서 작성',
            strong: true,
          },
          {
            description: 'devTools 컴포넌트 개발로 퍼블리싱 속도 30% 개선',
            strong: false,
          },
          {
            description: '백엔드 API 연동 및 데이터 바인딩 최적화로 화면 렌더링 성능 개선',
            strong: false,
          },
          {
            description: 'ESLint, Prettier, Stylelint 적용 및 빌드/앱 설치 자동화',
            strong: false,
          },
        ],
      },
      {
        title: 'KGM 차량용 Infortainment 서비스',
        period: '2023.06 - 진행중',
        role: 'Frontend Developer',
        description: 'KGM(쌍용) 차량용 하이브리드 Infortainment 서비스 개발',
        techStack: ['Vue.js', 'TypeScript', 'Webpack'],
        achievements: [
          {
            description: 'Confluence 기반 협업 체계로 이슈 해결 시간 50% 단축',
            strong: true,
          },
          {
            description: '백엔드 API 연동 및 실시간 데이터 처리 로직 구현',
            strong: false,
          },
          {
            description: 'ESLint, Prettier, Stylelint 적용 및 빌드/앱 설치 자동화',
            strong: false,
          },
        ],
      },
    ],
  },
  {
    title: '롯데쇼핑(주) 롯데마트사업본부',
    subInfo: '2020.09 - 2021.09',
    subInfo2: '경영지원팀 총무',
    description: '',
    projects: [],
  },
];
