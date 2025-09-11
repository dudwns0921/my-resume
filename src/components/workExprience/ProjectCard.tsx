import { BadgeCheck } from 'lucide-react';

export interface Project {
  period: string;
  role: string;
  title: string;
  description: string;
  techStack: string[];
  achievements: string[];
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => (
  <div
    className="bg-white border rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition relative"
    onClick={onClick}
  >
    <div className="font-semibold text-lg text-brand-steelblue">{project.title}</div>
    <div className="text-xs text-gray-500">{project.period}</div>
    <div className="text-sm text-gray-600">{project.role}</div>
    <div className="text-gray-700 text-sm line-clamp-2">{project.description}</div>
    <div className="text-xs text-gray-500">
      <span className="font-semibold">Tech Stack:</span> {project.techStack.join(', ')}
    </div>
    <ul className="list-disc pl-5 text-xs text-gray-700">
      {project.achievements.map((a, i) => (
        <li key={i}>{a}</li>
      ))}
    </ul>
    <div className="absolute right-0 top-0">
      <BadgeCheck size={24} style={{ color: '#10B981' }} />
    </div>
  </div>
);

export default ProjectCard;
