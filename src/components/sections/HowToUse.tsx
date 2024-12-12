import React from 'react';
import { FileText, Code, Download } from 'lucide-react';

const Step: React.FC<{ number: number; icon: React.ReactNode; title: string; description: string }> = ({
  number,
  icon,
  title,
  description,
}) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
      {number}
    </div>
    <div>
      <div className="flex items-center space-x-2 mb-2">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  </div>
);

export const HowToUse: React.FC = () => {
  const steps = [
    {
      icon: <FileText className="w-6 h-6 text-blue-500" />,
      title: "Input Your Markdown",
      description: "Type or paste your Markdown content into the editor, or drag and drop a .md file.",
    },
    {
      icon: <Code className="w-6 h-6 text-blue-500" />,
      title: "Preview Conversion",
      description: "See the HTML and plain text output update in real-time as you type.",
    },
    {
      icon: <Download className="w-6 h-6 text-blue-500" />,
      title: "Export or Copy",
      description: "Download the converted files or copy the content directly to your clipboard.",
    },
  ];

  return (
    <section id="how-to-use" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How to Use</h2>
        <div className="max-w-3xl mx-auto space-y-12">
          {steps.map((step, index) => (
            <Step key={index} number={index + 1} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};