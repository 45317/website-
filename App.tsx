
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeView from './views/HomeView';
import ServicesView from './views/ServicesView';
import PortfolioView from './views/PortfolioView';
import AboutView from './views/AboutView';
import ContactView from './views/ContactView';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

type View = 'home' | 'services' | 'portfolio' | 'about' | 'contact';

function App() {
  const [view, setView] = useState<View>('home');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  
  const renderView = () => {
    switch (view) {
      case 'services': return <ServicesView />;
      case 'portfolio': return <PortfolioView />;
      case 'about': return <AboutView />;
      case 'contact': return <ContactView />;
      default: return <HomeView setView={setView} />;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#030712] text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar 
        toggleTheme={toggleTheme} 
        isDarkMode={isDarkMode} 
        currentView={view} 
        setView={setView} 
      />
      
      <main className="animate-in fade-in duration-700 pt-20">
        {renderView()}
      </main>

      <Footer setView={setView} />
      <ChatBot />
    </div>
  );
}

export default App;
