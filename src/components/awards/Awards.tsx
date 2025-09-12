import HighLight from '../common/Highlight';
import TitleComponent from '../common/TitleComponent';

const Awards = () => (
  <section className="w-full">
    <TitleComponent title="Awards" />
    <ul className="list-disc pl-6">
      <li>
        <HighLight>2025 구름 인공지능 언어 모델 LLM의 모든 것 우수상</HighLight>
      </li>
    </ul>
  </section>
);

export default Awards;
