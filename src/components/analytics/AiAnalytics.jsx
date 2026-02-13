import { useState, useRef } from 'react';
import { SparklesIcon } from '@heroicons/react/24/outline';
import SuggestedQuestions from '../chat/SuggestedQuestions';
import AnalyticsReport from './AnalyticsReport';
import { matchAnalyticsQuery, suggestedAnalyticsPrompts } from '../../data/analyticsResponses';

const AiAnalytics = () => {
  const [input, setInput] = useState('');
  const [report, setReport] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = (query) => {
    const trimmed = (query || input).trim();
    if (!trimmed || isProcessing) return;

    setInput('');
    setReport(null);
    setIsProcessing(true);

    // Simulated thinking delay
    setTimeout(() => {
      const result = matchAnalyticsQuery(trimmed);
      setReport(result);
      setIsProcessing(false);
    }, 1200);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="space-y-5">
      {/* Input area */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="flex gap-3">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask for an analytics report..."
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={isProcessing}
          />
          <button
            onClick={() => handleSubmit()}
            disabled={!input.trim() || isProcessing}
            className="bg-blue-600 text-white rounded-lg px-5 py-2.5 font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
          >
            <SparklesIcon className="h-4 w-4" />
            Generate
          </button>
        </div>
      </div>

      {/* Suggested prompts — hidden while processing or when a report is shown */}
      {!report && !isProcessing && (
        <div>
          <p className="text-sm text-gray-500 mb-2">Suggested reports:</p>
          <SuggestedQuestions
            questions={suggestedAnalyticsPrompts}
            onSelect={handleSubmit}
          />
        </div>
      )}

      {/* Processing indicator */}
      {isProcessing && (
        <div className="flex items-center justify-center gap-3 py-12 animate-pulse">
          <SparklesIcon className="h-6 w-6 text-blue-600 animate-spin" />
          <span className="text-gray-600 font-medium text-lg">Generating analytics report...</span>
        </div>
      )}

      {/* Report display */}
      {report && !isProcessing && (
        <AnalyticsReport
          title={report.title}
          confidence={report.confidence}
          content={report.response}
        />
      )}
    </div>
  );
};

export default AiAnalytics;
