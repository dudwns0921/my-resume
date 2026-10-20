import { activities } from '@/data/activities';
import { activityDetails } from '@/data/activityDetails';
import TitleComponent from '../common/TitleComponent';
import Badge from '../common/Badge';
import InfoItem from '../common/InfoItem';
import ProjectInfo, { Project } from '../workExprience/ProjectInfo';
import ActivityCard from './ActivityCard';

// 시리즈로 묶은 게임 하나. 역할 · 기술 스택은 시리즈 머리에 있다.
type Game = Pick<Project, 'title' | 'period' | 'description' | 'achievements' | 'links'>;

// 여러 게임을 한 소제목 아래 묶은 항목 (오디세이 3부작).
interface Series extends Omit<Project, 'achievements' | 'links'> {
  games: Game[];
}

type ActivityEntry = Project | Series;

const isSeries =(entry: ActivityEntry): entry is Series => 'games' in entry;

// 상세 페이지 링크('/activities/<slug>')가 걸린 액티비티는 그 링크를 누르면 상세 패널이 열린다.
const findDetail = (project: Pick<Project, 'links'>) =>
  activityDetails.find((detail) => project.links?.some((link) => link.href === `/activities/${detail.slug}`));

const ProjectEntry = ({ project, titleSize }: { project: Project; titleSize?: string }) => {
  const detail = findDetail(project);
  return detail ? (
    <ActivityCard detail={detail}>
      <ProjectInfo project={project} titleSize={titleSize} />
    </ActivityCard>
  ) : (
    <ProjectInfo project={project} titleSize={titleSize} />
  );
};

const SeriesEntry = ({ series }: { series: Series }) => (
  <div className="flex flex-col gap-4">
    <InfoItem title={series.title} subInfo={series.period} subInfo2={series.role} description={series.description} />
    <div className="flex flex-wrap gap-2 break-inside-avoid">
      {series.techStack.map((tech) => (
        <Badge key={tech} text={tech} />
      ))}
    </div>
    {/* 게임은 다른 항목과 같은 모양으로 최신순으로 두고, 옅은 회색 줄로만 나눈다. 제목은 시리즈보다 한 단계 작다. */}
    <div className="flex flex-col divide-y divide-gray-200 border-y border-gray-200">
      {series.games.map((game) => (
        <div key={game.title} className="py-4">
          <ProjectEntry project={{ ...game, role: '', techStack: [] }} titleSize="text-xl" />
        </div>
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
