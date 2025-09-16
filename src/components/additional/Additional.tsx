import { additional } from '../../data/additional';
import TitleComponent from '../common/TitleComponent';
import AdditionalItem from './AdditionalItem';

const Additional = () => (
  <section className="w-full">
    <TitleComponent title="Additional" size="5xl" />
    <ul className="space-y-2">
      {additional.map((c) => (
        <AdditionalItem key={c.href} {...c} />
      ))}
    </ul>
  </section>
);

export default Additional;
