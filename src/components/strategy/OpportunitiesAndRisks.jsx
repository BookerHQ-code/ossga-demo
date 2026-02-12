import { BoltIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { strategy } from '../../data/strategy';

const riskBorderColors = {
  high: 'border-l-red-500',
  medium: 'border-l-amber-400',
  low: 'border-l-green-500',
};

const OpportunitiesAndRisks = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Opportunities */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
          <BoltIcon className="h-4 w-4 text-green-600" />
          <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
            Opportunities
          </h2>
        </div>
        <div className="divide-y divide-gray-100">
          {strategy.opportunities.map((opp) => (
            <div key={opp.id} className="px-4 py-3 border-l-4 border-l-green-500">
              <p className="text-sm font-medium text-gray-900">{opp.title}</p>
              <p className="mt-0.5 text-sm text-gray-500">{opp.description}</p>
              <p className="mt-1 text-xs font-medium text-green-700">
                Impact: {opp.impact}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Risks */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
          <ExclamationTriangleIcon className="h-4 w-4 text-red-600" />
          <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
            Risks
          </h2>
        </div>
        <div className="divide-y divide-gray-100">
          {strategy.risks.map((risk) => (
            <div
              key={risk.id}
              className={clsx('px-4 py-3 border-l-4', riskBorderColors[risk.severity])}
            >
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium text-gray-900">{risk.title}</p>
                <span className="text-xs font-medium uppercase text-gray-400">
                  {risk.severity}
                </span>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">{risk.description}</p>
              <p className="mt-1 text-sm text-gray-500">
                <span className="font-medium text-gray-600">Mitigation:</span> {risk.mitigation}
              </p>
              <p className="mt-0.5 text-xs text-gray-400">Owner: {risk.owner}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpportunitiesAndRisks;
