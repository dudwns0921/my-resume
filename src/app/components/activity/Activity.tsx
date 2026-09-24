import { activities } from '@/data/activities';
import TitleComponent from '../common/TitleComponent';
import ProjectInfo from '../workExprience/ProjectInfo';

const Activity = () => (
  <section>
    <TitleComponent title="Activities" size="5xl" />
    <div className="flex flex-col gap-6 pl-4">
      {activities.map((project, idx) => (
        <ProjectInfo key={project.title + idx} project={project} />
      ))}
    </div>
  </section>
);

export default Activity;
