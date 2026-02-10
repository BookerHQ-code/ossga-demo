import { ChartBarIcon } from '@heroicons/react/24/outline';
import { strategy } from '../../data/strategy';
import SectionHeader from '../ui/SectionHeader';
import MetricCard from '../ui/MetricCard';

const KeyMetrics = () => {
  return (
    <div>
      <SectionHeader
        icon={ChartBarIcon}
        title="Key Metrics vs. Targets"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
  );
};

export default KeyMetrics;
