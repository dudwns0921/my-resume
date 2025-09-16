import type { WorkExperienceItemProps } from '../components/workExprience/WorkExperienceItem';

export const workExperiences: WorkExperienceItemProps[] = [
  {
    title: '오비고',
    subInfo: '2022.03 - 현재',
    subInfo2: 'Frontend Developer',
    description:
      'Toyota, 현대모비스, KGM 등 글로벌 모빌리티 기업과 차량용 인포테인먼트 및 AI 서비스를 개발하고 있습니다.',
    projects: [
      {
        title: 'TOYOTA 차량관리용 모바일 앱',
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
            description: '중앙집중형 에러 핸들링 구조 설계 및 구현',
            strong: false,
          },
          {
            description: 'WebView - 네이티브 통신 인터페이스 설계',
            strong: false,
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
        role: 'Frontend & AI Integration Developer',
        description: '차량 음성 인식 및 개인화 서비스를 제공하는 AI 기반 차량용 WebApp 개발',
        techStack: ['Vue.js', 'TypeScript', 'Vite', 'Node.js', 'LangChain', 'Jenkins'],
        achievements: [
          {
            description: '현대제네시스 전무 대상 데모 주도 및 성공적 시연',
            strong: true,
          },
          {
            description: '프로젝트 초기 인프라 및 환경 설정 주도',
            strong: true,
          },
          {
            description: 'LangChain 및 RAG 기반 AI 응답 시스템 설계 및 구현',
            strong: true,
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
