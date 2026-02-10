import { useState, useRef, useEffect, useCallback } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import ChatMessage from './ChatMessage';
import SuggestedQuestions from './SuggestedQuestions';
import { matchQuery, suggestedQuestions } from '../../data/chatResponses';

const AskAnything = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [availableQuestions, setAvailableQuestions] = useState(suggestedQuestions);
  const bottomRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const handleSend = useCallback(
    (text) => {
      const query = text || input.trim();
      if (!query || isProcessing) return;

      setInput('');
      setIsProcessing(true);

      // Remove used suggestion
      setAvailableQuestions((prev) => prev.filter((q) => q !== query));

      // Add user message
      setMessages((prev) => [...prev, { role: 'user', content: query }]);

      // Simulate thinking delay then respond
      setTimeout(() => {
        const response = matchQuery(query);
        setMessages((prev) => [...prev, { role: 'assistant', content: response, animate: true }]);
        setIsProcessing(false);
      }, 800);
    },
    [input, isProcessing]
  );

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-220px)] min-h-[500px]">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-900">Ask Anything</h1>
        <p className="text-sm text-gray-500">
          Ask questions about operations, inventory, compliance, or scheduling
        </p>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto space-y-4 pb-4">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              <PaperAirplaneIcon className="h-8 w-8 text-blue-400 -rotate-45" />
            </div>
            <p className="text-gray-500 text-lg mb-6">
              Ask me about inventory, orders, compliance, or scheduling
            </p>
            <SuggestedQuestions questions={availableQuestions} onSelect={handleSend} />
          </div>
        )}

        {messages.map((msg, i) => (
          <ChatMessage key={i} role={msg.role} content={msg.content} animate={msg.animate} />
        ))}

        {isProcessing && (
          <div className="flex justify-start">
            <div className="bg-white rounded-2xl rounded-bl-md px-5 py-4 shadow-sm border border-gray-100">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Suggested questions below messages */}
      {messages.length > 0 && availableQuestions.length > 0 && !isProcessing && (
        <div className="py-3 border-t border-gray-100">
          <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Suggested questions</p>
          <SuggestedQuestions questions={availableQuestions} onSelect={handleSend} />
        </div>
      )}

      {/* Input area */}
      <div className="border-t border-gray-200 pt-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask a question..."
            className="flex-1 rounded-xl border border-gray-300 px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={isProcessing}
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || isProcessing}
            className="btn btn-primary rounded-xl px-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <PaperAirplaneIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AskAnything;
