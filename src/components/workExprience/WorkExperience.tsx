import { workExperiences } from '../../data/workExperiences';
import TitleComponent from '../common/TitleComponent';
import WorkExperienceItem from './WorkExperienceItem';

const WorkExperience = () => (
  <section>
    <TitleComponent title="Work Experience" size="5xl" />
    <div className="w-full flex flex-col gap-4">
      {workExperiences.map((exp, idx) => (
        <div key={exp.title}>
          <WorkExperienceItem {...exp} />
          {idx < workExperiences.length - 1 && <hr className="my-4 border-gray-300" />}
        </div>
      ))}
    </div>
  </section>
);

export default WorkExperience;
