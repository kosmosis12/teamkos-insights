import type { WidgetConfig } from './types';
import { ChartType } from './types';
import * as DM from './src/pipeline-analysis';
import { measureFactory } from '@sisense/sdk-data';

// This now uses the exact table name from your data model
const PipelineTable = DM.Q4_Pipeline_Analysis_SingleTab_csv;

export const PREDEFINED_WIDGETS: WidgetConfig[] = [
  {
    id: 'pipeline-by-stage',
    title: 'Pipeline Value by Stage',
    description: 'Total value of open opportunities, grouped by the current sales stage.',
    chartType: ChartType.PIE,
    sisenseQuery: { 
      dimensions: [PipelineTable.StageName],
      measures: [measureFactory.sum(PipelineTable.Pipeline, 'Total Pipeline')],
    },
  },
  {
    id: 'forecast-category',
    title: 'Forecast by Category',
    description: 'Compares the total deal value across forecast categories.',
    chartType: ChartType.BAR,
    sisenseQuery: { 
      dimensions: [PipelineTable.ForecastCategoryNew],
      measures: [measureFactory.sum(PipelineTable.Pipeline, 'Total Pipeline')],
    },
  },
  {
    id: 'deal-age-by-stage',
    title: 'Average Deal Age by Stage',
    description: 'Highlights bottlenecks by showing the average deal age in each stage.',
    chartType: ChartType.BAR,
    sisenseQuery: { 
      dimensions: [PipelineTable.StageName],
      measures: [measureFactory.average(PipelineTable.AgeDays, 'Avg. Age (Days)')],
    },
  },
  {
    id: 'total-pipeline',
    title: 'Total Open Pipeline',
    description: 'A real-time KPI showing the total value of all open opportunities.',
    chartType: ChartType.STAT,
    sisenseQuery: {
      dimensions: [], 
      measures: [measureFactory.sum(PipelineTable.Pipeline, 'Total Pipeline')],
    },
  },
  {
    id: 'pipeline-by-rep',
    title: 'Pipeline by Sales Rep',
    description: 'Compares the total pipeline value managed by each account owner.',
    chartType: ChartType.BAR,
    sisenseQuery: { 
      dimensions: [PipelineTable.Owner],
      measures: [measureFactory.sum(PipelineTable.Pipeline, 'Total Pipeline')],
    },
  },
  {
    id: 'risk-distribution',
    title: 'Pipeline Value by Risk',
    description: 'Segments the pipeline by the deal engagement risk level.',
    chartType: ChartType.PIE,
    sisenseQuery: { 
      dimensions: [PipelineTable.EngagementRisk],
      measures: [measureFactory.sum(PipelineTable.Pipeline, 'Total Pipeline')],
    },
  },
];