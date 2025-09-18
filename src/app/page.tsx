import ResumeHeader from './components/ResumeHeader';
import WorkExperience from './components/workExprience/WorkExperience';
import Education from './components/education/Education';
import Award from './components/award/Award';
import Highlight from './components/highlight/Highlight';
import Additional from './components/additional/Additional';
import Qualification from './components/qualification/Qulification';
import DownloadPDFButton from './components/DownloadPDFButton';

function App() {
  return (
    <div className="grid grid-rows-[max-content_1fr] h-dvh mx-auto max-w-3xl">
      <header className='no-pdf'>
        <div className="w-full p-4 flex justify-end">
          <DownloadPDFButton />
        </div>
      </header>
      <main className="flex flex-col px-8 gap-8 overflow-y-scroll">
        <ResumeHeader />
        <Highlight />
        <WorkExperience />
        <Education />
        <Award />
        <Qualification />
        <Additional />
        <footer>
          <div className="w-full p-4 text-center text-sm text-gray-500">
            &copy; 2025 Jung Young Joon. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
