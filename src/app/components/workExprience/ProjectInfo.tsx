import InfoItem from '../common/InfoItem';
import StrongComponent from '../common/StrongComponent';
import Badge from '../common/Badge';

export interface Achievement {
  description: string;
  strong?: boolean;
}

// 운영 PDF 환경에는 이모지 폰트가 없으므로 label에 이모지를 쓰지 않는다.
export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  period: string;
  role: string;
  title: string;
  description: string;
  techStack: string[];
  achievements: Achievement[];
  links?: ProjectLink[];
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
  <div className="relative flex flex-col gap-4">
    <div className="break-inside-avoid break-after-avoid">
      <InfoItem
        title={project.title}
        subInfo={project.period}
        subInfo2={project.role}
        description={project.description}
      />
      {project.links && project.links.length > 0 && (
        <div className="mt-1 flex flex-wrap gap-x-3 text-sm">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline underline-offset-2"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
    {project.techStack.length > 0 && (
      <div className="flex flex-wrap gap-2 break-inside-avoid break-after-avoid">
        {project.techStack.map((tech, index) => (
          <Badge key={index} text={tech} />
        ))}
      </div>
    )}
    <ul className="list-disc pl-5 text-gray-700 space-y-1">
      {project.achievements.map((a, i) => (
        <li key={i} className="break-inside-avoid">
          {a.strong ? <StrongComponent>{a.description}</StrongComponent> : renderHighlights(a.description)}
        </li>
      ))}
    </ul>
  </div>
);

export default ProjectInfo;
