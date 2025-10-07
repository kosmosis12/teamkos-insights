import React from 'react';
import type { WidgetInstance } from '../types';
import { Widget } from './Widget';
import { Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);

interface DashboardProps {
  widgets: WidgetInstance[];
  onRemoveWidget: (widgetId: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ widgets, onRemoveWidget }) => {
  if (widgets.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-brand-dark">Your Dashboard is Empty</h2>
        <p className="mt-2 text-brand-secondary">Click "Add Widget" to get started.</p>
      </div>
    );
  }

  // Generate a default layout for new widgets
  const layouts = {
    lg: widgets.map((widget, i) => ({
      i: widget.id,
      x: (i * 4) % 12,
      y: Math.floor(i / 3) * 4,
      w: 4,
      h: 4,
      minW: 3,
      minH: 4,
    })),
  };

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={60}
      draggableHandle=".drag-handle"
    >
      {widgets.map(widget => (
        <div key={widget.id} className="bg-white rounded-lg shadow-md">
          <Widget instance={widget} onRemove={onRemoveWidget} />
        </div>
      ))}
    </ResponsiveGridLayout>
  );
};
