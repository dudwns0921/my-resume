import { patents } from '@/data/patents';
import InfoItem from '../common/InfoItem';
import TitleComponent from '../common/TitleComponent';

const Patent = () => (
  <section className="w-full">
    <TitleComponent title="Patent" size="5xl" />
    <div className="w-full flex flex-col gap-4">
      {patents.map((exp) => (
        <InfoItem key={exp.title} {...exp} />
      ))}
    </div>
  </section>
);

export default Patent;
