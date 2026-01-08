
import React from 'react';
import { SERVICES } from '../constants';

const ServicesView: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <section className="pt-24 pb-20 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-6">Our <span className="gradient-text">Capabilities</span></h1>
        <p className="text-gray-500 dark:text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
          From ideation to deployment, we provide the technical firepower required to build industry-leading platforms.
        </p>
      </section>

      <section className="px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {SERVICES.map((s, i) => (
            <div key={s.id} className="glass-panel p-12 rounded-[40px] border-white/5 group hover:border-blue-500/30 transition-all duration-500">
              <div className="text-6xl mb-8 bg-gray-100 dark:bg-white/5 w-24 h-24 flex items-center justify-center rounded-3xl">
                {s.icon}
              </div>
              <h2 className="text-3xl font-black mb-6">{s.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10">
                {s.description} Built with scalability and security at the core. We handle everything from initial architectural planning to continuous integration.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/5">
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-1">Process</p>
                  <p className="text-sm">Agile Sprints</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/5">
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-1">Timeline</p>
                  <p className="text-sm">4-12 Weeks</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-32 py-24 px-6 bg-gray-50 dark:bg-white/[0.02]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-16">The Nexus Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {['React', 'Next.js', 'Node.js', 'Python', 'Go', 'AWS', 'GCP', 'Postgres', 'Redis', 'Gemini AI'].map(tech => (
              <span key={tech} className="px-6 py-3 bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-full text-sm font-bold shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesView;
