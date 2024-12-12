import React from 'react';
import { Copy, Download } from 'lucide-react';

interface OutputPanelProps {
  title: string;
  content: string;
  format: 'html' | 'txt';
}

export const OutputPanel: React.FC<OutputPanelProps> = ({ title, content, format }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(content);
  };

  const downloadFile = () => {
    const blob = new Blob([content], { type: `text/${format}` });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `converted.${format}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="flex gap-2">
          <button
            onClick={copyToClipboard}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            title="Copy to clipboard"
          >
            <Copy className="w-4 h-4" />
          </button>
          <button
            onClick={downloadFile}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            title="Download file"
          >
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="flex-1 p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 overflow-auto">
        {format === 'html' ? (
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            className="prose dark:prose-invert max-w-none"
          />
        ) : (
          <pre className="whitespace-pre-wrap font-mono text-sm">{content}</pre>
        )}
      </div>
    </div>
  );
};