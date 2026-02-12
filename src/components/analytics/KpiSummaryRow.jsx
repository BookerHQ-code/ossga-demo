import { strategy } from '../../data/strategy';
import MetricCard from '../ui/MetricCard';

const KpiSummaryRow = () => {
  return (
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
          className="bg-white"
        />
      ))}
    </div>
  );
};

export default KpiSummaryRow;
