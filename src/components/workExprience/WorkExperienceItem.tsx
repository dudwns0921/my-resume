import type { InfoItemProps } from '../common/InfoItem';
import InfoItem from '../common/InfoItem';
import ProjectCard, { type Project } from './ProjectCard';

export interface WorkExperienceItemProps extends InfoItemProps {
  projects?: Project[];
}

const WorkExperienceItem = ({
  title: company,
  subInfo: period,
  subInfo2: role,
  description,
  projects = [],
}: WorkExperienceItemProps) => {
  return (
    <div className="flex flex-col gap-4">
      <InfoItem title={company} subInfo={period} subInfo2={role} description={description} />
      <div>
        {projects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, idx) => (
              <ProjectCard key={project.title + idx} project={project} onClick={() => {}} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkExperienceItem;
