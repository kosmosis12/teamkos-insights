import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { SisenseDataRecord } from '../../types';

interface LineChartWidgetProps {
  data: SisenseDataRecord[];
}

export const LineChartWidget: React.FC<LineChartWidgetProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <div className="text-sm text-brand-secondary">No data to display.</div>;
  }
  
  const dataKeyX = Object.keys(data[0])[0];
  const dataKeyY = Object.keys(data[0])[1];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
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
        <Legend wrapperStyle={{fontSize: "12px"}}/>
        <Line type="monotone" dataKey={dataKeyY} stroke="#2b6cb0" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} name={dataKeyY}/>
      </LineChart>
    </ResponsiveContainer>
  );
};
