
import React from 'react';

interface NavbarProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
  currentView: string;
  setView: (view: any) => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDarkMode, currentView, setView }) => {
  const navItems = [
    { name: 'Services', key: 'services' },
    { name: 'Portfolio', key: 'portfolio' },
    { name: 'About', key: 'about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between glass-panel mx-4 my-4 rounded-2xl border-black/5 dark:border-white/5 shadow-lg shadow-black/5 transition-all">
      <button 
        onClick={() => setView('home')} 
        className="flex items-center gap-2 group transition-transform active:scale-95"
      >
        <div className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20 group-hover:rotate-6 transition-transform">
          N
        </div>
        <span className="text-xl font-extrabold tracking-tight dark:text-white">NEXUS</span>
      </button>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        {navItems.map((item) => (
          <button
            key={item.key}
            onClick={() => setView(item.key)}
            className={`transition-colors ${
              currentView === item.key 
                ? 'text-blue-600 dark:text-blue-400' 
                : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 transition-all active:scale-90"
          aria-label="Toggle Theme"
        >
          {isDarkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>

        <button 
          onClick={() => setView('contact')}
          className={`px-5 py-2 rounded-full text-sm font-bold transition-all active:scale-95 shadow-xl ${
            currentView === 'contact'
            ? 'bg-blue-600 text-white shadow-blue-500/20'
            : 'bg-black dark:bg-white text-white dark:text-black shadow-black/10 dark:shadow-white/10'
          }`}
        >
          Work with us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
