import React from 'react';
import { AlertCircle } from 'lucide-react';

export const Disclaimer: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <AlertCircle className="w-12 h-12 text-blue-500 mr-4" />
          <h1 className="text-4xl font-bold">Disclaimer</h1>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <p>Last updated: March 2024</p>

          <h2>Use of Service</h2>
          <p>
            MD Converter is provided "as is" without any warranties of any kind. While we strive for 
            accuracy in conversion, we cannot guarantee that all conversions will be perfect for all use cases.
          </p>

          <h2>Content Responsibility</h2>
          <p>
            Users are responsible for the content they convert using our service. We do not monitor, 
            edit, or take ownership of any content processed through MD Converter.
          </p>

          <h2>Service Availability</h2>
          <p>
            We strive to maintain high availability but cannot guarantee uninterrupted access to the service.
          </p>

          <h2>Changes to Service</h2>
          <p>
            We reserve the right to modify or discontinue the service at any time without notice.
          </p>
        </div>
      </div>
    </div>
  );
};