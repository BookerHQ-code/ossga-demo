export default function formatText(text) {
  const lines = text.split('\n');
  const elements = [];
  let inTable = false;
  let tableRows = [];

  const flushTable = () => {
    if (tableRows.length === 0) return;
    const headerCells = tableRows[0];
    const bodyRows = tableRows.slice(2); // skip separator row
    elements.push(
      <div key={`table-${elements.length}`} className="overflow-x-auto my-3">
        <table className="min-w-full text-sm border border-gray-200 rounded">
          <thead>
            <tr className="bg-gray-50">
              {headerCells.map((cell, i) => (
                <th key={i} className="px-3 py-2 text-left font-medium text-gray-700 border-b border-gray-200">
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bodyRows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                {row.map((cell, j) => (
                  <td key={j} className="px-3 py-2 text-gray-600 border-b border-gray-100">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    tableRows = [];
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Table detection
    if (line.includes('|') && line.trim().startsWith('|')) {
      inTable = true;
      const cells = line.split('|').filter((c) => c.trim() !== '').map((c) => c.trim());
      // Skip separator rows (---)
      if (cells.every((c) => /^[-:]+$/.test(c))) {
        tableRows.push(cells);
      } else {
        tableRows.push(cells);
      }
      continue;
    }

    if (inTable) {
      inTable = false;
      flushTable();
    }

    // Bold headers (**text**)
    if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(
        <p key={i} className="font-bold text-gray-900 mt-3 mb-1 text-lg">
          {line.replace(/\*\*/g, '')}
        </p>
      );
    } else if (line.startsWith('- ') || line.startsWith('* ')) {
      const content = line.slice(2);
      elements.push(
        <div key={i} className="flex gap-2 ml-2">
          <span className="text-gray-400">&bull;</span>
          <span className="text-gray-700" dangerouslySetInnerHTML={{
            __html: content
              .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
              .replace(/\*(.+?)\*/g, '<em>$1</em>')
          }} />
        </div>
      );
    } else if (line.trim() === '') {
      elements.push(<div key={i} className="h-2" />);
    } else {
      elements.push(
        <p key={i} className="text-gray-700" dangerouslySetInnerHTML={{
          __html: line
            .replace(/\*\*(.+?)\*\*/g, '<strong class="text-gray-900">$1</strong>')
            .replace(/\*(.+?)\*/g, '<em>$1</em>')
        }} />
      );
    }
  }

  if (inTable) flushTable();

  return elements;
}
