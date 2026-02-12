import { ChartBarIcon } from '@heroicons/react/24/outline';
import { strategy } from '../../data/strategy';
import MetricCard from '../ui/MetricCard';

const KeyMetrics = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
        <ChartBarIcon className="h-4 w-4 text-blue-600" />
        <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
          Key Metrics vs. Targets
        </h2>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {strategy.metrics.map((metric) => (
            <MetricCard
              key={metric.id}
              title={metric.title}
              value={metric.value}
              subtitle={metric.subtitle}
              status={metric.status}
              trend={metric.trend}
              trendValue={metric.trendValue}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyMetrics;
