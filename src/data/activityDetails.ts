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
  // 머리글 뒤에 붙는 링크. href가 '/activities/<slug>'면 다른 상세 페이지로 잇는다.
  link?: DetailLink;
}

export interface FlowStage {
  name: string;
  owner: string;
  model?: string;
  byUser?: boolean;
  line: string;
}

// 번호가 붙은 단계 카드가 선으로 이어지는 절. model 칸에는 모델 이름이나 쓰는 도구를 적는다.
// after 는 매번 돌지 않아 줄 밖에 따로 두는 단계다 (when 에 언제 하는지를 적는다).
export type FlowSection = SectionHead & {
  legend?: { me: string; ai: string };
  stages: FlowStage[];
  after?: FlowStage & { when: string };
};

export interface ToolCard {
  name: string;
  // 이름 옆에 붙는 꼬리표 (에이전트의 모델 등)
  tag?: string;
  line: string;
}

export interface ToolFigure {
  tag: string;
  image: string;
  alt: string;
  caption: string;
  link?: DetailLink;
}

// GDD 표의 한 줄과 그 값을 정의하는 코드의 짝. code 가 없으면 아직 만들지 않은 항목이다.
export interface SyncRow {
  id: string;
  gdd: string;
  state: '일치' | '불일치' | '없음';
  code?: string;
  // 코드 줄에서 값이 적힌 부분 (불일치일 때 눈에 띄게 칠한다)
  codeValue?: string;
}

// 게임 하나를 끝냈을 때 쌓여 있는 보이스와 규칙의 수. 앞 게임까지의 몫은 흐리게 그린다.
export interface CompoundGame {
  name: string;
  voice: number;
  rules: number;
}

// 제목과 한 문장에 그림 하나가 붙는 칸. 그림은 셋 중 하나다 — 동기화 표, 쌓이는 막대, 화면 사진.
export interface FeatureBanner {
  name: string;
  line: string;
  alt: string;
  sync?: { gddLabel: string; codeLabel: string; missing: string; rows: SyncRow[] };
  compounds?: { carried: string; voice: string; rules: string; games: CompoundGame[] };
  image?: string;
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
  // 제목 옆에 붙는 말. 게임은 '제작 과정', 플러그인은 '소개'처럼 쓴다.
  heading: string;
  summary: string;
  banner?: string;
  // 배너 그림이 그 페이지의 것이 아닐 때 대체 글자를 따로 적는다.
  bannerAlt?: string;
  // 페이지의 모양. 'kit'은 gamedev-kit 배너의 모양(민트 · 핑크 그라데이션, 알약 단계)을 따르고, 머리에 그림 대신 글만 둔다.
  theme?: 'kit';
  videoId?: string;
  links: DetailLink[];
  tiles: DetailTile[];
  // 머리 아래 금색 띠의 칸 수 (사이클처럼 그 게임을 나눈 마디의 수)
  strip: number;
  flow?: FlowSection;
  // 아래 넷은 있을 때만, 적힌 순서대로 그린다 (플러그인 페이지: 에이전트 → 3D 에셋 플로우 → 소리와 영상 → 스킬).
  agents?: SectionHead & { items: ToolCard[] };
  assetFlow?: FlowSection;
  assetCards?: SectionHead & { items: ToolCard[] };
  tools?: SectionHead & { items: ToolCard[]; figure?: ToolFigure };
  // 제목과 한 문장에 그림 하나가 붙는 절 (플러그인 페이지)
  features?: SectionHead & { items: FeatureBanner[] };
  // 쓸수록 나아지게 한 장치
  growth?: SectionHead & { items: ToolCard[] };
  timeline: SectionHead & { items: TimelineCard[] };
}

