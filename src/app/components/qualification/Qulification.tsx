import { qualifications } from '@/data/qualifications';
import InfoItem from '../common/InfoItem';
import TitleComponent from '../common/TitleComponent';

const Qualification = () => (
  <section>
    <TitleComponent title="Qualification" size="5xl" />
    <div className="w-full flex flex-col gap-4">
      {qualifications.map((exp) => (
        <InfoItem key={exp.title} {...exp} />
      ))}
    </div>
  </section>
);

export default Qualification;
