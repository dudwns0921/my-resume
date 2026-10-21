import ResumeHeader from './components/ResumeHeader';
import WorkExperience from './components/workExprience/WorkExperience';
import Activity from './components/activity/Activity';
import Education from './components/education/Education';
import Award from './components/award/Award';
import Patent from './components/patent/Patent';
import Additional from './components/additional/Additional';
import Qualification from './components/qualification/Qulification';
import DownloadPDFButton from './components/DownloadPDFButton';
import { withBasePath } from '@/utils';

function App() {
  return (
    <div className="grid grid-rows-[max-content_1fr] h-dvh mx-auto max-w-[50rem]">
      <header className='no-pdf'>
        <div className="w-full p-4 flex justify-end gap-2">
          {/* 개인 게임은 이력서와 따로 둔 게임 페이지에 있다 (웹에서만). */}
          {/* 이력서 쪽은 심플하게 둔다. 화려한 모양은 게임 페이지에 들어간 뒤에만 보인다. */}
          <a
            href={withBasePath('/games')}
            className="text-white bg-gray-900 px-4 py-2 rounded flex items-center justify-center min-w-[120px] transition hover:bg-gray-700"
          >
            만든 게임 보러 가기 →
          </a>
          <DownloadPDFButton />
        </div>
      </header>
      <main className="flex flex-col px-8 gap-8 overflow-y-scroll scrollbar-hide">
        <ResumeHeader />
        <WorkExperience />
        <Activity />
        <Award />
        <Patent />
        <Education />
        <Qualification />
        <Additional />
        <footer>
          <div className="w-full p-4 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Jung Young Joon. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
