// 액티비티 상세 페이지(/activities/[slug]) 내용. 웹에서만 보이고 PDF에는 들어가지 않는다.
// 수치와 사례는 게임 저장소(GDD · 사이클 · 플레이테스트 문서 · 커밋 기록 · 현황판 · CLAUDE.md · 에셋 규격)와 gamedev-kit 저장소 · 제작기에 적힌 것만 쓴다.
// 누가 정했는지는 문서에 그렇게 적힌 것만 '내가 정했다'고 쓴다.
// 한 칸에 한 문장. 내가 블로그에 쓰는 말투(평어체 · 과거형)로 쓰고, 길어지면 줄이지 말고 뺀다.

export interface DetailLink {
  label: string;
  href: string;
}

export interface DetailTile {
  label: string;
  value: string;
  tone?: 'gold' | 'sea';
}

// 절마다 제목 · 곁제목 · 머리글을 데이터가 들고 있다. 게임마다 일한 방식이 달라 절의 이름도 달라진다.
interface SectionHead {
  title: string;
  sub?: string;
  lead?: string;
}

export interface FlowStage {
  name: string;
  owner: string;
  model?: string;
  byUser?: boolean;
  line: string;
}

export interface Decision {
  before: string;
  after: string;
  why?: string;
}

export interface ToolCard {
  name: string;
  line: string;
}

export interface ToolFigure {
  tag: string;
  image: string;
  alt: string;
  caption: string;
  link?: DetailLink;
}

export interface TimelineCard {
  label: string;
  name: string;
  line: string;
  image?: string;
}

export interface ActivityDetail {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  banner: string;
  videoId?: string;
  links: DetailLink[];
  tiles: DetailTile[];
  // 머리 아래 금색 띠의 칸 수 (사이클처럼 그 게임을 나눈 마디의 수)
  strip: number;
  flow: SectionHead & { legend: { me: string; ai: string }; stages: FlowStage[] };
  decisions: SectionHead & { items: Decision[] };
  tools: SectionHead & { items: ToolCard[]; figure?: ToolFigure };
  timeline: SectionHead & { items: TimelineCard[] };
  reverts: SectionHead & { items: { title: string; body: string }[] };
  outro?: SectionHead & { text: string };
}

