import ResumeHeader from './components/ResumeHeader';
import WorkExperience from './components/workExprience/WorkExperience';
import Education from './components/education/Education';
import Awards from './components/awards/Awards';
import Highlight from './components/highlight/Highlight';
import Additional from './components/additional/Additional';

function App() {
  return (
    <div className="container flex flex-col p-8 gap-8">
      <ResumeHeader />
      <Highlight />
      <WorkExperience />
      <Education />
      <Awards />
      <Additional />
    </div>
  );
}

export default App;
