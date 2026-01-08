
import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const PortfolioView: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web3 & Blockchain', 'Healthcare Tech', 'Supply Chain', 'Internal Tooling'];
  
  const filteredProjects = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <section className="pt-24 pb-20 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-6">Our <span className="gradient-text">Portfolio</span></h1>
        <p className="text-gray-500 dark:text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
          Explore our record of building transformative digital products.
        </p>
      </section>

      <div className="px-6 mb-16 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex justify-center gap-4 min-w-max pb-4">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-6 py-2 rounded-full text-sm font-bold border transition-all active:scale-95 ${
                filter === c 
                ? 'bg-blue-600 text-white border-blue-600' 
                : 'bg-white dark:bg-white/5 border-black/5 dark:border-white/10 text-gray-500 hover:text-black dark:hover:text-white shadow-sm'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <section className="px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredProjects.map((p) => (
            <div key={p.id} className="group cursor-pointer transition-all duration-500 hover:scale-[1.01]">
              <div className="relative aspect-video rounded-[40px] overflow-hidden mb-8 border border-black/5 dark:border-white/10 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <img 
                  src={p.image} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  alt={p.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-12">
                   <div className="transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                     <p className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-2">{p.category}</p>
                     <h3 className="text-3xl font-black text-white">{p.title}</h3>
                   </div>
                </div>
              </div>
              <div className="px-4">
                <div className="flex items-center gap-2 mb-2">
                   <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-500">{p.category}</span>
                   <div className="h-px w-8 bg-gray-200 dark:bg-white/10"></div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">{p.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">{p.description}</p>
                <div className="mt-6 flex gap-4">
                  <span className="text-sm font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-2 transition-transform">View Case Study →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PortfolioView;
