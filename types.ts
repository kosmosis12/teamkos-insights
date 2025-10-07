import type { Attribute, Measure } from '@sisense/sdk-data';

export enum ChartType {
  BAR = 'BAR',
  LINE = 'LINE',
  PIE = 'PIE',
  STAT = 'STAT',
}

export interface WidgetConfig {
  id: string;
  title: string;
  description: string;
  chartType: ChartType;
  sisenseQuery: {
    dimensions: Attribute[];
    measures: Measure[];
  };
}

export interface WidgetInstance {
  id: string; // Unique instance ID
  config: WidgetConfig;
}

// Represents a generic data record from Sisense
export type SisenseDataRecord = {
  [key: string]: string | number;
};
