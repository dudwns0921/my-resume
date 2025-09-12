import InfoItem, { type InfoItemProps } from '../common/InfoItem';
import TitleComponent from '../common/TitleComponent';

const otherExperiences: InfoItemProps[] = [
  {
    title: '방송통신대학교 컴퓨터과학과',
    subInfo: '졸업',
    subInfo2: '2023.03 - 2025.08',
    description: '',
  },
  {
    title: '고려대학교 고고미술사학과',
    subInfo: '졸업',
    subInfo2: '2014.03 - 2020.08',
    description: '',
  },
  {
    title: '구름',
    subInfo: '수료',
    subInfo2: '2025.05 - 2025.07',
    description: '인공지능 언어 모델 LLM의 모든 것',
  },
  {
    title: '삼성 멀티캠퍼스',
    subInfo: '수료',
    subInfo2: '2021.09 - 2021.12',
    description: '온오프 연계 AI 활용 지능형 서비스 개발',
  },
  {
    title: '강남아이티아카데미',
    subInfo: '수료',
    subInfo2: '2021.08 - 2021.09',
    description: 'SQLD 자격 취득 과정',
  },
];

const Education = () => (
  <section>
    <TitleComponent title="Education" />
    <div className="w-full flex flex-col gap-4">
      {otherExperiences.map((exp) => (
        <InfoItem key={exp.title} {...exp} />
      ))}
    </div>
  </section>
);

export default Education;
