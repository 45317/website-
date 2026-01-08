
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-screen flex flex-col items-center justify-center text-center bg-white dark:bg-[#030712] transition-colors duration-300">
      {/* Abstract Background Shapes */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-600/10 dark:bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 dark:bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-semibold mb-8 text-blue-600 dark:text-blue-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Now accepting Q3 2024 projects
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black leading-[1.1] mb-6 text-gray-900 dark:text-white">
          Architecting <span className="gradient-text">Intelligence</span> into Every Interface.
        </h1>
        
        <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Nexus Systems is a premier digital boutique specialized in building high-performance 
          web experiences powered by cutting-edge AI.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#portfolio" 
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
          >
            Explore Portfolio
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-4 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-white/10 transition-all"
          >
            Schedule a Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
