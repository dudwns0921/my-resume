import InfoItem from '../common/InfoItem';
import StrongComponent from '../common/StrongComponent';
import Badge from '../common/Badge';

export interface Achievement {
  description: string;
  strong?: boolean;
}

export interface Project {
  period: string;
  role: string;
  title: string;
  description: string;
  techStack: string[];
  achievements: Achievement[];
}

interface ProjectInfoProps {
  project: Project;
}

const ProjectInfo = ({ project }: ProjectInfoProps) => (
  <div className="relative flex flex-col gap-4">
    <InfoItem
      title={project.title}
      subInfo={project.period}
      subInfo2={project.role}
      description={project.description}
    />
    <div>
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech, index) => (
          <Badge key={index} text={tech} />
        ))}
      </div>
    </div>
    <ul className="list-disc pl-5 text-gray-700 space-y-1">
      {project.achievements.map((a, i) => (
        <li key={i}>
          {a.strong ? <StrongComponent>{a.description}</StrongComponent> : a.description}
        </li>
      ))}
    </ul>
  </div>
);

export default ProjectInfo;
