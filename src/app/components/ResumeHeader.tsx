import DotComponent from './common/DotComponent';
import StrongComponent from './common/StrongComponent';

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
        모빌리티 도메인에서 차량용 웹 서비스를 만들어 온 5년차 프론트엔드 개발자입니다. 누군가는 해야 하는 일에 먼저 나서고,
        맡은 일은 끝까지 책임지는 태도로 입사 후{' '}
        <StrongComponent>4년 연속 전사 상위 2% 인사평가 최고 등급</StrongComponent>을 받았습니다.
      </p>
      <p>
        코드를 짜는 일을 넘어, <StrongComponent>일하는 모든 과정에 AI를 깊이 녹여 냅니다</StrongComponent>. 프로젝트의 백엔드
        API·네이티브 브릿지·음성발화·차량 제어 규격을 Claude Code 스킬로 만들어 AI가 도메인 맥락을 바로 이해하도록 했습니다. JIRA
        워크로그를 분석해 근무일지를 자동으로 쓰는 솔루션으로 사내 AI 챌린지 1위와 전사 도입을 이끌었습니다. 아침 JIRA 브리핑,
        메일 초안 검수, 학습 기록 정리처럼 매일 하는 일도 AI로 자동화해 일상 업무 흐름에 자연스럽게 자리 잡게 했습니다.
      </p>
      <p>
        이 밖에도 NAN 2026 Game X AI 해커톤에서 지원 588팀 중 본선 10팀에 올라{' '}
        <StrongComponent>3위로 우수상</StrongComponent>을 받았고, CODEGATE 2026 AI
        스타트업 해커톤 본선에 오른 아이디어를 발전시켜 사내 특허 출원을 진행하고 있습니다.
      </p>
    </div>
  </section>
);

export default ResumeHeader;
