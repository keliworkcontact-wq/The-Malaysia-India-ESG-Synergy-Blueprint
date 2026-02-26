import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LandingHero from './sections/LandingHero';
import PresentationLayout from './layouts/PresentationLayout';
import ProcessLog from './sections/ProcessLog';
import AuditDashboard from './sections/AuditDashboard';

type PageState = 'landing' | 'report' | 'log';

export default function App() {
  const [page, setPage] = useState<PageState>('landing');
  const [activeSection, setActiveSection] = useState('macro');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="antialiased">
      <AnimatePresence mode="wait">
        {page === 'landing' && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LandingHero 
              onStart={() => setPage('report')} 
              onViewLog={() => setPage('log')} 
            />
          </motion.div>
        )}

        {page === 'report' && (
          <motion.div
            key="report"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <PresentationLayout 
              activeSection={activeSection} 
              onNavClick={scrollToSection}
              onHomeClick={() => setPage('landing')}
            >
              <section id="macro" className="section-container bg-white">
                <div className="max-w-6xl w-full">
                  <h2 className="text-4xl font-bold mb-8 text-corporate-blue">Macro Background: Malaysia-India CSP</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <p className="text-lg text-stone-600 leading-relaxed">
                        The Malaysia-India Comprehensive Strategic Partnership (CSP) serves as the bedrock for our ESG localization strategy. With 11 MoUs focusing on semiconductor chains and TVET, the synergy is clear.
                      </p>
                      <img 
                        src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1000" 
                        alt="Macro Background" 
                        className="rounded-2xl shadow-lg w-full h-64 object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="bg-stone-100 p-8 rounded-2xl border border-stone-200">
                      <h3 className="text-xl font-semibold mb-4">Key Focus Areas</h3>
                      <ul className="space-y-4 text-stone-600">
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-sustainability-green rounded-full" />
                          Semiconductor Supply Chain Resilience
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-sustainability-green rounded-full" />
                          TVET & Digital Skill Upgradation
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-sustainability-green rounded-full" />
                          Local Currency Settlement (LC-SF)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section id="audit" className="section-container bg-stone-50">
                <div className="max-w-7xl w-full">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-corporate-blue mb-4">Section 2: Comprehensive ESG Audit Dashboard</h2>
                    <p className="text-stone-500 max-w-2xl mx-auto">
                      A deep-dive into HUL's 5-year sustainability performance, benchmarking environmental impact against social governance metrics.
                    </p>
                  </div>
                  <AuditDashboard />
                </div>
              </section>

              <section id="localization" className="section-container bg-white">
                <div className="max-w-6xl w-full">
                  <h2 className="text-4xl font-bold mb-8 text-corporate-blue">Localization: Malaysia ESG Roadmap</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {['Smart Rainwater Harvesting', 'Digital TVET', 'Regenerative Agriculture'].map((title) => (
                      <div key={title} className="p-8 bg-stone-50 rounded-2xl border border-stone-200 hover:border-sustainability-green transition-colors">
                        <h3 className="text-xl font-bold mb-4">{title}</h3>
                        <p className="text-stone-600 text-sm">Strategic proposal for Malaysia's 2050 Net Zero alignment.</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section id="conclusion" className="section-container bg-corporate-blue text-white">
                <div className="max-w-4xl w-full text-center">
                  <h2 className="text-4xl font-bold mb-8">Conclusion & Roadmap</h2>
                  <p className="text-xl text-white/70 mb-12">
                    From short-term data sharing to long-term decentralized green trade, the path forward is built on mutual sustainability goals.
                  </p>
                  <button 
                    onClick={() => setPage('landing')}
                    className="px-8 py-4 bg-white text-corporate-blue rounded-full font-bold hover:bg-stone-100 transition-colors"
                  >
                    Back to Start
                  </button>
                </div>
              </section>
            </PresentationLayout>
          </motion.div>
        )}

        {page === 'log' && (
          <motion.div
            key="log"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-stone-50 p-12"
          >
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h1 className="text-4xl font-bold text-corporate-blue mb-2">Report Process Log</h1>
                  <p className="text-stone-500">Interactive development timeline and strategic nodes.</p>
                </div>
                <button 
                  onClick={() => setPage('landing')}
                  className="px-6 py-2 bg-corporate-blue text-white rounded-full font-medium"
                >
                  Close Log
                </button>
              </div>
              <ProcessLog />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
