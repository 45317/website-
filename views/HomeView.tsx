
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';

interface HomeViewProps {
  setView: (view: any) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ setView }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <Hero />
      <div className="py-20 flex justify-center">
        <button 
          onClick={() => setView('portfolio')}
          className="group flex flex-col items-center gap-4 text-gray-400 hover:text-blue-500 transition-colors"
        >
          <span className="text-xs font-bold tracking-widest uppercase">Scroll to explore</span>
          <div className="w-[1px] h-12 bg-gray-200 dark:bg-white/10 group-hover:h-16 transition-all"></div>
        </button>
      </div>
      <Services />
      <Portfolio />
      <Testimonials />
      
      <section className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto glass-panel p-16 rounded-[60px] border-blue-500/10 dark:border-white/5">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Ready to <span className="gradient-text">transcend</span> the ordinary?
          </h2>
          <button 
            onClick={() => setView('contact')}
            className="px-10 py-5 bg-blue-600 text-white font-black rounded-3xl shadow-2xl shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all"
          >
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
