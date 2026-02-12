import { useState } from 'react';
import AnalyticsFilters from './AnalyticsFilters';
import KpiSummaryRow from './KpiSummaryRow';
import ProductionCharts from './ProductionCharts';
import SalesCharts from './SalesCharts';
import InventoryCharts from './InventoryCharts';
import ComplianceCharts from './ComplianceCharts';

const AnalyticsDashboard = () => {
  const [filter, setFilter] = useState('all');

  const show = (key) => filter === 'all' || filter === key;

  return (
    <div className="space-y-5">
      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-sm text-gray-500">
            8-Week Trend &middot; As of February 18, 2026
          </p>
        </div>
        <AnalyticsFilters active={filter} onChange={setFilter} />
      </div>

      {/* KPI summary — always visible */}
      <KpiSummaryRow />

      {/* Chart sections */}
      {show('production') && <ProductionCharts />}
      {show('sales') && <SalesCharts />}
      {show('inventory') && <InventoryCharts />}
      {show('compliance') && <ComplianceCharts />}
    </div>
  );
};

export default AnalyticsDashboard;
