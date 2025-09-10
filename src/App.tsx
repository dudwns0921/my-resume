import ResumeHeader from './components/ResumeHeader';
import WorkExperience from './components/WorkExperience';
import OtherExperience from './components/OtherExperience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="container mx-auto max-w-3xl py-16">
      <ResumeHeader />
      <WorkExperience />
      <OtherExperience />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
