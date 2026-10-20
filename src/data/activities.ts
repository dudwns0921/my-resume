export const activities = [
  {
    title: 'Claude Code 플러그인 — 「gamedev-kit」',
    period: '2026.10 - 진행 중',
    role: '1인 개발 · 워크플로우 설계 · AI 디렉팅(구현)',
    links: [
      { label: '소개 사이트', href: 'https://gamedev-kit-site.vercel.app/ko' },
      { label: 'GitHub', href: 'https://github.com/dudwns0921/claude-gamedev-kit' },
      { label: 'Threads', href: 'https://www.threads.com/@glowingjung/post/DeRzUkfGjII?hl=ko' },
    ],
    description:
      '게임을 만드는 동안 어디까지 왔는지와 내가 정할 것을 한눈에 보며 끝까지 만들게 하는 Claude Code 플러그인.',
    techStack: ['Claude Code', 'Python', 'Godot 4.7', 'Unity'],
    achievements: [
      {
        description: '새 계정으로 Threads에 소개한 글이 조회 6,959회 · 반응 80건 기록',
        strong: false,
      },
    ],
  },
  {
    title: '개인 게임 프로젝트 — 「Nostos」',
    period: '2026.10',
    role: '1인 개발 · 기획 · AI 디렉팅(구현·3D 에셋·사운드)',
    links: [
      { label: 'itch.io', href: 'https://dudwns0921.itch.io/nostos' },
      { label: '제작 과정 보기', href: '/activities/nostos', webOnly: true },
    ],
    description:
      '스무 해 만에 집에 돌아온 오디세우스가 되어, 잔치를 벌이는 구혼자들을 오직 활 하나로 쓰러뜨리는 1인칭 3D 활 싸움. 「Outis」 · 「Keros」에 이은 3부작의 마지막 작품으로 『오디세이아』 21~22권의 활 시합과 구혼자 처단 에피소드를 바탕으로 만들어, 브라우저에서 바로 플레이할 수 있게 itch.io에 출시.',
    techStack: ['Godot 4.7', 'GDScript', 'Claude Code', 'gamedev-kit', 'Meshy AI', 'ElevenLabs', 'Blender'],
    achievements: [
      {
        description:
          '**시그니처 동작인 시위 걸기를 장전과 연결한 기획** — 원전의 활 시합처럼 시위를 걸며 판을 열고, 4발마다 시위가 끊어져 다시 걸게 해 한 동작이 싸움 내내 긴장의 리듬으로 되풀이되도록 설계',
        strong: false,
      },
    ],
  },
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
          '세이렌에 홀린 선원을 붙잡는 행동 하나에서 출발한 기획 — 플레이어를 오디세우스가 아닌 부관으로 두고, 노 젓기와 무기 조준을 빼 선원을 지키는 일에만 집중',
        strong: false,
      },
      {
        description:
          '**직접 만든 Claude Code 플러그인(gamedev-kit)의 개발 사이클 8회로 제작** — 방향이 갈리는 결정은 직접 내리고 나머지는 권고대로 위임',
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
      { label: '제작 과정 보기', href: '/activities/outis', webOnly: true },
    ],
    description:
      '외눈박이 거인의 동굴에 갇힌 오디세우스가 잠든 거인 곁을 몰래 오가며 무기를 만들고 선원들과 탈출하는 3인칭 3D 어드벤처. 호메로스 『오디세이아』의 키클롭스 에피소드를 바탕으로 기획부터 출시까지 전 과정을 1인으로 진행해, itch.io에 출시.',
    techStack: ['Godot 4.7', 'GDScript', 'Claude Code', 'Godot MCP Pro', 'Meshy AI', 'ElevenLabs', 'ChatGPT'],
    achievements: [
      {
        description:
          '거인의 눈을 말뚝으로 찌르는 행동 하나에서 출발한 기획 — 말뚝을 잘라 다듬고 달궈 찌르기까지의 준비를, 잠든 거인 곁에서 들키지 않고 해내는 구조로 확장',
        strong: false,
      },
      {
        description:
          '**기획서(GDD)와 코드를 양방향으로 맞추는 동기화 스킬 설계** — 수치·규칙·입력·HUD 항목에 ID를 붙여, 어느 한쪽을 바꿔도 다른 쪽에 곧바로 반영되는 구조 확보',
        strong: false,
      },
      {
        description:
          '**밸런스 수치를 엑셀 표로 관리하는 스킬 설계** — 수치 111개를 표 하나로 빼, 저장하면 실행 중인 게임에 즉시 반영되어 게임을 끄지 않고 값을 바꿔 가며 조정하는 구조 구축',
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
