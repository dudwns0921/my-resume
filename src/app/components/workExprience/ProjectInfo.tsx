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
  href?: string;
}

interface ProjectInfoProps {
  project: Project;
}

const ProjectInfo = ({ project }: ProjectInfoProps) => (
  <div className="relative flex flex-col gap-4">
    <div>
      <InfoItem
        title={project.title}
        subInfo={project.period}
        subInfo2={project.role}
        description={project.description}
      />
      {project.href && (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-1 text-sm text-blue-600 underline underline-offset-2"
        >
          🌐 Live Demo
        </a>
      )}
    </div>
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
