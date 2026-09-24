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
  hrefLabel?: string;
}

interface ProjectInfoProps {
  project: Project;
}

// '**단어**'로 감싼 부분만 강조한다.
const renderHighlights = (text: string) =>
  text
    .split(/\*\*(.+?)\*\*/)
    .map((part, i) => (i % 2 === 1 ? <StrongComponent key={i}>{part}</StrongComponent> : part));

const ProjectInfo = ({ project }: ProjectInfoProps) => (
  <div className="relative flex flex-col gap-4 break-inside-avoid">
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
          {project.hrefLabel ?? '🌐 Live Demo'}
        </a>
      )}
    </div>
    {project.techStack.length > 0 && (
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech, index) => (
          <Badge key={index} text={tech} />
        ))}
      </div>
    )}
    <ul className="list-disc pl-5 text-gray-700 space-y-1">
      {project.achievements.map((a, i) => (
        <li key={i}>
          {a.strong ? <StrongComponent>{a.description}</StrongComponent> : renderHighlights(a.description)}
        </li>
      ))}
    </ul>
  </div>
);

export default ProjectInfo;
