import InfoItem from '../common/InfoItem';
import StrongComponent from '../common/StrongComponent';
import Badge from '../common/Badge';
import { withBasePath } from '@/utils';

export interface Achievement {
  description: string;
  strong?: boolean;
}

// 운영 PDF 환경에는 이모지 폰트가 없으므로 label에 이모지를 쓰지 않는다.
// href가 '/'로 시작하면 이력서 안의 상세 페이지다. webOnly 링크는 PDF에 넣지 않는다.
export interface ProjectLink {
  label: string;
  href: string;
  webOnly?: boolean;
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

// '[글자](주소)'는 바깥 링크로 그린다.
const renderLinks = (text: string, keyPrefix: string) =>
  text.split(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/).map((part, i, parts) => {
    if (i % 3 === 0) return part;
    if (i % 3 === 2) return null;
    return (
      <a
        key={`${keyPrefix}-${i}`}
        href={parts[i + 1]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline underline-offset-2"
      >
        {part}
      </a>
    );
  });

// '**단어**'로 감싼 부분만 강조한다.
const renderHighlights = (text: string) =>
  text
    .split(/\*\*(.+?)\*\*/)
    .map((part, i) => (i % 2 === 1 ? <StrongComponent key={i}>{part}</StrongComponent> : renderLinks(part, String(i))));

const ProjectInfo = ({ project }: ProjectInfoProps) => (
  <div className="relative flex flex-col gap-4">
    <div>
      <InfoItem
        title={project.title}
        subInfo={project.period}
        subInfo2={project.role}
        description={project.description}
        keepTogether={false}
      />
      {project.links && project.links.length > 0 && (
        <div className="mt-1 flex flex-wrap gap-x-3 text-sm">
          {project.links.map((link) => {
            const internal = link.href.startsWith('/');
            return (
              <a
                key={link.href}
                href={internal ? withBasePath(link.href) : link.href}
                target={internal ? undefined : '_blank'}
                rel={internal ? undefined : 'noopener noreferrer'}
                className={`text-blue-600 underline underline-offset-2${link.webOnly ? ' no-pdf' : ''}`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </div>
    {project.techStack.length > 0 && (
      <div className="flex flex-wrap gap-2 break-inside-avoid">
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
