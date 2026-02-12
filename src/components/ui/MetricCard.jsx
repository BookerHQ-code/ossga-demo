import clsx from 'clsx';
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon, MinusIcon } from '@heroicons/react/24/solid';

const statusBorder = {
  ok: 'border-t-green-400',
  warning: 'border-t-amber-400',
  critical: 'border-t-red-400',
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

const MetricCard = ({ title, value, subtitle, status, trend, trendValue, className }) => {
  const TrendIcon = trendIcons[trend] || MinusIcon;
  return (
    <div
      className={clsx(
        'rounded-lg border border-gray-100 border-t-4 p-3',
        className || 'bg-gray-50',
        statusBorder[status] || 'border-t-blue-400'
      )}
    >
      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{title}</p>
      <p className="mt-1 text-2xl font-bold text-gray-900">{value}</p>
      <p className="mt-0.5 text-xs text-gray-500">{subtitle}</p>
      {trendValue && (
        <div className={clsx('mt-1.5 flex items-center text-xs', trendColors[trend])}>
          <TrendIcon className="h-3.5 w-3.5 mr-1" />
          <span>{trendValue}</span>
        </div>
      )}
    </div>
  );
};

export default MetricCard;
