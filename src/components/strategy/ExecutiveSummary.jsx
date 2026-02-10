import { DocumentTextIcon } from '@heroicons/react/24/outline';
import { strategy } from '../../data/strategy';
import SectionHeader from '../ui/SectionHeader';

const ExecutiveSummary = () => {
  return (
    <div>
      <SectionHeader
        icon={DocumentTextIcon}
        title="Executive Summary"
        subtitle={strategy.weekLabel}
      />
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <p className="text-lg text-gray-700 leading-relaxed">{strategy.executiveSummary}</p>
      </div>
    </div>
  );
};

export default ExecutiveSummary;
