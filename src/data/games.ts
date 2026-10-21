// 게임 페이지(/games) 내용. 웹에서만 보이고 PDF에는 들어가지 않는다.
// 개인 활동이라 공식 대회 · 행사를 모은 Activities와 따로 둔다. 문장 규칙은 Activities와 같다.
import type { Achievement } from '@/app/components/workExprience/ProjectInfo';

export interface Game {
  slug: string;
  title: string;
  period: string;
  // gamedev-kit으로 만든 게임은 사이클을 몇 번 돌렸는지 적는다. 플러그인으로 만들지 않은 Outis는 비운다.
  kitCycles?: number;
  genre: string;
  banner: string;
  // 카드 테두리와 빛의 색. 배너 그림의 색을 따른다.
  accent: string;
  description: string;
  achievements: Achievement[];
  links: { label: string; href: string }[];
}

// 세 게임을 묶는 머리. 역할 · 기술 스택은 세 게임에 공통이다.
export const trilogy = {
  title: '오디세이 3부작',
  period: '2026.09 - 2026.10',
  role: '1인 개발 · 기획 · AI 디렉팅(구현·3D 에셋·사운드·영상)',
  description:
    '호메로스 『오디세이아』의 세 에피소드를 하나씩 게임으로 옮긴 3부작. 기획부터 출시까지 1인으로 진행해 모두 itch.io에 출시.',
  techStack: ['Godot 4.7', 'GDScript', 'Claude Code', 'gamedev-kit', 'Meshy AI', 'ElevenLabs', 'Blender', 'Higgsfield', 'ChatGPT'],
};

// 최신순
export const games: Game[] = [
  {
    slug: 'nostos',
    title: 'Nostos',
    period: '2026.10',
    kitCycles: 18,
    genre: '1인칭 활 싸움',
    banner: '/activities/nostos/banner.jpg',
    accent: '#ffd24a',
    links: [
      { label: 'itch.io에서 플레이', href: 'https://dudwns0921.itch.io/nostos' },
      { label: '제작 과정 보기', href: '/activities/nostos' },
    ],
    description:
      '스무 해 만에 집에 돌아온 오디세우스가 되어, 잔치를 벌이는 구혼자들을 오직 활 하나로 쓰러뜨리는 1인칭 3D 활 싸움. 21~22권의 활 시합과 구혼자 처단 에피소드를 바탕으로 제작.',
    achievements: [
      {
        description:
          '시그니처 동작인 시위 걸기를 장전과 연결한 기획 — 원전의 활 시합처럼 시위를 걸며 판을 열고, 4발마다 시위가 끊어져 다시 걸게 해 한 동작이 싸움 내내 긴장의 리듬으로 되풀이되도록 설계',
      },
    ],
  },
  {
    slug: 'keros',
    title: 'Keros',
    period: '2026.10',
    kitCycles: 8,
    genre: '3인칭 3D 디펜스',
    banner: '/activities/keros/banner.jpg',
    accent: '#8ad8ff',
    links: [
      { label: 'itch.io에서 플레이', href: 'https://dudwns0921.itch.io/keros' },
      { label: '제작 과정 보기', href: '/activities/keros' },
    ],
    description:
      '세이렌의 바다를 지나는 오디세우스의 배에서 부관이 되어, 홀린 선원을 붙잡아 이타카까지 버티는 3인칭 3D 디펜스. 세이렌 에피소드를 바탕으로 제작.',
    achievements: [
      {
        description:
          '세이렌에 홀린 선원을 붙잡는 행동 하나에서 출발한 기획 — 플레이어를 오디세우스가 아닌 부관으로 두고, 노 젓기와 무기 조준을 빼 선원을 지키는 일에만 집중',
      },
    ],
  },
  {
    slug: 'outis',
    title: 'Outis',
    period: '2026.09',
    genre: '3인칭 3D 어드벤처',
    banner: '/activities/outis/banner.jpg',
    accent: '#ff9a5a',
    links: [
      { label: 'itch.io에서 플레이', href: 'https://dudwns0921.itch.io/outis' },
      { label: '제작 과정 보기', href: '/activities/outis' },
    ],
    description:
      '외눈박이 거인의 동굴에 갇힌 오디세우스가 잠든 거인 곁을 몰래 오가며 무기를 만들고 선원들과 탈출하는 3인칭 3D 어드벤처. 키클롭스 에피소드를 바탕으로 제작.',
    achievements: [
      {
        description:
          '거인의 눈을 말뚝으로 찌르는 행동 하나에서 출발한 기획 — 말뚝을 잘라 다듬고 달궈 찌르기까지의 준비를, 잠든 거인 곁에서 들키지 않고 해내는 구조로 확장',
      },
      {
        description:
          '**기획서(GDD)와 코드를 양방향으로 맞추는 동기화 스킬 설계** — 수치·규칙·입력·HUD 항목에 ID를 붙여, 어느 한쪽을 바꿔도 다른 쪽에 곧바로 반영되는 구조 확보',
      },
      {
        description:
          '**밸런스 수치를 엑셀 표로 관리하는 스킬 설계** — 수치 111개를 표 하나로 빼, 저장하면 실행 중인 게임에 즉시 반영되어 게임을 끄지 않고 값을 바꿔 가며 조정하는 구조 구축',
      },
    ],
  },
];

