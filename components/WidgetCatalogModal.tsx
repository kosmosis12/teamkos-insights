
import React from 'react';
import type { WidgetConfig } from '../types';
import { PREDEFINED_WIDGETS } from '../constants';

interface WidgetCatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddWidget: (widgetConfig: WidgetConfig) => void;
}

const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
    </svg>
);


const WidgetCard: React.FC<{ config: WidgetConfig; onAdd: () => void }> = ({ config, onAdd }) => (
  <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-start hover:shadow-lg hover:border-brand-accent transition-all duration-200">
    <h4 className="font-semibold text-brand-dark">{config.title}</h4>
    <p className="text-sm text-brand-secondary flex-grow mt-1 mb-3">{config.description}</p>
    <button
      onClick={onAdd}
      className="mt-auto inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-brand-accent hover:bg-brand-accent-hover focus:outline-none"
    >
      <PlusIcon />
      Add
    </button>
  </div>
);

export const WidgetCatalogModal: React.FC<WidgetCatalogModalProps> = ({ isOpen, onClose, onAddWidget }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col animate-fade-in-up" onClick={e => e.stopPropagation()}>
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-brand-dark">Widget Catalog</h2>
              <p className="text-brand-secondary mt-1">Select a widget to add to your dashboard.</p>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">&times;</button>
          </div>
        </div>
        <div className="p-6 overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PREDEFINED_WIDGETS.map(config => (
              <WidgetCard key={config.id} config={config} onAdd={() => onAddWidget(config)} />
            ))}
             <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center text-center text-brand-secondary hover:border-brand-accent hover:text-brand-accent transition-colors cursor-pointer">
                <h4 className="font-semibold">Create Custom Widget</h4>
                <p className="text-sm mt-1">Build your own widget from the Sisense data model.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
