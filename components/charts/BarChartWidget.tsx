
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { SisenseDataRecord } from '../../types';

interface BarChartWidgetProps {
  data: SisenseDataRecord[];
}

export const BarChartWidget: React.FC<BarChartWidgetProps> = ({ data }) => {
  const dataKeyX = Object.keys(data[0])[0];
  const dataKeyY = Object.keys(data[0])[1];
  
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey={dataKeyX} fontSize={12} tickLine={false} axisLine={false} />
        <YAxis fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip
          contentStyle={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(4px)',
            border: '1px solid #e2e8f0',
            borderRadius: '0.5rem',
          }}
        />
        <Legend wrapperStyle={{fontSize: "12px"}} />
        <Bar dataKey={dataKeyY} fill="#2b6cb0" name="Revenue" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};
