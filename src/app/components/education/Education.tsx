import { educations } from '@/data/educations';
import InfoItem from '../common/InfoItem';
import TitleComponent from '../common/TitleComponent';

const Education = () => (
  <section>
    <TitleComponent title="Education" size="5xl" />
    <div className="w-full flex flex-col gap-4">
      {educations.map((edu) => (
        <InfoItem key={edu.title} {...edu} />
      ))}
    </div>
  </section>
);

export default Education;
