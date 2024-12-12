import React from 'react';
import { Shield } from 'lucide-react';

export const Privacy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Shield className="w-12 h-12 text-blue-500 mr-4" />
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <p>Last updated: March 2024</p>

          <h2>Data Collection</h2>
          <p>
            MD Converter does not collect, store, or transmit any personal data. All conversions are 
            performed entirely in your browser, and your content never leaves your device.
          </p>

          <h2>Cookies</h2>
          <p>
            We use only essential cookies to remember your theme preference. No tracking or analytics 
            cookies are used.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            MD Converter does not integrate with any third-party services that could collect user data.
          </p>

          <h2>Contact</h2>
          <p>
            For privacy-related questions, please open an issue on our GitHub repository.
          </p>
        </div>
      </div>
    </div>
  );
};