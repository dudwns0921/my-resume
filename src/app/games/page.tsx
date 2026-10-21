import type { Metadata } from 'next';
import GamesView from '../components/games/GamesView';

export const metadata: Metadata = {
  title: '정영준 | 게임',
  description: '정영준이 직접 기획하고 출시한 게임 Keros · Outis와, 두 게임을 만든 Claude Code 플러그인 gamedev-kit.',
};

// 이력서와 따로 둔 개인 게임 페이지. 웹에서만 보이고 PDF에는 들어가지 않는다.
export default function GamesPage() {
  return <GamesView />;
}
