
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-gray-50/50 dark:bg-white/[0.01] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 dark:text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">Success Stories</h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">What our partners say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id} 
              className="glass-panel p-8 rounded-[32px] border-black/5 dark:border-white/5 hover:border-blue-500/30 transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="relative w-14 h-14 rounded-full object-cover border-2 border-white dark:border-white/10"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{t.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
                </div>
              </div>
              
              <div className="relative">
                <span className="absolute -top-4 -left-2 text-6xl text-blue-500/10 dark:text-blue-500/20 font-serif leading-none">“</span>
                <p className="relative z-10 text-gray-700 dark:text-gray-300 italic leading-relaxed">
                  {t.quote}
                </p>
              </div>

              <div className="mt-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
