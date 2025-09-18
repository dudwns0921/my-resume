import { awards } from '@/data/awards';
import InfoItem from '../common/InfoItem';
import TitleComponent from '../common/TitleComponent';

const Award = () => (
  <section className="w-full">
    <TitleComponent title="Award" size="5xl" />
    <div className="w-full flex flex-col gap-4">
      {awards.map((exp) => (
        <InfoItem key={exp.title} {...exp} />
      ))}
    </div>
  </section>
);

export default Award;
