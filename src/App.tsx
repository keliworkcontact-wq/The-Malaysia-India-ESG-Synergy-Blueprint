import React from 'react';
import { HashRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import LandingHero from './sections/LandingHero';
import PresentationLayout from './layouts/PresentationLayout';
import ProcessLog from './sections/ProcessLog';
import ESGBenchmarkSection from './sections/ESGBenchmarkSection';
import RoadmapSection from './sections/RoadmapSection';
import MacroBackgroundSection from './sections/MacroBackgroundSection';
import ConclusionRoadmapSection from './sections/ConclusionRoadmapSection';
import CombinedNotice from './components/CombinedNotice';
import ReportHub from './sections/ReportHub';

function AppContent() {
  const navigate = useNavigate();
  const { sectionId } = useParams();

  const handleStartReading = () => {
    navigate('/hub');
  };

  const handleSelectSection = (id: string) => {
    navigate(`/report/${id}`);
  };

  const handleBackToHub = () => {
    navigate('/hub');
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleViewLog = () => {
    navigate('/log');
  };

  return (
    <div className="antialiased">
      <AnimatePresence mode="wait">
        <Routes>
          <Route 
            path="/" 
            element={
              <motion.div
                key="landing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <LandingHero 
                  onStart={handleStartReading} 
                  onViewLog={handleViewLog} 
                />
              </motion.div>
            } 
          />

          <Route 
            path="/hub" 
            element={
              <motion.div
                key="hub"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <ReportHub 
                  onSelectSection={handleSelectSection} 
                  onBackToHome={handleBackToHome} 
                />
              </motion.div>
            } 
          />

          <Route 
            path="/report/:sectionId" 
            element={
              <ReportView onBackToHub={handleBackToHub} />
            } 
          />

          <Route 
            path="/log" 
            element={
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
                      <h1 className="text-4xl font-bold text-corporate-blue mb-2">Report Appendix & Log</h1>
                      <p className="text-stone-500">The Malaysia–India ESG Synergy Blueprint</p>
                    </div>
                    <button 
                      onClick={handleBackToHome}
                      className="px-6 py-2 bg-corporate-blue text-white rounded-full font-medium"
                    >
                      Back to Home
                    </button>
                  </div>
                  <ProcessLog />
                  <div className="mt-20 pb-12">
                    <CombinedNotice variant="light" />
                  </div>
                </div>
              </motion.div>
            } 
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

function ReportView({ onBackToHub }: { onBackToHub: () => void }) {
  const { sectionId } = useParams();

  return (
    <motion.div
      key="report"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PresentationLayout onBackToHub={onBackToHub}>
        {sectionId === 'macro' && (
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

        {sectionId === 'audit' && (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-container bg-stone-50"
          >
            <ESGBenchmarkSection />
            <div className="w-full mt-20">
              <CombinedNotice variant="light" />
            </div>
          </motion.section>
        )}

        {sectionId === 'localization' && (
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

        {sectionId === 'conclusion' && (
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
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}
