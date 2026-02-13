import { ChartBarSquareIcon, SparklesIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

const views = [
  { id: 'dashboard', label: 'Dashboard', Icon: ChartBarSquareIcon },
  { id: 'ai-insights', label: 'AI Insights', Icon: SparklesIcon },
];

const AnalyticsViewToggle = ({ active, onChange }) => {
  return (
    <div className="inline-flex rounded-lg bg-gray-100 p-1">
      {views.map(({ id, label, Icon }) => (
        <button
          key={id}
          onClick={() => onChange(id)}
          className={clsx(
            'flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
            active === id
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-500 hover:text-gray-700'
          )}
        >
          <Icon className="h-4 w-4" />
          {label}
        </button>
      ))}
    </div>
  );
};

export default AnalyticsViewToggle;
