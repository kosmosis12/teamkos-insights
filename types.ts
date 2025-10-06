
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
  // In a real app, this would define the Sisense data query
  sisenseQuery: {
    datasource: string;
    // more specific query details
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