// 페이지에서 가장 앞에 크게 두는 플러그인 (본인 요청). 상세 페이지는 두지 않고 소개 사이트로 바로 간다.
export const gamedevKit = {
  title: 'gamedev-kit',
  kicker: 'Claude Code 플러그인',
  period: '2026.10 - 진행 중',
  role: '1인 개발 · 워크플로우 설계 · AI 디렉팅(구현)',
  links: [
    { label: '소개 사이트', href: 'https://gamedev-kit-site.vercel.app/ko' },
    { label: 'GitHub', href: 'https://github.com/dudwns0921/claude-gamedev-kit' },
    { label: 'Threads', href: 'https://www.threads.com/@glowingjung/post/DeRzUkfGjII?hl=ko' },
  ],
  description: 'CEO 역할의 Claude가 여러 개발 사이클을 동시에 조율하고, 나는 현황판에서 결정만 하며 게임을 끝까지 만들게 하는 Claude Code 플러그인.',
  techStack: ['Claude Code', 'Python', 'Godot 4.7', 'Unity'],
  achievements: [{ description: '새 계정으로 Threads에 소개한 글이 조회 6,959회 · 반응 80건 기록' }],
  // 사이클 고리에 도는 여섯 단계. byUser는 내가 하는 단계다.
  cycle: [
    { name: '목표', byUser: true },
    { name: '기획' },
    { name: '디자인' },
    { name: '계획' },
    { name: '구현' },
    { name: '플레이', byUser: true },
  ],
  // 일의 흐름: 작업은 CEO가 조율하고, 나는 결정만 한다 (본인 요청, 2026-10-21).
  flow: [
    { who: 'CEO', what: '모든 작업 조율' },
    { who: '워커', what: '여러 사이클을 동시에' },
    { who: '나', what: '결정만' },
  ],
  // 스킬 · 에이전트 수는 두지 않는다 (본인 요청, 2026-10-21).
  tiles: [{ label: 'Threads 글 조회', value: '6,959' }],
};

// 첫 화면. 오디세이보다 gamedev-kit과 AI로 게임을 만든다는 것을 앞에 둔다 (본인 요청, 2026-10-21).
export const hero = {
  kicker: 'GAMEDEV-KIT × AI',
  // 줄마다 끊어 보여 준다 ('AI를 활용해,' 뒤에서 줄을 바꾼다 — 본인 요청).
  sub: ['직접 만든 Claude Code 플러그인 gamedev-kit과 AI를 활용해,', '기획부터 출시까지 혼자 게임을 만듭니다.'],
};
