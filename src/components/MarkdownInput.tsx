import React from 'react';
import { Upload } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

interface MarkdownInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const MarkdownInput: React.FC<MarkdownInputProps> = ({ value, onChange }) => {
  const onDrop = React.useCallback(
    (acceptedFiles: File[]) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          const text = reader.result as string;
          onChange(text);
        };
        reader.readAsText(file);
      });
    },
    [onChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/markdown': ['.md', '.markdown'],
      'text/plain': ['.txt'],
    },
  });

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-semibold">Markdown Input</h2>
        <div
          {...getRootProps()}
          className="cursor-pointer p-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2 transition-colors"
        >
          <Upload className="w-4 h-4" />
          <span>Upload MD</span>
          <input {...getInputProps()} />
        </div>
      </div>
      <div
        className={`flex-1 relative ${
          isDragActive ? 'border-blue-500' : 'border-gray-300'
        }`}
      >
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-full p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          placeholder="Enter your Markdown here..."
        />
        {isDragActive && (
          <div className="absolute inset-0 bg-blue-500 bg-opacity-10 flex items-center justify-center rounded-lg border-2 border-blue-500 border-dashed">
            <p className="text-blue-500 font-medium">Drop your Markdown file here</p>
          </div>
        )}
      </div>
    </div>
  );
};