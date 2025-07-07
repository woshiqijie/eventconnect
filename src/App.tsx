import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { DiscoverTab } from '@/components/DiscoverTab';
import { EventsTab } from '@/components/EventsTab';
import { MatchesTab } from '@/components/MatchesTab';
import { Toaster } from '@/components/ui/sonner';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('discover');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'discover':
        return <DiscoverTab />;
      case 'events':
        return <EventsTab />;
      case 'matches':
        return <MatchesTab />;
      default:
        return <DiscoverTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="container mx-auto px-4 py-8">
        {renderActiveTab()}
      </main>

      <Toaster />
    </div>
  );
}

export default App;
