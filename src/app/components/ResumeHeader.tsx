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
      판교에서 5년차 웹 프론트엔드 개발자로 일하고 있습니다. Claude Code
      스킬화 및 플러그인 개발로 팀 전체 개발 효율을 높이고, AI를 활용한 JIRA 기반 근무일지 자동화 솔루션 개발로 사내 AI 챌린지 1위 수상 및 전사 도입을 이끌었습니다. 이와 더불어 DevOps 문화 구축과 CI/CD 자동화 등 개발 생산성 향상 전 영역에 관심이 많으며, 주도적인 업무 환경에서 최고의 성과를 발휘합니다.
    </p>
  </section>
);

export default ResumeHeader;
