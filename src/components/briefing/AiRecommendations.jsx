import { Disclosure } from '@headlessui/react';
import { LightBulbIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { recommendations } from '../../data/briefing';
import SectionHeader from '../ui/SectionHeader';

const priorityColors = {
  HIGH: 'bg-red-100 text-red-800',
  MEDIUM: 'bg-amber-100 text-amber-800',
  LOW: 'bg-green-100 text-green-800',
};

const AiRecommendations = () => {
  return (
    <div>
      <SectionHeader
        icon={LightBulbIcon}
        title="AI Recommendations"
        subtitle="Prioritized action items with reasoning"
      />
      <div className="space-y-3">
        {recommendations.map((rec, index) => (
          <Disclosure key={rec.id} defaultOpen={index === 0}>
            {({ open }) => (
              <div className="bg-white rounded-lg shadow-sm border border-gray-100">
                <Disclosure.Button className="w-full text-left p-5 flex items-start gap-3 focus:outline-none">
                  <span className="mt-0.5 text-lg font-bold text-gray-400">{index + 1}.</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className={clsx(
                          'inline-flex px-2 py-0.5 rounded text-xs font-bold uppercase',
                          priorityColors[rec.priority]
                        )}
                      >
                        {rec.priority}
                      </span>
                      <span className="font-semibold text-gray-900 text-lg">{rec.title}</span>
                    </div>
                    <p className="mt-1 text-gray-600">{rec.action}</p>
                  </div>
                  <ChevronUpIcon
                    className={clsx(
                      'h-5 w-5 text-gray-400 flex-shrink-0 transition-transform',
                      !open && 'rotate-180'
                    )}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-5 pb-5 pt-0 ml-9">
                  <div className="border-t border-gray-100 pt-4 space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-500 uppercase">Reasoning</p>
                      <p className="mt-1 text-gray-700">{rec.reasoning}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 uppercase">Impact if Ignored</p>
                      <p className="mt-1 text-gray-700">{rec.impact}</p>
                    </div>
                    <p className="text-sm text-gray-500">Suggested Owner: {rec.owner}</p>
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
