import { Disclosure } from '@headlessui/react';
import { LinkIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { strategy } from '../../data/strategy';
import SectionHeader from '../ui/SectionHeader';

const CrossFunctionalInsights = () => {
  return (
    <div>
      <SectionHeader
        icon={LinkIcon}
        title="Cross-Functional Insights"
        subtitle="Connections between operational areas"
      />
      <div className="space-y-3">
        {strategy.insights.map((insight, index) => (
          <Disclosure key={insight.id} defaultOpen={index === 0}>
            {({ open }) => (
              <div className="bg-white rounded-lg shadow-sm border border-gray-100">
                <Disclosure.Button className="w-full text-left p-5 flex items-start justify-between gap-3 focus:outline-none">
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">{insight.title}</p>
                    <p className="mt-1 text-gray-600">{insight.summary}</p>
                  </div>
                  <ChevronUpIcon
                    className={clsx(
                      'h-5 w-5 text-gray-400 flex-shrink-0 transition-transform mt-1',
                      !open && 'rotate-180'
                    )}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-5 pb-5 pt-0">
                  <div className="border-t border-gray-100 pt-4 space-y-3">
                    <p className="text-gray-700">{insight.detail}</p>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="text-sm font-medium text-blue-800 uppercase">Recommendation</p>
                      <p className="mt-1 text-blue-900">{insight.recommendation}</p>
                    </div>
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

export default CrossFunctionalInsights;
