import React from 'react';
import type { SisenseDataRecord } from '../../types';

interface StatWidgetProps {
  data: SisenseDataRecord[];
}

export const StatWidget: React.FC<StatWidgetProps> = ({ data }) => {
  // Correctly extracts the value from the first row and first column
  const statValue = data && data.length > 0 ? Object.values(data[0])[0] : 'N/A';
  
  return (
    <div className="flex items-center justify-center w-full h-full">
      <p className="text-5xl font-bold text-brand-dark tracking-tight">
        {String(statValue)}
      </p>
    </div>
  );
};
