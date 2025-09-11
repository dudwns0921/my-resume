import ResumeHeader from './components/ResumeHeader';
import WorkExperience from './components/workExprience/WorkExperience';
import Education from './components/education/Eduction';
import Contact from './components/contact/Contact';
import Awards from './components/awards/Awards';

function App() {
  return (
    <div className="container flex flex-col p-12 gap-8">
      <ResumeHeader />
      <WorkExperience />
      <Education />
      <Awards />
      <Contact />
    </div>
  );
}

export default App;
