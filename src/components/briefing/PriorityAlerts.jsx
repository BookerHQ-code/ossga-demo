import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { alerts } from '../../data/briefing';
import SectionHeader from '../ui/SectionHeader';

const borderColors = {
  critical: 'border-l-red-500',
  warning: 'border-l-amber-500',
};

const dotColors = {
  critical: 'bg-red-500',
  warning: 'bg-amber-500',
};

const PriorityAlerts = () => {
  return (
    <div>
      <SectionHeader
        icon={ExclamationTriangleIcon}
        title="Priority Alerts"
        subtitle={`${alerts.length} items requiring attention`}
      />
      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={clsx(
              'bg-white rounded-lg shadow-sm border border-gray-100 border-l-4 p-5',
              borderColors[alert.severity]
            )}
          >
            <div className="flex items-start gap-3">
              <span
                className={clsx('mt-1 h-2.5 w-2.5 rounded-full flex-shrink-0', dotColors[alert.severity])}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-medium text-gray-400 uppercase">{alert.type}</span>
                </div>
                <p className="mt-1 font-semibold text-gray-900 text-lg">{alert.title}</p>
                <p className="mt-1 text-gray-600">{alert.description}</p>
                <button className="mt-3 btn btn-primary text-sm py-1.5 px-3">
                  {alert.actionLabel}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriorityAlerts;
