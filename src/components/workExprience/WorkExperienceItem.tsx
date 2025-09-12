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
    <InfoItem title={company} subInfo={role} subInfo2={period} description={description}>
      {projects.length > 0 && <h3 className="font-semibold text-lg">프로젝트</h3>}
      {projects.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title + idx} project={project} onClick={() => {}} />
          ))}
        </div>
      )}
    </InfoItem>
  );
};

export default WorkExperienceItem;
