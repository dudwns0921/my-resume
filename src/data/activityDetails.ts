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
  // 마지막 단계에서 그 앞 단계로 돌아가는 고리에 적는 말 (없으면 고리를 그리지 않는다)
  loop?: string;
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

// 게임 하나를 끝냈을 때 쌓여 있는 규칙의 수(보이스는 있을 때만). 앞 게임까지의 몫은 흐리게 그린다.
export interface CompoundGame {
  name: string;
  voice?: number;
  rules: number;
}

// 제목과 한 문장에 그림 하나가 붙는 칸. 그림은 셋 중 하나다 — 동기화 표, 쌓이는 막대, 화면 사진.
export interface FeatureBanner {
  name: string;
  line: string;
  alt: string;
  sync?: { gddLabel: string; codeLabel: string; missing: string; rows: SyncRow[] };
  compounds?: { carried: string; voice?: string; rules: string; example?: string; games: CompoundGame[] };
  image?: string;
  // 옆으로 넘겨 보는 화면 여러 장 (대시보드처럼 한 장으로는 다 못 보여 줄 때)
  shots?: { image: string; title: string; caption: string; alt: string }[];
  // 아래 둘과 problem 은 소개 사이트의 '쓰는 이유'와 같은 모양으로 그릴 때 쓴다 (KitWhy).
  problem?: string;
  syncPanel?: {
    gdd: string;
    code: string;
    none: string;
    foot: string;
    rows: { id: string; gdd: string; state: 'synced' | 'mismatch' | 'missing'; code?: string }[];
  };
  ruleStack?: { games: string[]; list: string[]; fresh: string; carried: string };
}

