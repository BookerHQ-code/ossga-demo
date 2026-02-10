import { BoltIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { strategy } from '../../data/strategy';

const riskSeverityColors = {
  high: 'bg-red-50 border-red-200',
  medium: 'bg-amber-50 border-amber-200',
  low: 'bg-green-50 border-green-200',
};

const riskDotColors = {
  high: 'bg-red-500',
  medium: 'bg-amber-500',
  low: 'bg-green-500',
};

const OpportunitiesAndRisks = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Opportunities */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <BoltIcon className="h-5 w-5 text-green-600" />
          <h3 className="text-lg font-bold text-gray-900">Opportunities</h3>
        </div>
        <div className="space-y-3">
          {strategy.opportunities.map((opp) => (
            <div key={opp.id} className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="font-semibold text-green-900">{opp.title}</p>
              <p className="mt-1 text-sm text-green-800">{opp.description}</p>
              <p className="mt-2 text-sm font-medium text-green-700">
                Estimated impact: {opp.impact}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Risks */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <ExclamationTriangleIcon className="h-5 w-5 text-red-600" />
          <h3 className="text-lg font-bold text-gray-900">Risks</h3>
        </div>
        <div className="space-y-3">
          {strategy.risks.map((risk) => (
            <div
              key={risk.id}
              className={clsx('border rounded-lg p-4', riskSeverityColors[risk.severity])}
            >
              <div className="flex items-center gap-2">
                <span className={clsx('h-2 w-2 rounded-full', riskDotColors[risk.severity])} />
                <p className="font-semibold text-gray-900">{risk.title}</p>
                <span className="text-xs font-medium uppercase text-gray-500">
                  [{risk.severity}]
                </span>
              </div>
              <p className="mt-1 text-sm text-gray-700">{risk.description}</p>
              <p className="mt-1 text-sm text-gray-600">
                <span className="font-medium">Mitigation:</span> {risk.mitigation}
              </p>
              <p className="mt-1 text-xs text-gray-500">Owner: {risk.owner}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpportunitiesAndRisks;
