import { LinkIcon } from '@heroicons/react/24/outline';
import { strategy } from '../../data/strategy';

const CrossFunctionalInsights = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
        <LinkIcon className="h-4 w-4 text-blue-600" />
        <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
          Cross-Functional Insights
        </h2>
      </div>
      <div className="divide-y divide-gray-100">
        {strategy.insights.map((insight) => (
          <div key={insight.id} className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
            {/* Insight */}
            <div className="px-4 py-3">
              <p className="text-sm font-medium text-gray-900">{insight.title}</p>
              <p className="mt-0.5 text-sm text-gray-500">{insight.summary}</p>
            </div>
            {/* Recommendation */}
            <div className="px-4 py-3 border-l-2 border-l-blue-400 bg-gray-50 lg:border-l-0">
              <p className="text-xs font-medium text-gray-500 uppercase">Recommendation</p>
              <p className="mt-0.5 text-sm text-gray-700">{insight.recommendation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrossFunctionalInsights;
