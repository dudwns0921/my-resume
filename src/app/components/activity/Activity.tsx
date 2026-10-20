import { activities } from '@/data/activities';
import { activityDetails } from '@/data/activityDetails';
import TitleComponent from '../common/TitleComponent';
import Badge from '../common/Badge';
import InfoItem from '../common/InfoItem';
import ProjectInfo, { Project, renderHighlights } from '../workExprience/ProjectInfo';
import { withBasePath } from '@/utils';
import ActivityCard from './ActivityCard';

// 시리즈로 묶은 게임 하나. 역할 · 기술 스택은 시리즈 머리에 있다.
type Game = Pick<Project, 'title' | 'period' | 'description' | 'achievements' | 'links'>;

// 여러 게임을 한 소제목 아래 묶은 항목 (오디세이 3부작).
interface Series extends Omit<Project, 'achievements' | 'links'> {
  games: Game[];
}

type ActivityEntry = Project | Series;

const ROMAN = ['I', 'II', 'III', 'IV', 'V'];

const isSeries =(entry: ActivityEntry): entry is Series => 'games' in entry;

// 상세 페이지 링크('/activities/<slug>')가 걸린 액티비티는 그 링크를 누르면 상세 패널이 열린다.
const findDetail = (project: Pick<Project, 'links'>) =>
  activityDetails.find((detail) => project.links?.some((link) => link.href === `/activities/${detail.slug}`));

const ProjectEntry = ({ project }: { project: Project }) => {
  const detail = findDetail(project);
  return detail ? (
    <ActivityCard detail={detail}>
      <ProjectInfo project={project} />
    </ActivityCard>
  ) : (
    <ProjectInfo project={project} />
  );
};

// 게임 하나: 시리즈 안의 순번(I · II · III)과 제목 줄 아래에 설명과 성과를 둔다. 포인트 색은 쓰지 않는다.
const GameEntry = ({ game, part }: { game: Game; part: string }) => {
  const body = (
    <div className="flex flex-col gap-2 py-4 break-inside-avoid">
      <div className="flex flex-wrap items-baseline gap-x-3 break-after-avoid">
        <span className="w-6 text-gray-400 font-semibold">{part}</span>
        <span className="text-xl font-semibold">{game.title}</span>
        <span className="text-gray-600">{game.period}</span>
        {game.links?.map((link) => {
          const internal = link.href.startsWith('/');
          return (
            <a
              key={link.href}
              href={internal ? withBasePath(link.href) : link.href}
              target={internal ? undefined : '_blank'}
              rel={internal ? undefined : 'noopener noreferrer'}
              className={`text-sm text-blue-600 underline underline-offset-2${link.webOnly ? ' no-pdf' : ''}`}
            >
              {link.label}
            </a>
          );
        })}
      </div>
      <div className="pl-9 text-gray-700">{game.description}</div>
      <ul className="list-disc pl-14 text-gray-700 space-y-1">
        {game.achievements.map((a) => (
          <li key={a.description}>{renderHighlights(a.description)}</li>
        ))}
      </ul>
    </div>
  );
  const detail = findDetail(game);
  return detail ? <ActivityCard detail={detail}>{body}</ActivityCard> : body;
};

const SeriesEntry = ({ series }: { series: Series }) => (
  <div className="flex flex-col gap-4">
    <InfoItem title={series.title} subInfo={series.period} subInfo2={series.role} description={series.description} />
    <div className="flex flex-wrap gap-2 break-inside-avoid">
      {series.techStack.map((tech) => (
        <Badge key={tech} text={tech} />
      ))}
    </div>
    {/* 게임은 최신순으로 두고, 순번은 시리즈 순서(첫 작품이 I)로 붙인다. */}
    <div className="flex flex-col divide-y divide-gray-200 border-y border-gray-200">
      {series.games.map((game, idx) => (
        <GameEntry key={game.title} game={game} part={ROMAN[series.games.length - 1 - idx]} />
      ))}
    </div>
  </div>
);

const Activity = () => (
  <section>
    <TitleComponent title="Activities" size="5xl" />
    <div className="flex flex-col gap-6 pl-4">
      {(activities as ActivityEntry[]).map((entry) =>
        isSeries(entry) ? (
          <SeriesEntry key={entry.title} series={entry} />
        ) : (
          <ProjectEntry key={entry.title} project={entry} />
        ),
      )}
    </div>
  </section>
);

export default Activity;
