import React, { useState } from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { WidgetCatalogModal } from './components/WidgetCatalogModal';
import type { WidgetInstance, WidgetConfig } from './types';
import { SisenseContextProvider } from '@sisense/sdk-ui';

const App: React.FC = () => {
  const [widgets, setWidgets] = useState<WidgetInstance[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addWidget = (widgetConfig: WidgetConfig) => {
    const newWidget: WidgetInstance = {
      id: `${widgetConfig.id}-${Date.now()}`,
      config: widgetConfig,
    };
    setWidgets(prevWidgets => [...prevWidgets, newWidget]);
    setIsModalOpen(false);
  };

  const removeWidget = (widgetId: string) => {
    setWidgets(prevWidgets => prevWidgets.filter(w => w.id !== widgetId));
  };

  return (
    <SisenseContextProvider
      url="https://aesandbox.sisensepoc.com"
      // This now securely uses your API token
      token={process.env.SISENSE_API_TOKEN}
    >
      <div className="min-h-screen text-brand-dark font-sans">
        <Header onAddWidgetClick={() => setIsModalOpen(true)} />
        <main className="p-4 sm:p-6 lg:p-8">
          <Dashboard widgets={widgets} onRemoveWidget={removeWidget} />
        </main>
        <WidgetCatalogModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddWidget={addWidget}
        />
      </div>
    </SisenseContextProvider>
  );
};

export default App;
