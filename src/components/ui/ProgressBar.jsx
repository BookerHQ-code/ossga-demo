import clsx from 'clsx';

const barColors = {
  CRITICAL: 'bg-red-500',
  LOW: 'bg-amber-500',
  OK: 'bg-green-500',
  SOON: 'bg-amber-500',
  critical: 'bg-red-500',
  warning: 'bg-amber-500',
  ok: 'bg-green-500',
};

const ProgressBar = ({ value, max, label, status, showLabel = true }) => {
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between text-sm mb-1">
          <span className="font-medium text-gray-700">{label}</span>
          <span className="text-gray-500">{Math.round(pct)}%</span>
        </div>
      )}
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className={clsx('h-3 rounded-full transition-all duration-500', barColors[status] || 'bg-blue-500')}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
