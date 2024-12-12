import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Features } from './components/sections/Features';
import { HowToUse } from './components/sections/HowToUse';
import { About } from './components/sections/About';
import { MarkdownInput } from './components/MarkdownInput';
import { OutputPanel } from './components/OutputPanel';

function App() {
  const [markdown, setMarkdown] = useState('');
  const [html, setHtml] = useState('');
  const [txt, setTxt] = useState('');
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (markdown) {
      const htmlContent = marked(markdown);
      setHtml(htmlContent);
      setTxt(markdown.replace(/[#*`_]/g, ''));
    } else {
      setHtml('');
      setTxt('');
    }
  }, [markdown]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />
      
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[500px]">
            <MarkdownInput value={markdown} onChange={setMarkdown} />
            <OutputPanel title="HTML Output" content={html} format="html" />
            <OutputPanel title="Text Output" content={txt} format="txt" />
          </div>
        </div>

        <Features />
        <HowToUse />
        <About />
      </main>

      <Footer />
    </div>
  );
}

export default App;