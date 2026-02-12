import clsx from 'clsx';

const filters = [
  { key: 'all', label: 'All' },
  { key: 'production', label: 'Production' },
  { key: 'sales', label: 'Sales' },
  { key: 'inventory', label: 'Inventory' },
  { key: 'compliance', label: 'Compliance' },
];

const AnalyticsFilters = ({ active, onChange }) => {
  return (
    <div className="flex gap-1">
      {filters.map((f) => (
        <button
          key={f.key}
          onClick={() => onChange(f.key)}
          className={clsx(
            'flex items-center gap-1.5 px-3 py-1 rounded-md text-sm font-medium transition-colors',
            active === f.key
              ? 'bg-blue-600 text-white'
              : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
          )}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
};

export default AnalyticsFilters;
