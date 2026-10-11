export const activities = [
  {
    title: '개인 게임 프로젝트 — 「Keros」',
    period: '2026.10',
    role: '1인 개발 · 기획 · AI 디렉팅(구현·3D 에셋·사운드·영상)',
    links: [
      { label: 'itch.io', href: 'https://dudwns0921.itch.io/keros' },
      { label: '제작 과정 보기', href: '/activities/keros', webOnly: true },
    ],
    description:
      '세이렌의 바다를 지나는 오디세우스의 배에서 부관이 되어, 선원의 귀를 밀랍으로 막고 홀린 선원을 붙잡아 이타카까지 버티는 3인칭 3D 디펜스. 「Outis」의 후속작으로 『오디세이아』의 세이렌 에피소드를 바탕으로 만들어, 브라우저에서 바로 플레이할 수 있게 itch.io에 출시.',
    techStack: ['Godot 4.7', 'GDScript', 'Claude Code', 'gamedev-kit', 'Meshy AI', 'ElevenLabs', 'Blender', 'Higgsfield'],
    achievements: [
      {
        description:
          '**세이렌에 홀린 선원을 붙잡는 행동 하나에서 출발한 기획** — 플레이어를 오디세우스가 아닌 부관으로 두고, 노 젓기와 무기 조준을 빼 선원을 지키는 일에만 집중',
        strong: false,
      },
      {
        description:
          '바다 괴물을 보스가 아니라 구간마다 주기적으로 오는 위협으로 바꾸고, 구간 사이 정비에서 재화로 선원을 보충하고 밧줄·밀랍을 보강하며 나아가는 흐름 구성',
        strong: false,
      },
      {
        description:
          '**목표부터 회고까지 여덟 단계를 문서 하나로 잇는 개발 사이클 설계** — Claude Code 플러그인(gamedev-kit)으로 만들어, 역할별 에이전트가 선택지와 권고를 내면 방향이 갈리는 결정은 직접 내리고 사이클 8회의 결정 129건을 답과 함께 기록',
        strong: false,
      },
      {
        description:
          'GDD·에셋 기록·플레이테스트 문서를 읽어 플레이 순서대로 완성도를 그리는 현황판 스킬 제작 — 기획서가 길어져도 어디까지 만들었는지 한눈에 확인',
        strong: false,
      },
    ],
  },
  {
    title: '개인 게임 프로젝트 — 「Outis」',
    period: '2026.09',
    role: '1인 개발 · 기획 · AI 디렉팅(구현·3D 에셋·사운드·컷신)',
    links: [
      { label: 'itch.io', href: 'https://dudwns0921.itch.io/outis' },
      { label: '제작기', href: 'https://dudwns0921.github.io/2026/09/28/Outis-Devlog/' },
      { label: '제작 과정 보기', href: '/activities/outis', webOnly: true },
    ],
    description:
      '외눈박이 거인의 동굴에 갇힌 오디세우스가 잠든 거인 곁을 몰래 오가며 무기를 만들고 선원들과 탈출하는 3인칭 3D 어드벤처. 호메로스 『오디세이아』의 키클롭스 에피소드를 바탕으로 기획부터 출시까지 전 과정을 1인으로 진행해, itch.io에 출시.',
    techStack: ['Godot 4.7', 'GDScript', 'Claude Code', 'Godot MCP Pro', 'Meshy AI', 'ElevenLabs', 'ChatGPT'],
    achievements: [
      {
        description:
          '**거인의 눈을 말뚝으로 찌르는 행동 하나에서 출발한 기획** — 말뚝을 잘라 다듬고 달궈 찌르기까지의 준비를, 잠든 거인 곁에서 들키지 않고 해내는 구조로 확장',
        strong: false,
      },
      {
        description:
          '**기획서(GDD)와 코드를 양방향으로 맞추는 동기화 스킬 설계** — 수치·규칙·입력·HUD 항목에 ID를 붙여, 어느 한쪽을 바꿔도 다른 쪽에 곧바로 반영되는 구조 확보',
        strong: false,
      },
      {
        description:
          '밸런스 수치 111개를 엑셀 표로 관리 — 저장하면 실행 중인 게임에 즉시 반영되어, 게임을 끄지 않고 값을 바꿔 가며 조정하는 구조 구축',
        strong: false,
      },
      {
        description:
          "원작의 '아무도 아니다' 장면을 진짜 이름을 외칠지 고르는 선택 엔딩으로 재해석",
        strong: false,
      },
      {
        description:
          '3D 에셋은 Meshy AI, 사운드는 ElevenLabs, 흑화식 도기 스타일 컷신은 Claude로 뽑은 프롬프트를 ChatGPT 이미지로 제작 — 구현은 Claude Code가 Godot 에디터를 직접 조작하게 해 기획에 집중',
        strong: false,
      },
    ],
  },
  {
    title: 'NAN 2026 Game X AI 해커톤 — 「23」',
    period: '2026.09',
    role: '공동 기획 · 개발(게임 로직·LLM 서버·배포) · 문서·발표',
    links: [{ label: '회고 보기', href: 'https://dudwns0921.github.io/2026/09/08/NAN-2026-Retrospective/' }],
    description:
      '감각이 화폐가 된 2026년, LLM 손님과 흥정하며 감각을 사고팔아 내 몸의 빈 칸을 채우는 1인칭 3D 상점 운영 시뮬레이션. NHN 주최 NAN 2026 Game X AI 해커톤 본선(지원 588팀 중 10팀 선발)에 2인 팀으로 참가해 약 40시간 만에 완성하고, 3위(우수상)를 수상.',
    techStack: ['Godot 4.7.2', 'GDScript', 'TypeScript', 'Railway', 'Claude Code', 'Godot MCP Pro'],
    achievements: [
      {
        description:
          "**공통 소재 '2026년'을 자산 광풍으로 화폐가 무너진 해로 해석하는 아이디어 제안** — 세 소재(2026년·감각·수집)를 한 줄로 잇는 세계관의 출발점",
        strong: false,
      },
      {
        description:
          "**'숫자는 게임이, 말은 서버가' 경계 설계** — 가격·거짓말 판정·평판은 게임이, 대사·흥정 판단·기분 변화는 LLM이 맡게 해 밸런스를 측정할 수 있는 구조 확보",
        strong: false,
      },
      {
        description:
          'GDD 기반 초기 코드를 Claude Code 멀티 에이전트 워크플로우로 한 번에 생성한 뒤, 플레이하며 정리한 이슈는 고성능 모델(Fable)이 세부 계획을 짜고 저비용 모델(Opus·Sonnet)이 수정하는 방식으로 개발',
        strong: false,
      },
    ],
  },
  {
    title: 'CODEGATE 2026 AI 스타트업 해커톤',
    period: '2026.07',
    role: '개인 참가 · 기획',
    description:
      'AI 에이전트가 수행한 행동 이력을 위변조 없이 기록하고 제3자가 독립적으로 검증할 수 있게 하는 서비스 아이디어로 서류 심사를 통과해 본선 진출.',
    techStack: [],
    achievements: [
      {
        description: '본선 진출 아이디어를 발전시켜 **사내 직무발명으로 특허 출원** 진행 중',
        strong: false,
      },
    ],
  },
  {
    title: 'ObiVision · Push to Prod SEOUL 해커톤',
    period: '2026.06',
    role: '팀장 · 기획 · Frontend Developer',
    description:
      '사진으로 차량 손상을 판정하는 오비고의 AI 검수 솔루션을 확장해, AI 기반 수리비 견적서의 표준을 제시하는 솔루션. Push to Prod SEOUL(Anthropic × Replit × 한국투자액셀러레이터) 본선에 오비고 3인 팀 팀장으로 참가해 약 2시간 빌드 타임 안에 구현.',
    techStack: ['Claude Vision', 'Claude Code', 'Replit'],
    achievements: [
      {
        description:
          '**기획 방향 전환 주도** — 구현 부담에 비해 효과가 낮은 3D 파손 시각화 대신, 렌터카사·보험사가 실제로 필요로 하는 수리비 견적서로 목표 재정의',
        strong: false,
      },
      {
        description:
          "'AI가 멋대로 산정한 것 아니냐'는 분쟁을 막기 위해, 견적 항목마다 신뢰도·근거 사진·고객 코멘트와의 일치 여부를 함께 싣는 **견적서 표준 설계**",
        strong: false,
      },
      {
        description:
          "**차량 반납 검수를 '빌려준 자산을 돌려받을 때 상태를 검증하는 일'로 일반화**해, 건설 장비·가전 렌탈·킥보드·임대차까지 확장할 수 있는 반납 검수 인프라로 사업 방향 정의",
        strong: false,
      },
    ],
  },
];
