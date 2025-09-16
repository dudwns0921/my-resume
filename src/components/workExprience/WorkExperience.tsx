import { workExperiences } from '../../data/workExperiences';
import TitleComponent from '../common/TitleComponent';
import WorkExperienceItem from './WorkExperienceItem';

const WorkExperience = () => (
  <section>
    <TitleComponent title="Work Experience" size="5xl" />
    <div className="w-full flex flex-col gap-4">
      {workExperiences.map((exp) => (
        <WorkExperienceItem key={exp.title} {...exp} />
      ))}
    </div>
  </section>
);

export default WorkExperience;
