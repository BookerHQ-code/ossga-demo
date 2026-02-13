import { SparklesIcon } from '@heroicons/react/24/solid';
import useTypingAnimation from '../../hooks/useTypingAnimation';
import formatText from '../../utils/formatMarkdown.jsx';
import clsx from 'clsx';

const AnalyticsReport = ({ title, confidence, content }) => {
  const { displayedText, isTyping, skipToEnd } = useTypingAnimation(content, {
    autoStart: true,
    speed: 35,
    chunkSize: 4,
  });

  const confidenceColor =
    confidence >= 90 ? 'bg-green-100 text-green-800' :
    confidence >= 80 ? 'bg-yellow-100 text-yellow-800' :
    'bg-gray-100 text-gray-700';

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden animate-slide-up">
      {/* Header bar */}
      <div className="flex items-center justify-between px-5 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <SparklesIcon className="h-5 w-5 text-blue-600" />
          <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>
        </div>
        <span className={clsx('text-xs font-medium px-2.5 py-1 rounded-full', confidenceColor)}>
          {confidence}% confidence
        </span>
      </div>

      {/* Report body */}
      <div className="px-5 py-4">
        <div className="prose prose-sm max-w-none">
          {formatText(displayedText)}
        </div>
        {isTyping && (
          <span className="inline-block w-2 h-5 bg-blue-600 ml-1 animate-blink align-text-bottom" />
        )}
        {isTyping && (
          <button
            onClick={skipToEnd}
            className="mt-3 text-xs text-blue-600 hover:text-blue-700 font-medium"
          >
            Skip animation &rarr;
          </button>
        )}
      </div>
    </div>
  );
};

export default AnalyticsReport;
