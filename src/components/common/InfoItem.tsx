import DotComponent from './DotComponent';

export interface InfoItemProps {
  title: string;
  subInfo: string;
  subInfo2: string;
  description: string;
}

const InfoItem = ({ title, subInfo, subInfo2, description }: InfoItemProps) => {
  return (
    <div>
      <div className="font-semibold text-2xl break-keep">
        {title}
        <DotComponent />
      </div>
      <div className="text-lg">{subInfo}</div>
      <div className="text-lg">{subInfo2}</div>
      <div className="text-gray-700">{description}</div>
    </div>
  );
};

export default InfoItem;
