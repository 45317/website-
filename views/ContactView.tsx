
import React from 'react';
import Contact from '../components/Contact';

const ContactView: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 min-h-[80vh] flex flex-col justify-center">
      <div className="pt-12">
        <Contact />
      </div>
      
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="p-8 glass-panel rounded-3xl">
            <h4 className="font-bold mb-2">New Projects</h4>
            <p className="text-gray-500 text-sm">sales@nexussystems.io</p>
          </div>
          <div className="p-8 glass-panel rounded-3xl">
            <h4 className="font-bold mb-2">Technical Support</h4>
            <p className="text-gray-500 text-sm">support@nexussystems.io</p>
          </div>
          <div className="p-8 glass-panel rounded-3xl">
            <h4 className="font-bold mb-2">Careers</h4>
            <p className="text-gray-500 text-sm">join@nexussystems.io</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactView;
