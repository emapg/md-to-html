import React from 'react';
import { Zap, Upload, Download, Copy, Moon, Globe } from 'lucide-react';

const Feature: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({
  icon,
  title,
  description,
}) => (
  <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
    <div className="text-blue-500 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Conversion",
      description: "See your Markdown transformed instantly as you type with live preview.",
    },
    {
      icon: <Upload className="w-8 h-8" />,
      title: "Drag & Drop",
      description: "Simply drag and drop your Markdown files for quick conversion.",
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Export Options",
      description: "Download your converted content in HTML or TXT format.",
    },
    {
      icon: <Copy className="w-8 h-8" />,
      title: "Copy to Clipboard",
      description: "One-click copying of converted content to your clipboard.",
    },
    {
      icon: <Moon className="w-8 h-8" />,
      title: "Dark Mode",
      description: "Easy on the eyes with automatic dark mode support.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "No Installation",
      description: "Use directly in your browser, no software installation needed.",
    },
  ];

  return (
    <section id="features" className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};