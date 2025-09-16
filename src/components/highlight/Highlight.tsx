import { highlights } from '../../data/highlight';
import TitleComponent from '../common/TitleComponent';
import HighlightItem from './HighlightItem';

const Highlight = () => (
  <section>
    <TitleComponent title="Highlight" size="5xl" />
    <div className="w-full flex flex-col gap-4">
      {highlights.map((highlight, index) => (
        <HighlightItem key={index} title={highlight.title} description={highlight.description} />
      ))}
    </div>
  </section>
);

export default Highlight;
