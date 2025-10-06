
import React from 'react';
import type { WidgetInstance } from '../types';
import { Widget } from './Widget';

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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
      {widgets.map(widget => (
        <Widget key={widget.id} instance={widget} onRemove={onRemoveWidget} />
      ))}
    </div>
  );
};
