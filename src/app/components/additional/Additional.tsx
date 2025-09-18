import { additionals } from '@/data/additionals';
import TitleComponent from '../common/TitleComponent';
import AdditionalItem from './AdditionalItem';

const Additional = () => (
  <section className="w-full">
    <TitleComponent title="Additional" size="5xl" />
    <ul className="space-y-2 list-disc pl-6">
      {additionals.map((c) => (
        <AdditionalItem key={c.href} {...c} />
      ))}
    </ul>
  </section>
);

export default Additional;
