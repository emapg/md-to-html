import React from 'react';
import { Heart, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-md mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              MD Converter is a free, open-source tool for converting Markdown to HTML and TXT formats.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-sm text-blue-500 hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="/disclaimer" className="text-sm text-blue-500 hover:text-blue-600">Disclaimer</a></li>
              <li><a href="https://github.com" className="text-sm text-blue-500 hover:text-blue-600 flex items-center gap-2">
                <Github className="w-4 h-4" />GitHub
              </a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Have questions or feedback? Reach out to us on GitHub.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2024 MD Converter. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by the MD Converter Team
          </p>
        </div>
      </div>
    </footer>
  );
};