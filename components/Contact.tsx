
import React, { useState } from 'react';
import { analyzeLead } from '../services/gemini';
import { FormStatus } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', project: '' });
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);
  const [aiAnalysis, setAiAnalysis] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === FormStatus.SUBMITTING) return;
    
    setStatus(FormStatus.SUBMITTING);
    try {
      const analysis = await analyzeLead(formData);
      setAiAnalysis(analysis || null);
      setStatus(FormStatus.SUCCESS);
    } catch (error) {
      console.error(error);
      setStatus(FormStatus.ERROR);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50/30 dark:bg-white/[0.01] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-blue-600 dark:text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">Get in touch</h2>
            <h3 className="text-5xl font-black mb-8 text-gray-900 dark:text-white">Let's build something <span className="gradient-text">remarkable</span> together.</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-xl shadow-sm">📧</div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Email Us</p>
                  <p className="text-gray-600 dark:text-gray-400">hello@nexussystems.io</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-xl shadow-sm">📍</div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Office</p>
                  <p className="text-gray-600 dark:text-gray-400">San Francisco, CA & Remote Global</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 md:p-12 rounded-[40px] relative overflow-hidden shadow-2xl dark:shadow-none border border-black/5 dark:border-white/10">
            {status === FormStatus.SUCCESS ? (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">✓</div>
                  <h4 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Inquiry Received</h4>
                  <p className="text-gray-600 dark:text-gray-400">Thank you, {formData.name.split(' ')[0]}. We've prepared an initial analysis for you.</p>
                </div>
                
                {aiAnalysis && (
                  <div className="bg-white/50 dark:bg-white/[0.03] rounded-[32px] p-8 text-left border border-blue-500/20 shadow-xl shadow-blue-500/5">
                    <div className="flex items-center gap-2 mb-6">
                      <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
                      <p className="text-xs font-black uppercase text-blue-600 dark:text-blue-400 tracking-[0.2em]">Nexus AI Insight Report</p>
                    </div>
                    
                    <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                      {aiAnalysis.split('\n').filter(line => line.trim() !== '').map((line, i) => {
                        const isHeading = line.includes(':') && (line.includes('VISION') || line.includes('ARCHITECTURE') || line.includes('COMPLEXITY') || line.includes('STEP'));
                        return (
                          <p key={i} className={`${isHeading ? 'text-blue-600 dark:text-blue-400 font-bold text-sm mt-4 uppercase tracking-wider' : 'text-sm pl-4 border-l border-gray-200 dark:border-white/10'}`}>
                            {line.replace(/[*#]/g, '')}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="mt-8 text-center">
                  <button 
                    onClick={() => { setStatus(FormStatus.IDLE); setFormData({ name: '', email: '', project: '' }); }}
                    className="px-6 py-3 rounded-xl border border-black/5 dark:border-white/10 text-gray-500 hover:text-blue-500 transition-colors text-sm font-bold"
                  >
                    Send another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest mb-3 text-gray-400">Your Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Jane Doe"
                      className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest mb-3 text-gray-400">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="jane@example.com"
                      className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest mb-3 text-gray-400">What are we building?</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Tell us about the features, the goals, and the timeline..."
                    className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all resize-none"
                    value={formData.project}
                    onChange={(e) => setFormData({...formData, project: e.target.value})}
                  />
                </div>
                <button 
                  type="submit"
                  disabled={status === FormStatus.SUBMITTING}
                  className="group relative w-full py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 hover:scale-[1.01] active:scale-95 transition-all disabled:opacity-70 overflow-hidden"
                >
                  <span className="relative z-10">
                    {status === FormStatus.SUBMITTING ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Nexus is analyzing...
                      </span>
                    ) : 'Generate Project Insight'}
                  </span>
                  {status === FormStatus.SUBMITTING && (
                    <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
                  )}
                </button>
                {status === FormStatus.ERROR && (
                   <p className="text-red-500 text-xs text-center font-bold tracking-tight">System error. Please verify your connection and try again.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