export const activityDetails: ActivityDetail[] = [
  {
    slug: 'keros',
    title: 'Keros',
    kicker: '3인칭 디펜스',
    heading: '제작 과정',
    summary: '영화 《오디세이》의 세이렌 장면에서 출발해, 오디세우스 배의 부관으로서 홀린 선원을 붙잡으며 이타카까지 버티는 게임이 됐다. 구현은 Claude Code에 맡기고, 무엇을 만들지와 큰 방향은 직접 정했다.',
    banner: '/activities/keros/banner.jpg',
    videoId: 'EwlIqWfFYnI',
    links: [
      { label: 'itch.io에서 플레이', href: 'https://dudwns0921.itch.io/keros' },
    ],
    tiles: [
      { label: '개발 사이클', value: '8', tone: 'gold' },
      { label: '플레이테스트 문서', value: '11' },
      { label: '코드와 연결된 GDD 항목', value: '134' },
      { label: '엑셀 밸런스 값', value: '58', tone: 'sea' },
    ],
    strip: 8,
    timeline: {
      title: '만든 순서',
      lead: '직접 개발한 플러그인 gamedev-kit의 사이클을 여덟 번 돌려 만들었다.',
      link: { label: 'gamedev-kit 소개', href: '/activities/gamedev-kit' },
      items: [
        { label: '01', name: '프로토타입', line: '임시 블록으로 시스템부터 만들었다.', image: '/activities/keros/c00.jpg' },
        { label: '02', name: '아트 적용', line: '디자인 컨셉을 잡고 임시 블록을 3D 모델로 바꿨다.', image: '/activities/keros/c01.jpg' },
        { label: '03', name: '추가 기획', line: '플레이어를 위협하는 몬스터를 추가로 기획해 넣었다.', image: '/activities/keros/c05.jpg' },
        { label: '04', name: '시스템 구성', line: '위기와 보상 규칙을 더해 게임 시스템을 구성했다.', image: '/activities/keros/c06b.jpg' },
        { label: '05', name: '스토리텔링', line: '컷신과 엔딩을 넣어 스토리를 구체화했다.', image: '/activities/keros/ending.jpg' },
        { label: '06', name: '출시', line: '브라우저에서 바로 할 수 있게 itch.io에 올렸다.', image: '/activities/keros/c08.jpg' },
      ],
    },
  },
  {
    slug: 'outis',
    title: 'Outis',
    kicker: '3인칭 어드벤처',
    heading: '제작 과정',
    summary: '영화 《오디세이》에서 말뚝으로 거인의 눈을 찌르는 장면에서 출발해, 잠든 거인 곁에서 무기를 만들어 동굴을 빠져나가는 게임이 됐다. 코드와 씬은 Claude Code가 Godot 에디터를 직접 조작해 구현했고, 나는 기획과 에셋을 맡았다.',
    banner: '/activities/outis/banner.jpg',
    videoId: '5TGHxiWfELE',
    links: [
      { label: 'itch.io에서 플레이', href: 'https://dudwns0921.itch.io/outis' },
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
    tools: {
      title: '도구',
      lead: '이때 만든 동기화 스킬과 밸런스 표 스킬이 지금의 gamedev-kit 플러그인이 됐다.',
      link: { label: 'gamedev-kit 소개', href: '/activities/gamedev-kit' },
      items: [
        { name: 'gdd-sync', line: 'GDD와 코드가 어긋나지 않게 맞추는 스킬로, 게임 코드보다 먼저 만들었다.' },
        { name: 'balance-table', line: '개발 중인 게임이 0.5초마다 엑셀 표를 보고 바뀐 값을 다시 읽는다.' },
        { name: 'Meshy AI', line: '그림을 넘기면 3D 모델과 애니메이션을 만들어 준다.' },
      ],
      figure: {
        tag: 'balance.xlsx',
        image: '/activities/outis/balance.jpg',
        alt: 'Outis 밸런스 엑셀 표',
        caption: '값을 바꿀 때마다 Claude에게 요청하는 것도 번거로웠고, 수치가 흩어져 한눈에 보이지도 않았다. 그래서 밸런스 수치 111개를 엑셀 파일 하나로 뺐다.',
      },
    },
    timeline: {
      title: '만든 순서',
      items: [
        { label: '01', name: '맵 디자인', line: '손 스케치를 기준으로 입구 옆에 거인의 침상을 둔 동굴 배치를 짰다.', image: '/activities/outis/map.jpg' },
        { label: '02', name: '시스템 구성', line: '플레이어의 행동과 그 결과를 규칙으로 정해 게임 시스템을 구성했다.', image: '/activities/outis/noise-event.jpg' },
        { label: '03', name: '스토리텔링', line: '거인의 동굴 에피소드를 바탕으로 도입부터 엔딩까지 스토리를 구체화했다.', image: '/activities/outis/name-choice.jpg' },
        { label: '04', name: '밸런스 조정', line: '값을 바꾸고 플레이해 보는 일을 반복하면서 재미를 느낄 수 있는 수치를 찾았다.', image: '/activities/outis/danger.jpg' },
        { label: '05', name: '에셋 제작', line: 'Claude로 프롬프트를 만들어 GPT 이미지로 그림을 뽑고, 그 그림을 Meshy AI에 수동으로 넣어 3D 모델을 만들었다.', image: '/activities/outis/concept.jpg' },
        { label: '06', name: '출시', line: 'Windows와 macOS 빌드에 이어 웹 빌드까지 itch.io에 올렸다.', image: '/activities/outis/banner.jpg' },
      ],
    },
  },
  {
    slug: 'gamedev-kit',
    title: 'gamedev-kit',
    kicker: 'Claude Code 플러그인',
    heading: '소개',
    summary:
      '기획서(GDD)를 기반으로 기획부터 구현, 플레이까지를 하나의 일관된 사이클로 진행하는 게임 개발 워크플로우다. 단계마다 역할을 나눠 맡은 AI 에이전트가 일하고, 목표를 정하는 것과 직접 플레이하는 것은 내가 한다.',
    theme: 'kit',
    links: [
      { label: 'GitHub', href: 'https://github.com/dudwns0921/claude-gamedev-kit' },
      { label: 'Threads', href: 'https://www.threads.com/@glowingjung/post/DeRzUkfGjII?hl=ko' },
    ],
    tiles: [
      { label: '스킬', value: '13', tone: 'gold' },
      { label: '에이전트', value: '5' },
      { label: '사이클 단계', value: '6' },
      { label: 'Threads 글 조회', value: '6,959', tone: 'sea' },
    ],
    strip: 6,
    flow: {
      title: '사이클',
      lead: 'AI로 만들다 보면 그때그때 생각나는 대로 진행하게 돼서, 목표 하나마다 아래 단계를 한 바퀴 돌게 했다.',
      legend: { me: '내가 하는 단계', ai: 'AI 에이전트가 하는 단계' },
      stages: [
        { name: '목표', owner: '나', byUser: true, line: '이번에 무엇을 만들지 내가 정해서 말한다.' },
        { name: '기획', owner: 'systems-designer', model: 'Opus', line: '플레이어가 무엇을 하면 어떻게 되는지를 규칙과 숫자로 쓴다.' },
        { name: '디자인', owner: 'designer', model: 'Opus', line: '그 규칙이 게임에서 어떻게 보이고 들릴지를 정리한다.' },
        { name: '계획', owner: 'developer', model: 'Opus', line: '앞에서 쓴 내용을 작업 여러 개로 나누고 만들 순서를 짠다.' },
        { name: '구현', owner: 'developer', model: 'Sonnet', line: '겹치지 않는 작업은 여러 AI가 하나씩 맡아 동시에 만든다.' },
        { name: '플레이', owner: '나', byUser: true, line: '만들어진 게임을 내가 직접 해 보면서 고칠 점을 적는다.' },
      ],
      after: {
        when: '플레이한 뒤',
        name: '고치기',
        owner: 'playtest-analyst',
        model: 'Opus',
        line: '플레이하며 적은 문제의 원인을 찾아 작업으로 나눠 고치고, 다시 플레이하는 것을 될 때까지 되풀이한다.',
      },
    },
    features: {
      title: '세 가지 장치',
      lead: '몇 주에 걸쳐 만들다 보면 기획서와 코드가 어긋나고, 얼마나 만들었는지 모르게 되고, 지난 게임에서 배운 것이 사라져서 이 셋을 중심에 뒀다.',
      items: [
        {
          name: '기획서와 코드가 어긋나지 않는다',
          line: 'GDD의 숫자와 규칙마다 ID를 붙이고 코드에 같은 ID를 표시해 두어, 값이 다른 곳과 아직 만들지 않은 곳을 찾아 한쪽에 맞추게 했다.',
          alt: 'GDD 동기화 표와 코드 — 한 줄은 일치, 한 줄은 값이 다르고, 한 줄은 아직 코드에 없다',
          sync: {
            gddLabel: 'GDD · 동기화 표',
            codeLabel: '코드',
            missing: '아직 표시가 없다 — 만들지 않았다',
            rows: [
              { id: 'BAL.COIN.VALUE', gdd: '5', state: '일치', code: 'const COIN_VALUE := ', codeValue: '5' },
              { id: 'BAL.EEL.DAMAGE', gdd: '8', state: '불일치', code: 'const DAMAGE := ', codeValue: '10' },
              { id: 'RULE.END.WRECK', gdd: '—', state: '없음' },
            ],
          },
        },
        {
          name: '어디까지 만들었는지 항상 보인다',
          line: '플레이어가 만나는 순서대로 단계마다 카드를 그려, 된 것 · 임시인 것 · 안 만든 것 · 문제인 것과 아직 정하지 않은 것을 보여 주게 했다.',
          alt: '예시 게임의 현황판 — 플레이 순서대로 놓인 단계 카드와 아직 정하지 않은 질문',
          image: '/activities/gamedev-kit/board.png',
        },
        {
          name: '게임을 만들수록 나아진다',
          line: '갈리는 결정에서 내가 고른 쪽(보이스)과 걸려 넘어진 함정(규칙)이 따로 쌓여, 다음 게임이 그것을 가지고 시작하게 했다.',
          alt: '게임 세 개가 나란히 있고, 보이스와 규칙이 앞 게임의 것을 이어받으며 쌓인다',
          compounds: {
            carried: '이어받는다',
            voice: '보이스 — 갈리는 결정에서 내가 고른 쪽',
            rules: '규칙 — 걸려 넘어진 함정',
            games: [
              { name: '게임 1', voice: 1, rules: 1 },
              { name: '게임 2', voice: 2, rules: 3 },
              { name: '게임 3', voice: 3, rules: 5 },
            ],
          },
        },
      ],
    },
    timeline: {
      title: '게임',
      items: [
        { label: '3인칭 어드벤처', name: 'Outis', line: '여기서 만든 동기화 스킬과 밸런스 표 스킬이 플러그인의 첫 버전이 됐다.', image: '/activities/outis/cutscene-intro.jpg' },
        { label: '3인칭 디펜스', name: 'Keros', line: '처음부터 이 플러그인으로 시작해 사이클 여덟 번에 걸쳐 만들었다.', image: '/activities/keros/c08.jpg' },
        { label: '진행 중', name: '다음 게임', line: '지금도 이 플러그인으로 만들고 있다.' },
      ],
    },
  },
];
