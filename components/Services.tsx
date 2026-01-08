
import React, { useEffect, useRef, useState } from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-24 px-6 bg-gray-50/50 dark:bg-white/[0.02] transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-blue-600 dark:text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">What we do</h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">Our Expertise</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              style={{ transitionDelay: `${index * 150}ms` }}
              className={`p-8 rounded-3xl glass-panel group hover:border-blue-500/50 transition-all duration-700 shadow-sm hover:shadow-xl dark:shadow-none transform ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
            >
              <div className="text-4xl mb-6 bg-gray-100 dark:bg-white/5 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{service.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 cursor-pointer hover:underline">Learn More →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
