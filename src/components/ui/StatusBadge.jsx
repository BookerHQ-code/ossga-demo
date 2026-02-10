import clsx from 'clsx';

const statusStyles = {
  CRITICAL: 'bg-red-100 text-red-800 border-red-200',
  LOW: 'bg-amber-100 text-amber-800 border-amber-200',
  OK: 'bg-green-100 text-green-800 border-green-200',
  SOON: 'bg-amber-100 text-amber-800 border-amber-200',
  critical: 'bg-red-100 text-red-800 border-red-200',
  warning: 'bg-amber-100 text-amber-800 border-amber-200',
  ok: 'bg-green-100 text-green-800 border-green-200',
  high: 'bg-red-100 text-red-800 border-red-200',
  medium: 'bg-amber-100 text-amber-800 border-amber-200',
  low: 'bg-green-100 text-green-800 border-green-200',
  oversold: 'bg-red-100 text-red-800 border-red-200',
  ready: 'bg-green-100 text-green-800 border-green-200',
  monitor: 'bg-amber-100 text-amber-800 border-amber-200',
  compliant: 'bg-green-100 text-green-800 border-green-200',
};

const StatusBadge = ({ status, label }) => {
  const displayLabel = label || status;
  return (
    <span
      className={clsx(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium border',
        statusStyles[status] || 'bg-gray-100 text-gray-800 border-gray-200'
      )}
    >
      {displayLabel}
    </span>
  );
};

export default StatusBadge;
