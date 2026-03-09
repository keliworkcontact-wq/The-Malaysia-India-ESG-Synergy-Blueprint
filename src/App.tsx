import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LandingHero from './sections/LandingHero';
import PresentationLayout from './layouts/PresentationLayout';
import ProcessLog from './sections/ProcessLog';
import AuditDashboard from './sections/AuditDashboard';
import RoadmapSection from './sections/RoadmapSection';
import MacroBackgroundSection from './sections/MacroBackgroundSection';

type PageState = 'landing' | 'report' | 'log';

export default function App() {
  const [page, setPage] = useState<PageState>('landing');
  const [activeSection, setActiveSection] = useState('macro');

  useEffect(() => {
    if (page !== 'report') return;

    const handleScroll = () => {
      const sections = ['macro', 'audit', 'localization', 'conclusion'];
      let currentSection = '';

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section occupies the middle of the viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = id;
            break;
          }
        }
      }

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check with a small delay to ensure layout is settled
    const timer = setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [page, activeSection]);

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
                <MacroBackgroundSection />
              </section>

              <section id="audit" className="section-container bg-stone-50">
                <div className="max-w-7xl w-full">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-corporate-blue mb-4">Section 2: Benchmark Audit</h2>
                    <h3 className="text-2xl font-semibold text-stone-700 mb-6">HUL ESG Performance, Risk Signals, and Forward Projections</h3>
                    <p className="text-stone-500 max-w-3xl mx-auto text-lg">
                      This section analyzes the core strategies and technological innovations driving Hindustan Unilever Limited’s (HUL) growth and sustainability performance for the 2023-25 period.
                    </p>
                    <div className="mt-4 text-sm font-medium text-stone-400 uppercase tracking-widest">
                      Data foundation: HUL disclosures (2023–2025) and three years of official datasets. (<a href="https://www.hul.co.in/sustainability/sustainability-reporting-centre/" target="_blank" rel="noopener noreferrer" className="hover:text-corporate-blue transition-colors underline decoration-dotted">https://www.hul.co.in/sustainability/sustainability-reporting-centre/</a>)
                    </div>
                  </div>
                  <AuditDashboard />
                </div>
              </section>

              <section id="localization" className="section-container bg-white">
                <RoadmapSection />
              </section>

              <section id="conclusion" className="section-container bg-corporate-blue text-white">
                <div className="max-w-4xl w-full text-center">
                  <h2 className="text-4xl md:text-5xl font-bold mb-8">Conclusion & Roadmap</h2>
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
