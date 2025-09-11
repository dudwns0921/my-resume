import type React from 'react';
import DotComponent from './DotComponent';

export interface InfoItemProps {
  title: string;
  subInfo: string;
  subInfo2: string;
  description: string;
  children?: React.ReactNode;
}

const InfoItem = ({ title, subInfo, subInfo2, description, children }: InfoItemProps) => {
  return (
    <div>
      <div className="font-semibold text-2xl">
        {title}
        <DotComponent />
      </div>
      <div className="text-lg text-gray-600">
        {subInfo} | {subInfo2}
      </div>
      <div className="text-gray-700">{description}</div>
      {children}
    </div>
  );
};

export default InfoItem;
