
import type { WidgetConfig } from './types';
import { ChartType } from './types';

export const PREDEFINED_WIDGETS: WidgetConfig[] = [
  {
    id: 'monthly-revenue',
    title: 'Monthly Revenue',
    description: 'Total revenue generated per month over the last year.',
    chartType: ChartType.BAR,
    sisenseQuery: { datasource: 'E-Commerce' },
  },
  {
    id: 'user-signups',
    title: 'User Signups',
    description: 'Daily new user signups trend over the past 30 days.',
    chartType: ChartType.LINE,
    sisenseQuery: { datasource: 'User_Authentication' },
  },
  {
    id: 'sales-by-region',
    title: 'Sales by Region',
    description: 'A breakdown of total sales across different geographical regions.',
    chartType: ChartType.PIE,
    sisenseQuery: { datasource: 'Sales_CRM' },
  },
  {
    id: 'active-users',
    title: 'Daily Active Users (DAU)',
    description: 'The number of unique users active on the platform today.',
    chartType: ChartType.STAT,
    sisenseQuery: { datasource: 'Analytics_Events' },
  },
   {
    id: 'ticket-resolution-time',
    title: 'Avg. Ticket Resolution Time',
    description: 'Average time in hours to resolve customer support tickets.',
    chartType: ChartType.STAT,
    sisenseQuery: { datasource: 'Support_Desk' },
  },
  {
    id: 'customer-satisfaction',
    title: 'Customer Satisfaction (CSAT)',
    description: 'Overall customer satisfaction score from the latest surveys.',
    chartType: ChartType.PIE,
    sisenseQuery: { datasource: 'Survey_Data' },
  },
];
