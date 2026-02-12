import { Disclosure } from '@headlessui/react';
import { LightBulbIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { recommendations } from '../../data/briefing';

const priorityColors = {
  HIGH: 'bg-red-100 text-red-800',
  MEDIUM: 'bg-amber-100 text-amber-800',
  LOW: 'bg-green-100 text-green-800',
};

const AiRecommendations = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
        <LightBulbIcon className="h-4 w-4 text-blue-600" />
        <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
          AI Recommendations
        </h2>
        <span className="text-xs text-gray-400">Prioritized action items</span>
      </div>

      {/* Items */}
      <div className="divide-y divide-gray-100">
        {recommendations.map((rec) => (
          <Disclosure key={rec.id} >
            {({ open }) => (
              <div>
                <Disclosure.Button className="w-full text-left px-4 py-3 flex items-start gap-3 hover:bg-gray-50 transition-colors focus:outline-none">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className={clsx(
                          'inline-flex px-1.5 py-0.5 rounded text-xs font-bold uppercase',
                          priorityColors[rec.priority]
                        )}
                      >
                        {rec.priority}
                      </span>
                      <span className="text-sm font-medium text-gray-900">{rec.title}</span>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">{rec.action}</p>
                  </div>
                  <ChevronUpIcon
                    className={clsx(
                      'h-4 w-4 text-gray-400 flex-shrink-0 transition-transform mt-0.5',
                      !open && 'rotate-180'
                    )}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-3 pt-0">
                  <div className="border-t border-gray-100 pt-2.5 space-y-2 text-sm">
                    <div>
                      <p className="text-xs font-medium text-gray-400 uppercase">Reasoning</p>
                      <p className="mt-0.5 text-gray-600">{rec.reasoning}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-400 uppercase">Impact if Ignored</p>
                      <p className="mt-0.5 text-gray-600">{rec.impact}</p>
                    </div>
                    <p className="text-xs text-gray-400">Owner: {rec.owner}</p>
                  </div>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default AiRecommendations;
