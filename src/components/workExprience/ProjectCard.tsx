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

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => (
  <div
    className="bg-white border rounded-lg p-6 relative flex flex-col gap-2 shadow-md"
    onClick={onClick}
  >
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

export default ProjectCard;
