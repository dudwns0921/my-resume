import ResumeHeader from './components/ResumeHeader';
import WorkExperience from './components/workExprience/WorkExperience';
import Education from './components/education/Education';
import Award from './components/award/Award';
import Highlight from './components/highlight/Highlight';
import Additional from './components/additional/Additional';
import Qualification from './components/qualification/Qulification';

function App() {
  return (
    <div className="container flex flex-col p-8 gap-8 max-w-3xl mx-auto">
      <ResumeHeader />
      <Highlight />
      <WorkExperience />
      <Education />
      <Award />
      <Qualification />
      <Additional />
    </div>
  );
}

export default App;
