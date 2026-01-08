
import React from 'react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 px-6 bg-white dark:bg-[#030712] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-blue-600 dark:text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">Selected Work</h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">Digital Flagships</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-md text-lg leading-relaxed">
            We don't just build websites; we build scalable digital ecosystems that drive growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.slice(0, 3).map((project) => (
            <div key={project.id} className="group cursor-pointer transition-all duration-500 hover:scale-[1.02]">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-white/10 shadow-md group-hover:shadow-2xl transition-all duration-500">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2 block">{project.category}</span>
                    <h4 className="text-2xl font-bold text-white">{project.title}</h4>
                  </div>
                </div>
              </div>
              <div className="px-2 transition-opacity duration-300 group-hover:opacity-80">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-500 mb-2 block">{project.category}</span>
                <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
