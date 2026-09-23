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
    <div className="flex flex-col gap-3 text-lg">
      <p>
        판교에서 5년째 일하고 있는 웹 프론트엔드 개발자입니다. Toyota·현대모비스·KGM 등 모빌리티 기업의 차량용 서비스를 개발하며,
        입사 후 4년 연속 전사 상위 2% 인사평가 최고 등급을 받았습니다.
      </p>
      <p>
        코드를 짜는 일을 넘어, 일하는 모든 과정에 AI를 깊이 녹여 냅니다. 프로젝트의 백엔드 API·네이티브 브릿지·차량 제어
        규격을 Claude Code 스킬로 만들어 AI가 도메인 맥락을 바로 이해하도록 했습니다. JIRA 티켓을 분석해 근무일지를
        자동으로 쓰는 솔루션으로 사내 AI 챌린지 1위와 전사 도입을 이끌었습니다. 더불어 아침 JIRA 브리핑·메일 초안 검수·학습
        기록 정리까지 매일의 업무를 자동화하고 있습니다.
      </p>
      <p>
        회사 밖에서는 NAN 2026 AI 게임 해커톤에서 588팀 중 3위로 우수상을 받았고, CODEGATE 2026 AI 스타트업 해커톤 본선에 오른
        아이디어로 특허를 출원했습니다.
      </p>
    </div>
  </section>
);

export default ResumeHeader;
