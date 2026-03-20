import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LandingHero from './sections/LandingHero';
import PresentationLayout from './layouts/PresentationLayout';
import ProcessLog from './sections/ProcessLog';
import AuditDashboard from './sections/AuditDashboard';
import RoadmapSection from './sections/RoadmapSection';
import MacroBackgroundSection from './sections/MacroBackgroundSection';
import ConclusionRoadmapSection from './sections/ConclusionRoadmapSection';
import CombinedNotice from './components/CombinedNotice';
import ReportHub from './sections/ReportHub';

type PageState = 'landing' | 'hub' | 'report' | 'log';

export default function App() {
  const [page, setPage] = useState<PageState>('landing');
  const [activeSection, setActiveSection] = useState('macro');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartReading = () => {
    setPage('hub');
  };

  const handleSelectSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setPage('report');
  };

  const handleBackToHub = () => {
    setPage('hub');
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
                onStart={handleStartReading} 
                onViewLog={() => setPage('log')} 
              />
            </motion.div>
          )}

          {page === 'hub' && (
            <motion.div
              key="hub"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <ReportHub 
                onSelectSection={handleSelectSection} 
                onBackToHome={() => setPage('landing')} 
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
                onBackToHub={handleBackToHub}
              >
                {activeSection === 'macro' && (
                  <motion.section 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="section-container bg-white"
                  >
                    <MacroBackgroundSection />
                    <div className="w-full mt-20">
                      <CombinedNotice variant="light" />
                    </div>
                  </motion.section>
                )}

                {activeSection === 'audit' && (
                  <motion.section 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="section-container bg-stone-50"
                  >
                    <div className="max-w-7xl w-full py-20">
                      <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-corporate-blue mb-4">Section 2: Corporate ESG Benchmark</h2>
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
                    <div className="w-full mt-20">
                      <CombinedNotice variant="light" />
                    </div>
                  </motion.section>
                )}

                {activeSection === 'localization' && (
                  <motion.section 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="section-container bg-white"
                  >
                    <RoadmapSection />
                    <div className="w-full mt-20">
                      <CombinedNotice variant="light" />
                    </div>
                  </motion.section>
                )}

                {activeSection === 'conclusion' && (
                  <motion.section 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="section-container bg-corporate-blue text-white"
                  >
                    <ConclusionRoadmapSection />
                    <div className="w-full mt-20">
                      <CombinedNotice variant="dark" />
                    </div>
                  </motion.section>
                )}
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
                    <p className="text-stone-500">The Malaysia–India ESG Synergy Blueprint</p>
                  </div>
                  <button 
                    onClick={() => setPage('landing')}
                    className="px-6 py-2 bg-corporate-blue text-white rounded-full font-medium"
                  >
                    Close Log
                  </button>
                </div>
                <ProcessLog />
                <div className="mt-20 pb-12">
                  <CombinedNotice variant="light" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
  );
}
