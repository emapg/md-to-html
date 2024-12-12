import React from 'react';
import { Shield, Lock, Zap } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About MD Converter</h2>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            MD Converter is a powerful, free online tool designed to make Markdown conversion simple and efficient. 
            Whether you're a developer, writer, or content creator, our tool helps you transform your Markdown content 
            into clean HTML or plain text with just a few clicks.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your content never leaves your browser
              </p>
            </div>
            
            <div className="text-center">
              <Lock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Private</h3>
              <p className="text-gray-600 dark:text-gray-400">
                No data storage or tracking
              </p>
            </div>
            
            <div className="text-center">
              <Zap className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Instant conversion in real-time
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};