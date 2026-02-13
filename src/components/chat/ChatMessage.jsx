import useTypingAnimation from '../../hooks/useTypingAnimation';
import formatText from '../../utils/formatMarkdown.jsx';

const ChatMessage = ({ role, content, animate = false }) => {
  const { displayedText, isTyping, skipToEnd } = useTypingAnimation(content, {
    autoStart: animate,
    speed: 40,
    chunkSize: 3,
  });

  const text = animate ? displayedText : content;

  if (role === 'user') {
    return (
      <div className="flex justify-end animate-slide-up">
        <div className="max-w-2xl bg-blue-600 text-white rounded-2xl rounded-br-md px-5 py-3 shadow-sm">
          <p className="text-lg">{text}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start animate-slide-up">
      <div className="max-w-3xl bg-white rounded-2xl rounded-bl-md px-5 py-4 shadow-sm border border-gray-100">
        <div className="prose prose-sm max-w-none">
          {formatText(text)}
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

export default ChatMessage;
