
import type { SisenseDataRecord } from '../types';
import type { WidgetConfig } from '../types';

// This is a mock implementation of the Sisense ComposeSDK
// In a real application, you would import and use the actual SDK.

const MOCK_DATA_STORE: { [key: string]: SisenseDataRecord[] } = {
  'monthly-revenue': [
    { month: 'Jan', revenue: 65000 },
    { month: 'Feb', revenue: 59000 },
    { month: 'Mar', revenue: 80000 },
    { month: 'Apr', revenue: 81000 },
    { month: 'May', revenue: 56000 },
    { month: 'Jun', revenue: 55000 },
    { month: 'Jul', revenue: 72000 },
  ],
  'user-signups': Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    signups: 100 + Math.floor(Math.random() * 50) + i * 5,
  })),
  'sales-by-region': [
    { name: 'North America', value: 400 },
    { name: 'Europe', value: 300 },
    { name: 'Asia', value: 300 },
    { name: 'South America', value: 200 },
  ],
  'active-users': [{ value: '14,582' }],
  'ticket-resolution-time': [{ value: '8.2h' }],
  'customer-satisfaction': [
    { name: 'Very Satisfied', value: 650 },
    { name: 'Satisfied', value: 250 },
    { name: 'Neutral', value: 80 },
    { name: 'Unsatisfied', value: 20 },
  ],
};

// Simulate an async data fetch
const fetchMockData = <T,>(data: T): Promise<T> => {
    return new Promise(resolve => 
        setTimeout(() => resolve(data), 500 + Math.random() * 800)
    );
};

// This function simulates using the ComposeSDK to execute a query and get data for a widget.
export const getWidgetData = async (
  widgetConfig: WidgetConfig
): Promise<SisenseDataRecord[]> => {
  console.log(`Simulating Sisense fetch for: ${widgetConfig.title}`);
  const data = MOCK_DATA_STORE[widgetConfig.id] || [];
  return fetchMockData(data);
};
