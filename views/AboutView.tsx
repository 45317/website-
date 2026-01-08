
import React from 'react';
import { TEAM } from '../constants';

const AboutView: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <section className="pt-24 pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-8xl font-black mb-12">We are <span className="gradient-text">Nexus.</span></h1>
          <p className="text-2xl md:text-3xl font-medium leading-tight text-gray-700 dark:text-gray-300">
            A collective of engineers, designers, and strategists obsessed with the intersection of human intuition and artificial intelligence.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50 dark:bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-black">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              To empower the world's most ambitious companies with technology that doesn't just work, but inspires. We believe software should be as beautiful as it is functional.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-black">Our Philosophy</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We don't take orders; we form partnerships. Your success is our primary metric. We value clarity over complexity and performance over promises.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-black">Our Future</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Leading the transition into an AI-first digital world. We are constantly experimenting with the latest in LLMs, edge computing, and spatial interfaces.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black mb-6">The Leadership</h2>
          <p className="text-gray-500">The minds behind the code.</p>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {TEAM.map(m => (
            <div key={m.name} className="text-center group">
              <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="text-2xl font-bold">{m.name}</h4>
              <p className="text-blue-600 dark:text-blue-400 font-medium">{m.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutView;
