import clsx from 'clsx';
import { alerts } from '../../data/briefing';

const accentColors = {
  critical: 'border-l-red-500',
  warning: 'border-l-yellow-400',
};

const PriorityAlerts = () => {
  return (
    <div className="divide-y divide-gray-100">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className={clsx('px-4 py-3 border-l-4', accentColors[alert.severity])}
        >
          <p className="font-medium text-gray-900">{alert.title}</p>
          <p className="text-sm text-gray-500 mt-0.5">{alert.description}</p>
          <button className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md px-3 py-1 transition-colors">
            {alert.actionLabel}
          </button>
        </div>
      ))}
    </div>
  );
};

export default PriorityAlerts;
