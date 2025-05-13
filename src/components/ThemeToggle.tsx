
import React from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(true);

  React.useEffect(() => {
    // Load saved preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'false') {
      document.body.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.body.classList.toggle('dark');
    
    // Store preference
    localStorage.setItem('darkMode', newMode ? 'true' : 'false');
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed z-50 bottom-4 left-4 p-3 rounded-full shadow-lg transition-all duration-300
                bg-white dark:bg-dark-green hover:scale-110 active:scale-95 group"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative w-6 h-6 overflow-hidden">
        <Sun className="absolute text-dark-green dark:text-pale-gold transition-all duration-500 
                      transform dark:rotate-45 dark:translate-y-10" />
        <Moon className="absolute text-dark-green dark:text-pale-gold transition-all duration-500 
                       transform -rotate-45 -translate-y-10 dark:rotate-0 dark:translate-y-0" />
      </div>
      <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-black/70 text-white 
                     text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity 
                     whitespace-nowrap">
        {isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      </span>
    </button>
  );
};

export default ThemeToggle;
