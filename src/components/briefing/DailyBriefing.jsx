import { useState } from 'react';
import {
  CubeIcon,
  TruckIcon,
  ClipboardDocumentCheckIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import WeatherBanner from './WeatherBanner';
import PriorityAlerts from './PriorityAlerts';
import InventorySnapshot from './InventorySnapshot';
import TodayOrders from './TodayOrders';
import ComplianceStatus from './ComplianceStatus';
import AiRecommendations from './AiRecommendations';
import { alerts } from '../../data/briefing';

const detailTabs = [
  { key: 'inventory', label: 'Inventory', icon: CubeIcon },
  { key: 'orders', label: 'Orders', icon: TruckIcon },
  { key: 'compliance', label: 'Compliance', icon: ClipboardDocumentCheckIcon },
];

const DailyBriefing = () => {
  const [activeDetail, setActiveDetail] = useState('inventory');

  return (
    <div className="space-y-5">
      {/* Header + Weather banner row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-bold text-gray-900">Daily Briefing</h1>
          <p className="text-sm text-gray-500">Tuesday, February 18, 2026 &middot; 6:00 AM</p>
        </div>
        <WeatherBanner />
      </div>

      {/* Priority Alerts + Detail panel side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start" style={{ maxHeight: '36rem' }}>
        {/* Left column — Priority Alerts */}
        <div
          className="bg-white rounded-lg border border-gray-200 flex flex-col overflow-hidden"
          style={{ maxHeight: '36rem' }}
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
            <ExclamationTriangleIcon className="h-4 w-4 text-amber-500" />
            <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Priority Alerts
            </h2>
            <span className="text-xs text-gray-400">{alerts.length} items</span>
          </div>
          <div className="overflow-y-auto flex-1">
            <PriorityAlerts />
          </div>
        </div>

        {/* Right column — Detail panel */}
        <div
          className="bg-white rounded-lg border border-gray-200 flex flex-col overflow-hidden"
          style={{ maxHeight: '36rem' }}
        >
          <div className="flex gap-1 px-4 py-3 border-b border-gray-100">
            {detailTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveDetail(tab.key)}
                className={clsx(
                  'flex items-center gap-1.5 px-3 py-1 rounded-md text-sm font-medium transition-colors',
                  activeDetail === tab.key
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                )}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>
          <div className="overflow-y-auto flex-1">
            {activeDetail === 'inventory' && <InventorySnapshot inline />}
            {activeDetail === 'orders' && <TodayOrders inline />}
            {activeDetail === 'compliance' && <ComplianceStatus inline />}
          </div>
        </div>
      </div>

      {/* AI Recommendations */}
      <AiRecommendations />
    </div>
  );
};

export default DailyBriefing;
