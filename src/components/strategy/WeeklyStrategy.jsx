import ExecutiveSummary from './ExecutiveSummary';
import KeyMetrics from './KeyMetrics';
import CrossFunctionalInsights from './CrossFunctionalInsights';
import OpportunitiesAndRisks from './OpportunitiesAndRisks';
import RecommendedPriorities from './RecommendedPriorities';
import { strategy } from '../../data/strategy';

const WeeklyStrategy = () => {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Weekly Strategy Brief</h1>
        <p className="text-sm text-gray-500">
          {strategy.weekLabel} &middot; Generated {strategy.generatedDate}
        </p>
      </div>
      <ExecutiveSummary />
      <KeyMetrics />
      <RecommendedPriorities />
      <OpportunitiesAndRisks />
      <CrossFunctionalInsights />
    </div>
  );
};

export default WeeklyStrategy;
