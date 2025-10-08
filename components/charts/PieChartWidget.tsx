import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { SisenseDataRecord } from '../../types';

interface PieChartWidgetProps {
  data: SisenseDataRecord[];
}

const COLORS = ['#2b6cb0', '#4299e1', '#63b3ed', '#90cdf4', '#bee3f8'];

export const PieChartWidget: React.FC<PieChartWidgetProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <div className="text-sm text-brand-secondary">No data to display.</div>;
  }

  // Dynamically get the keys for the name and value
  const nameKey = Object.keys(data[0])[0];
  const dataKey = Object.keys(data[0])[1];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Tooltip
            contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(4px)',
                border: '1px solid #e2e8f0',
                borderRadius: '0.5rem',
            }}
        />
        <Legend layout="vertical" align="right" verticalAlign="middle" wrapperStyle={{fontSize: "12px"}}/>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius="80%"
          fill="#8884d8"
          dataKey={dataKey}
          nameKey={nameKey}
          paddingAngle={2}
          innerRadius="50%"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
