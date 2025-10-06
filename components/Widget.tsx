
import React, { useState, useEffect } from 'react';
import type { WidgetInstance, SisenseDataRecord } from '../types';
import { ChartType } from '../types';
import { getWidgetData } from '../services/sisenseService';

import { BarChartWidget } from './charts/BarChartWidget';
import { LineChartWidget } from './charts/LineChartWidget';
import { PieChartWidget } from './charts/PieChartWidget';
import { StatWidget } from './charts/StatWidget';

interface WidgetProps {
  instance: WidgetInstance;
  onRemove: (widgetId: string) => void;
}

const ChartLoader: React.FC = () => (
    <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-sm">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-accent"></div>
    </div>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);


export const Widget: React.FC<WidgetProps> = ({ instance, onRemove }) => {
  const [data, setData] = useState<SisenseDataRecord[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result = await getWidgetData(instance.config);
        setData(result);
      } catch (err) {
        setError('Failed to load widget data.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [instance.config]);

  const renderChart = () => {
    if (error) {
      return <div className="text-center text-red-500">{error}</div>;
    }
    if (!data) {
      return <div className="text-center text-brand-secondary">No data available.</div>;
    }

    switch (instance.config.chartType) {
      case ChartType.BAR:
        return <BarChartWidget data={data} />;
      case ChartType.LINE:
        return <LineChartWidget data={data} />;
      case ChartType.PIE:
        return <PieChartWidget data={data} />;
      case ChartType.STAT:
        return <StatWidget data={data} />;
      default:
        return <div>Unknown chart type</div>;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col h-80 relative animate-fade-in">
        <div className="flex justify-between items-start mb-2">
            <div>
                <h3 className="font-semibold text-brand-dark">{instance.config.title}</h3>
                <p className="text-xs text-brand-secondary">{instance.config.description}</p>
            </div>
            <button onClick={() => onRemove(instance.id)} className="text-gray-400 hover:text-gray-600 transition-colors p-1 -mt-1 -mr-1">
                <CloseIcon />
            </button>
        </div>
        <div className="flex-grow flex items-center justify-center relative">
            {isLoading ? <ChartLoader /> : renderChart()}
        </div>
    </div>
  );
};
