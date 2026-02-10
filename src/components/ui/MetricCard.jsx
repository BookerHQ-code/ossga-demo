import clsx from 'clsx';
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon, MinusIcon } from '@heroicons/react/24/solid';

const statusBorder = {
  ok: 'border-green-400',
  warning: 'border-amber-400',
  critical: 'border-red-400',
};

const trendIcons = {
  up: ArrowTrendingUpIcon,
  down: ArrowTrendingDownIcon,
  stable: MinusIcon,
};

const trendColors = {
  up: 'text-green-600',
  down: 'text-red-600',
  stable: 'text-gray-500',
};

const MetricCard = ({ title, value, subtitle, status, trend, trendValue }) => {
  const TrendIcon = trendIcons[trend] || MinusIcon;
  return (
    <div
      className={clsx(
        'bg-white rounded-xl shadow-sm border-t-4 p-6',
        statusBorder[status] || 'border-blue-400'
      )}
    >
      <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{title}</p>
      <p className="mt-2 text-4xl font-bold text-gray-900">{value}</p>
      <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
      {trendValue && (
        <div className={clsx('mt-3 flex items-center text-sm', trendColors[trend])}>
          <TrendIcon className="h-4 w-4 mr-1" />
          <span>{trendValue}</span>
        </div>
      )}
    </div>
  );
};

export default MetricCard;
