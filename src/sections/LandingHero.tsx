import { motion } from 'motion/react';
import { ArrowRight, History } from 'lucide-react';

interface LandingHeroProps {
  onStart: () => void;
  onViewLog: () => void;
}

export default function LandingHero({ onStart, onViewLog }: LandingHeroProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-corporate-blue text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070"
          alt="Sustainability Background"
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-corporate-blue/50 to-corporate-blue" />
      </div>

      <div className="relative z-10 max-w-4xl px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-sustainability-green/20 border border-sustainability-green/30 rounded-full text-sustainability-green">
            Strategic ESG Benchmarking
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            HUL ESG & Malaysia-India <br />
            <span className="text-sustainability-green">Strategic Portfolio</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Connecting Hindustan Unilever's performance benchmarks with Malaysia's 2050 Net Zero goals through strategic localization and cross-border synergy.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={onStart}
              className="group flex items-center gap-3 px-8 py-4 bg-sustainability-green hover:bg-sustainability-green/90 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-sustainability-green/20"
              id="start-reading-btn"
            >
              Start Reading Report
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onViewLog}
              className="group flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-semibold transition-all backdrop-blur-sm"
              id="report-process-log-btn"
            >
              <History size={20} />
              Report Process Log
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
