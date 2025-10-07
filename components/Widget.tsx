import React from 'react';
import type { WidgetInstance, SisenseDataRecord } from '../types';
import { ChartType } from '../types';
import { useExecuteQuery } from '@sisense/sdk-ui';
import * as DM from '../src/pipeline-analysis';

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

const DraggableHandle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-move drag-handle text-gray-300 hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const Widget: React.FC<WidgetProps> = ({ instance, onRemove }) => {
  // This now uses the query from the widget's config
  const { data, isLoading, error } = useExecuteQuery({
    dataSource: DM.DataSource,
    dimensions: instance.config.sisenseQuery.dimensions,
    measures: instance.config.sisenseQuery.measures,
  });

  const renderChart = () => {
    if (error) {
      return <div className="text-center text-red-500">{error.message}</div>;
    }
    if (!data || !data.rows) {
      return <div className="text-center text-brand-secondary">No data available.</div>;
    }

    const sisenseData = data.rows.map(row => {
      const record: SisenseDataRecord = {};
      data.columns.forEach((column, i) => {
        record[column.name] = row[i].data;
      });
      return record;
    });

    switch (instance.config.chartType) {
      case ChartType.BAR:
        return <BarChartWidget data={sisenseData} />;
      case ChartType.LINE:
        return <LineChartWidget data={sisenseData} />;
      case ChartType.PIE:
        return <PieChartWidget data={sisenseData} />;
      case ChartType.STAT:
        return <StatWidget data={sisenseData} />;
      default:
        return <div>Unknown chart type</div>;
    }
  };

  return (
    <div className="p-4 flex flex-col h-full relative animate-fade-in">
        <div className="flex justify-between items-start mb-2">
            <div className="flex items-center">
                <DraggableHandle />
                <div className="ml-2">
                    <h3 className="font-semibold text-brand-dark">{instance.config.title}</h3>
                    <p className="text-xs text-brand-secondary">{instance.config.description}</p>
                </div>
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