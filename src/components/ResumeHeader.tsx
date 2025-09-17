import DotComponent from './common/DotComponent';

const ResumeHeader = () => (
  <section>
    <h1 className="text-5xl md:text-6xl font-bold mb-4 break-keep">
      안녕하세요,
      <br />
      <span className="text-3xl font-semibold my-2 block md:inline md:text-5xl md:font-bold md:my-0">
        믿고 맡길 수 있는
      </span>
      <span className="hidden md:inline"> </span>
      <span className="block md:inline">
        정영준입니다
        <DotComponent />
      </span>
    </h1>
    <p className="text-lg">
      판교에서 4년차 웹 프론트엔드 개발자로 일하고 있습니다. DevOps 문화 구축을 즐기며, CI/CD,
      JIRA와 Confluence를 활용한 팀 협업 개선 및 문서화 등 개발 생산성 향상 전 영역에 관심이
      많습니다. 풍부한 프로젝트 리딩 경험을 바탕으로 주도적인 업무 환경에서 최고의 성과를
      발휘합니다.
    </p>
  </section>
);

export default ResumeHeader;
