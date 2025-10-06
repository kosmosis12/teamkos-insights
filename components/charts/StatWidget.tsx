
import React from 'react';
import type { SisenseDataRecord } from '../../types';

interface StatWidgetProps {
  data: SisenseDataRecord[];
}

export const StatWidget: React.FC<StatWidgetProps> = ({ data }) => {
  const statValue = data && data.length > 0 ? data[0].value : 'N/A';
  
  return (
    <div className="flex items-center justify-center w-full h-full">
      <p className="text-5xl font-bold text-brand-dark tracking-tight">
        {statValue}
      </p>
    </div>
  );
};
