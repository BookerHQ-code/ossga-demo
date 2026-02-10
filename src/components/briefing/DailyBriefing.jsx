import WeatherBanner from './WeatherBanner';
import PriorityAlerts from './PriorityAlerts';
import InventorySnapshot from './InventorySnapshot';
import TodayOrders from './TodayOrders';
import ComplianceStatus from './ComplianceStatus';
import AiRecommendations from './AiRecommendations';

const DailyBriefing = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Daily Briefing</h1>
          <p className="text-sm text-gray-500">Tuesday, February 18, 2026 &middot; 6:00 AM</p>
        </div>
      </div>
      <WeatherBanner />
      <PriorityAlerts />
      <InventorySnapshot />
      <TodayOrders />
      <ComplianceStatus />
      <AiRecommendations />
    </div>
  );
};

export default DailyBriefing;
