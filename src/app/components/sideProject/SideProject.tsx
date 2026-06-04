import { sideProjects } from '@/data/sideProjects';
import TitleComponent from '../common/TitleComponent';
import ProjectInfo from '../workExprience/ProjectInfo';

const SideProject = () => (
  <section>
    <TitleComponent title="Side Project" size="5xl" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-4">
      {sideProjects.map((project, idx) => (
        <ProjectInfo key={project.title + idx} project={project} />
      ))}
    </div>
  </section>
);

export default SideProject;