export const activityDetails: ActivityDetail[] = [
  {
    slug: 'keros',
    title: 'Keros',
    kicker: '3인칭 디펜스',
    summary: '영화 《오디세이》의 세이렌 장면에서 출발해, 오디세우스 배의 부관이 되어 홀린 선원을 붙잡으며 이타카까지 버티는 게임이 됐다. 구현은 Claude Code에 맡기고, 무엇을 만들지와 큰 방향은 직접 정했다.',
    banner: '/activities/keros/banner.jpg',
    videoId: 'EwlIqWfFYnI',
    links: [
      { label: 'itch.io에서 플레이', href: 'https://dudwns0921.itch.io/keros' },
      { label: 'gamedev-kit (GitHub)', href: 'https://github.com/dudwns0921/claude-gamedev-kit' },
    ],
    tiles: [
      { label: '개발 사이클', value: '8', tone: 'gold' },
      { label: '플레이테스트 문서', value: '11' },
      { label: '코드와 연결된 GDD 항목', value: '134' },
      { label: '엑셀 밸런스 값', value: '58', tone: 'sea' },
    ],
    strip: 8,
    flow: {
      title: '한 사이클',
      lead: '목표를 말하고 직접 플레이하는 것은 내가 했고, 나머지 단계는 단계마다 모델을 정해 둔 AI 에이전트가 맡았다.',
      legend: { me: '내가 하는 단계', ai: '에이전트가 하는 단계' },
      stages: [
        { name: '목표', owner: '나', byUser: true, line: '이번에 만들 것을 내가 말하면 문서 맨 위에 그대로 적힌다.' },
        { name: '기획', owner: 'AI', model: 'Fable', line: '목표를 규칙과 수치로 쓰는데, 값은 정하지 않고 범위로 내놓는다.' },
        { name: '디자인', owner: 'AI', model: 'Fable', line: 'UI와 연출, 소리를 어떻게 할지 쓰고 필요한 에셋을 정리한다.' },
        { name: '계획', owner: 'AI', model: 'Opus', line: '앞 단계 문서를 읽고 작업을 나눠 순서를 정한다.' },
        { name: '구현', owner: 'AI', model: 'Opus', line: '작업 하나를 에이전트 하나가 맡아 문서대로 만든다.' },
        { name: '플레이', owner: '나', byUser: true, line: '직접 해 보고 문제를 적으면, AI가 원인을 찾아 작업 문서로 만든다.' },
        { name: '배포', owner: 'AI', model: 'Sonnet', line: '빌드해서 itch.io에 올리는데, 올리기 전에 나에게 묻는다.' },
        { name: '회고', owner: 'AI', line: 'AI가 쓴 글을 내가 고치는데, 회고까지 마친 사이클은 여덟 중 둘이다.' },
      ],
    },
    decisions: {
      title: '결정',
      lead: '기록된 결정 129건을 하나씩 다 고른 것은 아니다. 방향이 갈리는 것은 직접 정했고, 권고대로 가도 되는 것은 묶어서 맡겼다.',
      items: [
        {
          before: '귀를 막은 선원이 저절로 제자리로 돌아갔다',
          after: '그 자리에 멈춰 서고, 부관이 붙잡아 데려가야 한다',
          why: '"밀랍을 넣으면 바로 원래 자리로 복귀하는 건 문제가 있는 거 같아."',
        },
        {
          before: '끝없는 항해 모드가 따로 있었다',
          after: '이타카까지 여섯 구간을 가는 모드 하나만 남겼다',
          why: '난이도가 어디까지 오를지 알 수 없어서 끝이 있는 쪽에 집중했다.',
        },
        { before: '뛰기와 점프에 스태미너가 들었다', after: '스태미너를 없앴다', why: '내가 넣자고 한 규칙이지만, 어차피 계속 뛰어다니는 게임이라고 봤다.' },
      ],
    },
    tools: {
      title: '도구',
      sub: '내 플러그인 gamedev-kit의 스킬',
      items: [
        { name: 'gdd-sync', line: '기획서(GDD)와 코드에 같은 ID를 붙여두고 서로 어긋나지 않게 맞춘다.' },
        { name: 'balance-table', line: '바다가 흐르는 속도처럼 눈으로 맞출 값은 엑셀 표로 옮겨, 게임을 켠 채 고친다.' },
        { name: 'asset', line: '3D 모델은 그림을 먼저 뽑아 보고, 내가 승인한 것만 만든다.' },
      ],
      figure: {
        tag: 'board',
        image: '/activities/keros/board.jpg',
        alt: 'Keros 현황판',
        caption: 'GDD가 길어지면서 어디까지 만들었는지 한눈에 보이지 않았다. 그래서 문서를 읽어 플레이어가 겪는 순서대로 그려 주는 현황판을 만들었다.',
        link: { label: '현황판을 소개한 Threads 글', href: 'https://www.threads.com/@glowingjung/post/DeRzUkfGjII?hl=ko' },
      },
    },
    timeline: {
      title: '만든 순서',
      items: [
        {
          label: '사이클 이전',
          name: '프로토타입',
          line: 'Roblox로 시작했다가 첫날 Godot으로 다시 만들었다.',
          image: '/activities/keros/c00.jpg',
        },
        { label: '사이클 01', name: '진짜 모습', line: '디자인 컨셉을 잡고, 블록이던 갑판에 입혔다.', image: '/activities/keros/c01.jpg' },
        { label: '사이클 03', name: '움직임', line: '부관이 선원을 안아 들어 앞에 내려놓을 수 있게 했다.', image: '/activities/keros/c03.jpg' },
        { label: '사이클 05', name: '바다 괴물', line: '촉수에 휘감긴 선원을 부관이 풀러 가게 했다.', image: '/activities/keros/c05.jpg' },
        {
          label: '사이클 06',
          name: '소용돌이와 정비',
          line: '소용돌이를 만들고, 구간 사이에 재화로 선원을 보충하고 밧줄과 밀랍을 보강하는 정비를 넣었다.',
          image: '/activities/keros/c06b.jpg',
        },
        {
          label: '사이클 08',
          name: '출시',
          line: '브라우저에서 한 판에 8분쯤 걸리는 웹 빌드를 itch.io에 올렸다.',
          image: '/activities/keros/c08.jpg',
        },
      ],
    },
    reverts: {
      title: '다시 만든 것',
      items: [
        { title: '갑판을 세 번 만들었다', body: '평평한 갑판으로 시작했고, 컨셉 그림은 두 번째 판 직전에야 처음 그렸다.' },
        { title: '생성 AI가 못 만든 선체', body: '선체는 두 번 다 속이 찬 덩어리로 나와서 Blender 스크립트로 만들었다.' },
      ],
    },
    outro: { title: 'gamedev-kit', text: 'Keros를 만드는 닷새 동안 필요한 스킬을 그때그때 플러그인에 더했다. 그사이 gamedev-kit은 0.1.0에서 0.18.1까지 올라갔다.' },
  },
  {
    slug: 'outis',
    title: 'Outis',
    kicker: '3인칭 어드벤처',
    summary: '영화 《오디세이》에서 말뚝으로 거인의 눈을 찌르는 장면에서 출발해, 잠든 거인 곁에서 무기를 만들어 동굴을 빠져나가는 게임이 됐다. 코드와 씬은 Claude Code가 Godot 에디터를 직접 조작해 만들었고, 나는 기획과 에셋을 맡았다.',
    banner: '/activities/outis/banner.jpg',
    videoId: '5TGHxiWfELE',
    links: [
      { label: 'itch.io에서 플레이', href: 'https://dudwns0921.itch.io/outis' },
      { label: '제작기', href: 'https://dudwns0921.github.io/2026/09/28/Outis-Devlog/' },
      { label: 'gamedev-kit (GitHub)', href: 'https://github.com/dudwns0921/claude-gamedev-kit' },
    ],
    tiles: [
      { label: '코드와 연결된 GDD 항목', value: '219', tone: 'gold' },
      { label: '엑셀 밸런스 값', value: '111' },
      { label: '도기 그림 컷신', value: '12' },
      { label: '이름 선택 엔딩', value: '3', tone: 'sea' },
    ],
    strip: 6,
    flow: {
      title: '작업 방식',
      lead: '기획서(GDD)를 기반으로 삼았고, 기획과 조정은 내가 했다.',
      legend: { me: '내가 하는 단계', ai: 'Claude Code와 도구가 하는 단계' },
      stages: [
        { name: '기획', owner: '나', byUser: true, line: '무엇을 만들고 뺄지 내가 정하면, 결정이 날짜와 함께 GDD에 남는다.' },
        { name: 'GDD 반영', owner: 'Claude Code', line: '그 결정을 규칙과 수치로 풀어 쓰고, 항목마다 ID를 붙인다.' },
        { name: '구현', owner: 'Claude Code', line: '코드를 만들면서 값을 정의하는 줄마다 같은 ID를 주석으로 단다.' },
        { name: '동기화', owner: 'gdd-sync', line: 'GDD 표와 코드 주석을 ID로 짝지어 값이 다른 것을 찾아 맞춘다.' },
        { name: '조정', owner: '나', byUser: true, line: '게임을 켜 둔 채 엑셀 표에서 값을 고친다.' },
        { name: '코드 반영', owner: 'balance-table', line: '값이 확정되면 표의 값을 코드에 반영하고 GDD까지 맞춘다.' },
        { name: '출시', owner: '빌드 스크립트', line: '표와 코드가 다르면 빌드가 멈추고, 통과하면 itch.io에 올린다.' },
      ],
    },
    decisions: {
      title: '결정',
      items: [
        {
          before: '약 90초마다 식사 주기로 선원 하나를 잃었다',
          after: '돌아다니지 않는 거인과 소음 게이지로 다시 설계했다',
          why: '뛰면 빠르지만 소리가 쌓이고, 다 차면 선원을 잃는다.',
        },
        {
          before: 'HUD에 소음과 모닥불 연료 막대를 띄웠다',
          after: '화면 가장자리가 어두워지고 심장 소리가 빨라지게 했다',
          why: '수치보다 위험을 감각으로 전하는 편이 몰입감을 준다고 생각했다.',
        },
        { before: '불은 선원을 푼 뒤에만 살릴 수 있었다', after: '불을 언제든 살릴 수 있게 했다', why: '거인이 예민해지는 대가를 언제 치를지 플레이어가 고른다.' },
      ],
    },
    tools: {
      title: '도구',
      items: [
        { name: 'gdd-sync', line: 'GDD와 코드가 어긋나지 않게 맞추는 스킬로, 게임 코드보다 먼저 만들었다.' },
        { name: 'balance-table', line: '개발 중인 게임이 0.5초마다 엑셀 표를 보고 바뀐 값을 다시 읽는다.' },
        { name: 'Meshy AI', line: 'ChatGPT 이미지로 만든 컨셉 그림을 넘겨 3D 모델과 애니메이션을 받았다.' },
      ],
      figure: {
        tag: 'balance.xlsx',
        image: '/activities/outis/balance.jpg',
        alt: 'Outis 밸런스 엑셀 표',
        caption: '값을 바꿀 때마다 Claude에게 요청하는 것도 번거로웠고, 수치가 흩어져 한눈에 보이지도 않았다. 그래서 밸런스 수치 111개를 엑셀 파일 하나로 뺐다.',
        link: { label: '제작기에서 더 읽기', href: 'https://dudwns0921.github.io/2026/09/28/Outis-Devlog/' },
      },
    },
    timeline: {
      title: '만든 순서',
      items: [
        { label: '01', name: '동굴', line: '내 스케치를 기준으로 동굴의 뼈대를 잡았다.', image: '/activities/outis/map.jpg' },
        {
          label: '02',
          name: '잠입 규칙',
          line: '죽는 것이 전략이 되지 않게, 붙잡히면 챕터를 처음부터 다시 하게 했다.',
          image: '/activities/outis/noise-event.jpg',
        },
        {
          label: '03',
          name: '이름 선택',
          line: '탈출한 뒤 진짜 이름을 외칠지 고르는 에필로그까지 넣었다.',
          image: '/activities/outis/name-choice.jpg',
        },
        {
          label: '04',
          name: '하루 주기',
          line: '조용히 있으면 얼마든지 기다릴 수 있어서 저녁마다 선원 둘을 잃게 했다.',
          image: '/activities/outis/supper.jpg',
        },
        {
          label: '05',
          name: '도기 그림 컷신',
          line: '컷신은 Claude로 프롬프트를 뽑아 ChatGPT 이미지로 만들었다.',
          image: '/activities/outis/cutscene-intro.jpg',
        },
        {
          label: '06',
          name: '거인의 소리',
          line: '거인의 코골이는 내 코골이를 녹음해 느리고 낮게 튼 것이다.',
          image: '/activities/outis/danger.jpg',
        },
      ],
    },
    reverts: {
      title: '다시 만든 것',
      items: [
        { title: '내려다보는 카메라', body: '위에서 내려다보면 거인과의 크기 차이가 드러나지 않아, 뒤에서 올려다보는 3인칭으로 바꿨다.' },
        { title: '푸근한 거인', body: '낮은 시점에서 올려다보니 짧고 둥근 팔다리가 위협이 되지 않아서, 앙상하게 마른 거인으로 바꿨다.' },
      ],
    },
    outro: { title: 'gamedev-kit', text: '이때 만든 동기화 스킬과 밸런스 표 도구가 뒤에 Claude Code 플러그인 gamedev-kit 0.1.0이 됐다.' },
  },
];
