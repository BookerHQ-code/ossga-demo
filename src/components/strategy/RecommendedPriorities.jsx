import { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { strategy } from '../../data/strategy';

const RecommendedPriorities = () => {
  const [checked, setChecked] = useState({});

  const toggle = (id) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
        <CheckCircleIcon className="h-4 w-4 text-blue-600" />
        <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
          Recommended Priorities
        </h2>
      </div>
      <div className="divide-y divide-gray-100">
        {strategy.priorities.map((p) => (
          <label
            key={p.id}
            className="flex items-start gap-3 px-4 py-2.5 cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <input
              type="checkbox"
              checked={!!checked[p.id]}
              onChange={() => toggle(p.id)}
              className="mt-0.5 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <div className={checked[p.id] ? 'line-through opacity-60' : ''}>
              <p className="text-sm font-medium text-gray-900">
                {p.id}. {p.label}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">{p.detail}</p>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RecommendedPriorities;
