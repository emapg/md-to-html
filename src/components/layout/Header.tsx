import React from 'react';
import { FileText, Menu } from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle';
import { NavLink } from './NavLink';

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDark, onToggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FileText className="w-8 h-8 text-blue-500" />
            <h1 className="text-2xl font-bold">MD Converter</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#how-to-use">How to Use</NavLink>
            <NavLink href="#about">About</NavLink>
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <NavLink href="#features" mobile>Features</NavLink>
            <NavLink href="#how-to-use" mobile>How to Use</NavLink>
            <NavLink href="#about" mobile>About</NavLink>
          </div>
        )}
      </div>
    </header>
  );
};