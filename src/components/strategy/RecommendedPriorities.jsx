import { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { strategy } from '../../data/strategy';

const RecommendedPriorities = () => {
  const [checked, setChecked] = useState({});

  const toggle = (id) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <CheckCircleIcon className="h-5 w-5 text-blue-600" />
        <h3 className="text-lg font-bold text-gray-900">Recommended Priorities</h3>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 divide-y divide-gray-100">
        {strategy.priorities.map((p) => (
          <label
            key={p.id}
            className="flex items-start gap-3 p-4 cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <input
              type="checkbox"
              checked={!!checked[p.id]}
              onChange={() => toggle(p.id)}
              className="mt-1 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <div className={checked[p.id] ? 'line-through opacity-60' : ''}>
              <p className="font-medium text-gray-900">
                {p.id}. {p.label}
              </p>
              <p className="text-sm text-gray-500 mt-0.5">{p.detail}</p>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RecommendedPriorities;
