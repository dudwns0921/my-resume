import { activities } from '@/data/activities';
import { activityDetails } from '@/data/activityDetails';
import TitleComponent from '../common/TitleComponent';
import ProjectInfo, { Project } from '../workExprience/ProjectInfo';
import ActivityCard from './ActivityCard';

// 상세 페이지 링크('/activities/<slug>')가 걸린 액티비티는 누르면 상세 패널이 열린다.
const findDetail = (project: Project) =>
  activityDetails.find((detail) => project.links?.some((link) => link.href === `/activities/${detail.slug}`));

const Activity = () => (
  <section>
    <TitleComponent title="Activities" size="5xl" />
    <div className="flex flex-col gap-6 pl-4">
      {activities.map((project: Project, idx) => {
        const detail = findDetail(project);
        return detail ? (
          <ActivityCard key={project.title + idx} detail={detail}>
            <ProjectInfo project={project} />
          </ActivityCard>
        ) : (
          <ProjectInfo key={project.title + idx} project={project} />
        );
      })}
    </div>
  </section>
);

export default Activity;
