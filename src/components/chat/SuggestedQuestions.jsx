const SuggestedQuestions = ({ questions, onSelect }) => {
  if (!questions || questions.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {questions.map((q, i) => (
        <button
          key={i}
          onClick={() => onSelect(q)}
          className="bg-white border border-blue-200 text-blue-700 rounded-full px-4 py-2 text-sm font-medium hover:bg-blue-50 hover:border-blue-300 transition-colors shadow-sm"
        >
          {q}
        </button>
      ))}
    </div>
  );
};

export default SuggestedQuestions;
