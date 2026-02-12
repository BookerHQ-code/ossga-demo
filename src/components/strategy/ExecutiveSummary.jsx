import { DocumentTextIcon } from '@heroicons/react/24/outline';
import { strategy } from '../../data/strategy';

const ExecutiveSummary = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
        <DocumentTextIcon className="h-4 w-4 text-blue-600" />
        <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
          Executive Summary
        </h2>
        <span className="text-xs text-gray-400">{strategy.weekLabel}</span>
      </div>
      <div className="px-4 py-3">
        <p className="text-sm text-gray-700 leading-relaxed">{strategy.executiveSummary}</p>
        <ol className="mt-3 space-y-1.5 list-decimal list-inside">
          {strategy.takeaways.map((item, i) => (
            <li key={i} className="text-sm font-medium text-gray-900">{item}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ExecutiveSummary;
