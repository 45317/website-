
import React from 'react';

interface FooterProps {
  setView: (view: any) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="py-20 px-6 border-t border-gray-200 dark:border-white/5 bg-white dark:bg-[#030712] transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <button onClick={() => setView('home')} className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20">N</div>
            <span className="text-xl font-black text-gray-900 dark:text-white">NEXUS</span>
          </button>
          <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
            Crafting world-class digital experiences for the next generation of startups. Join our mission to redefine building software.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-400">Navigation</h4>
          <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
            <li><button onClick={() => setView('home')} className="hover:text-blue-500">Home</button></li>
            <li><button onClick={() => setView('services')} className="hover:text-blue-500">Services</button></li>
            <li><button onClick={() => setView('portfolio')} className="hover:text-blue-500">Portfolio</button></li>
            <li><button onClick={() => setView('about')} className="hover:text-blue-500">About</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-400">Social</h4>
          <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
            <li><a href="#" className="hover:text-blue-500">Twitter / X</a></li>
            <li><a href="#" className="hover:text-blue-500">LinkedIn</a></li>
            <li><a href="#" className="hover:text-blue-500">GitHub</a></li>
            <li><a href="#" className="hover:text-blue-500">Dribbble</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-12 border-t border-gray-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-400 dark:text-gray-600 text-xs">
          © {new Date().getFullYear()} Nexus Systems. All rights reserved. Built with precision.
        </p>
        <div className="flex gap-8 text-xs text-gray-400">
          <a href="#" className="hover:text-blue-500">Privacy Policy</a>
          <a href="#" className="hover:text-blue-500">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
