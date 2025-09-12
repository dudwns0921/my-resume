import DotComponent from './DotComponent';

const TitleComponent = ({ title }: { title: string }) => (
  <h2 className="text-5xl font-bold mb-6">
    {title}
    <DotComponent />
  </h2>
);

export default TitleComponent;
