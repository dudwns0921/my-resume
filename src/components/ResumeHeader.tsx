import DotComponent from './common/DotComponent';

const ResumeHeader = () => (
  <section>
    <h1 className="text-7xl font-bold mb-4">
      안녕하세요!
      <br />
      저는 정영준입니다
      <DotComponent />
    </h1>
    <p className="text-lg text-gray-700">판교에서 풀스택 개발자로 일하고 있습니다.</p>
  </section>
);

export default ResumeHeader;
