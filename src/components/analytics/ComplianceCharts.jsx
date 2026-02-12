import { ShieldCheckIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { complianceProgress, complianceTimeline } from '../../data/analytics';

const ringColors = {
  PTTW: '#3B82F6',
  ECA: '#10B981',
  CAR: '#F59E0B',
};

const severityDot = {
  warning: 'bg-amber-400',
  ok: 'bg-green-400',
};

const severityLine = {
  warning: 'bg-amber-200',
  ok: 'bg-green-200',
};

const ProgressRing = ({ pct, label, type }) => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (pct / 100) * circumference;
  const color = ringColors[type] || '#3B82F6';

  return (
    <div className="flex flex-col items-center">
      <svg width="88" height="88" className="-rotate-90">
        <circle cx="44" cy="44" r={radius} fill="none" stroke="#E5E7EB" strokeWidth="6" />
        <circle
          cx="44"
          cy="44"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-700"
        />
      </svg>
      <span className="text-lg font-bold text-gray-900 -mt-14 mb-6">{pct}%</span>
      <p className="text-xs font-medium text-gray-700 text-center mt-1">{label}</p>
      <p className="text-xs text-gray-400">{type}</p>
    </div>
  );
};

const ComplianceCharts = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
        <ShieldCheckIcon className="h-4 w-4 text-blue-600" />
        <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
          Compliance Analytics
        </h2>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Progress rings */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-4">Permit Completion</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {complianceProgress.map((item) => (
                <ProgressRing
                  key={item.name}
                  pct={item.pct}
                  label={item.name}
                  type={item.type}
                />
              ))}
            </div>
          </div>

          {/* Deadline timeline */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-4">Upcoming Deadlines</h3>
            <div className="space-y-0">
              {complianceTimeline.map((item, i) => (
                <div key={item.label} className="flex gap-3">
                  {/* Timeline connector */}
                  <div className="flex flex-col items-center">
                    <div
                      className={clsx('w-3 h-3 rounded-full flex-shrink-0', severityDot[item.severity])}
                    />
                    {i < complianceTimeline.length - 1 && (
                      <div className={clsx('w-0.5 flex-1 min-h-[2rem]', severityLine[item.severity])} />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pb-4">
                    <p className="text-sm font-medium text-gray-900">{item.label}</p>
                    <p className="text-xs text-gray-500">
                      {item.date} &middot;{' '}
                      <span
                        className={clsx(
                          item.severity === 'warning' ? 'text-amber-600' : 'text-gray-500'
                        )}
                      >
                        {item.daysOut} days
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceCharts;