// 소개 사이트의 '쓰는 이유' — 머리글(eyebrow)과 제목, 이유마다 문제 · 해결 · 그림
export interface KitWhy {
  eyebrow: string;
  title: string;
  items: FeatureBanner[];
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
  videoId?: string;
  links: DetailLink[];
  tiles: DetailTile[];
  // 머리 아래 금색 띠의 칸 수 (사이클처럼 그 게임을 나눈 마디의 수). 0이면 띠를 두지 않는다.
  strip: number;
  // 있으면 머리를 소개 사이트의 첫 화면처럼 그린다 — 두 줄 제목(둘째 줄은 그라데이션), 별과 카드 테두리 없이.
  hero?: { title: string; accent: string };
  // 있으면 features 대신 소개 사이트의 '쓰는 이유' 모양으로 그린다.
  why?: KitWhy;
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
    kicker: '게임을 만드는 Claude Code 플러그인',
    heading: '소개',
    hero: { title: 'AI로 게임 만들기, 시작은 쉽다.', accent: '끝까지 가는 게 어렵다.' },
    summary:
      '몇 주째 만들다 보면 어디까지 했는지 흐려지고, 기획서와 코드는 따로 놀고, 지난 게임에서 겪은 실수를 또 반복한다. gamedev-kit은 이 모든 걸 눈으로 확인하면서 만들게 해 준다.',
    links: [
      { label: '소개 사이트', href: 'https://gamedev-kit-site.vercel.app/ko' },
      { label: 'GitHub', href: 'https://github.com/dudwns0921/claude-gamedev-kit' },
      { label: 'Threads', href: 'https://www.threads.com/@glowingjung/post/DeRzUkfGjII?hl=ko' },
    ],
    tiles: [],
    strip: 0,
    why: {
      eyebrow: '쓰는 이유',
      title: '게임을 끝까지 만들게 하는 세 가지',
      items: [
        {
          problem: '어디까지 했는지 흐려진다',
          name: '한눈에 보고, 그 자리에서 결정한다',
          line: '모든 게임의 진행 상황이 대시보드 한 화면에 모인다. 단계마다 기능 · 아트 · 사운드 · 검증이 어디까지 됐는지 보이고, 에이전트의 질문은 비교할 그림과 함께 카드로 도착한다. 고르기만 하면 Claude가 이어서 작업한다.',
          alt: '대시보드 화면 여섯 장',
          shots: [
            {
              image: '/activities/gamedev-kit/board-games.png',
              title: '모든 게임을 한 화면에',
              caption: '게임마다 남은 결정과 진행률을 한눈에 확인한다.',
              alt: '대시보드 첫 화면 — 게임 세 개, 게임마다 나를 기다리는 것과 진행 정도',
            },
            {
              image: '/activities/gamedev-kit/board-overview.png',
              title: '단계별 진행 현황',
              caption: '플레이어가 만나는 순서대로, 단계마다 기능 · 아트 · 사운드 · 검증이 얼마나 됐는지 보여 준다.',
              alt: '한 게임의 개요 — 아트 썸네일이 붙은 단계 카드가 플레이 순서대로 놓이고, 옆에 지금 사이클과 아직 정하지 않은 것',
            },
            {
              image: '/activities/gamedev-kit/board-stage.png',
              title: '단계를 열면',
              caption: '그 단계에 들어간 기획 항목과 그림, 사운드를 바로 보고 들어 본다.',
              alt: '단계 하나를 연 화면 — 기획 항목, 그림 세 장, 재생할 수 있는 사운드 하나',
            },
            {
              image: '/activities/gamedev-kit/board-assets.png',
              title: '에셋을 나란히',
              caption: '만든 그림과 소리를 한데 놓고 톤이 맞는지 살핀다.',
              alt: '에셋 탭 — 종이 공예 스타일 그림 네 장과 사운드 세 개',
            },
            {
              image: '/activities/gamedev-kit/board-review.png',
              title: '에이전트의 질문에 답하기',
              caption: '에이전트의 질문에 비교할 그림을 붙이고, 추천하는 방향을 함께 띄운다.',
              alt: '리뷰 탭 — 컨셉 그림 세 장을 비교하며 고르는 결정, 추천 답이 붙은 결정',
            },
            {
              image: '/activities/gamedev-kit/board-checks.png',
              title: '플레이해 보고 체크',
              caption: '직접 해 봐야 아는 것은 체크 항목으로 올라온다.',
              alt: '플레이해서 확인할 항목 — 항목마다 OK · 문제 버튼과 본 것을 적는 칸',
            },
          ],
        },
        {
          problem: '기획서와 코드가 따로 논다',
          name: '기획서와 코드가 늘 일치한다',
          line: '기획서의 숫자와 규칙마다 ID가 붙고, 코드에도 같은 ID가 남는다. 둘이 달라지거나 아직 구현되지 않은 항목이 생기면 키트가 바로 찾아내고, 어느 쪽이 맞는지만 정하면 나머지를 맞춰 준다. 밸런스 수치는 엑셀 한 장으로 보고 고칠 수 있다.',
          alt: '기획서 동기화 표와 코드 — 한 줄은 일치, 한 줄은 불일치, 한 줄은 아직 구현 안 됨',
          syncPanel: {
            gdd: '기획서 · 동기화 표',
            code: '코드',
            none: '아직 구현 안 됨',
            foot: 'gdd-sync가 어긋난 곳을 찾아 맞춘다.',
            rows: [
              { id: 'BAL.BAG.CAPACITY', gdd: '3~5', state: 'synced', code: 'BAG_CAPACITY = 4' },
              { id: 'BAL.FALL.PENALTY', gdd: '4', state: 'mismatch', code: 'FALL_PENALTY = 6' },
              { id: 'RULE.CLIFF', gdd: '—', state: 'missing' },
            ],
          },
        },
        {
          problem: '같은 실수를 또 한다',
          name: '한 번 겪은 건 다음 게임이 기억한다',
          line: '게임을 만들며 겪은 문제와 그 해결법이 짧은 규칙으로 정리되어, 다음 게임부터 자동으로 적용된다. 원하면 그 규칙을 키트로 보낼 수 있고, 많은 사람들이 동일하게 겪은 문제는 모든 사용자의 기본값이 된다.',
          alt: '이어지는 게임 세 개, 게임마다 내 규칙이 쌓여 간다',
          ruleStack: {
            games: ['첫 게임', '두 번째', '세 번째'],
            list: ['터치는 실기기에서 확인', '밸런스 수치는 파일 하나에', 'HUD 글자는 32px 이상', '소리는 첫 터치 뒤에', '씬 전환 전에 저장', '올리기 전에 빌드 용량 확인'],
            fresh: '이번 게임에서 배운 것',
            carried: '이전 게임에서 이어받은 것',
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
