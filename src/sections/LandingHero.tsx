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

      <div className="relative z-10 max-w-7xl px-8 py-20 text-center flex flex-col min-h-screen justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-grow flex flex-col justify-center"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase bg-sustainability-green/20 border border-sustainability-green/30 rounded-full text-sustainability-green">
            STRATEGIC ESG BLUEPRINT
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight leading-[1.2]">
            <span className="block">The Malaysia–India ESG Synergy Blueprint:</span>
            <span className="text-sustainability-green block mt-2">A Digital Roadmap for Net Zero 2050</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            A comprehensive strategic framework that bridges Hindustan Unilever’s digital ESG excellence with Malaysia’s national sustainability goals. This blueprint outlines a systemic integration of Environmental circularity, Social empowerment, and Governance innovation—leveraging the Malaysia–India CSP to accelerate a pragmatic transition toward Net Zero 2050.
          </p>

          <div className="mb-12">
            <p className="text-sm md:text-base font-medium tracking-wide text-white/90">
              Strategic Concept & Analysis by <span className="text-sustainability-green font-bold">THAM KE LI</span>
            </p>
            <p className="text-xs md:text-sm text-white/60 mt-1 uppercase tracking-widest">
              Certified Data Analyst Associate | ESG Strategy Researcher
            </p>
            <a 
              href="https://dinq.me/keli" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-4 text-xs md:text-sm text-sustainability-green hover:text-sustainability-green/80 transition-colors font-medium"
            >
              🔗 Connect me via my Digital Business Card
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <button
              onClick={onStart}
              className="group flex items-center gap-3 px-10 py-4 bg-sustainability-green hover:bg-sustainability-green/90 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-sustainability-green/20"
              id="start-reading-btn"
            >
              Start Reading Report
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onViewLog}
              className="group flex items-center gap-3 px-10 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-bold transition-all backdrop-blur-sm"
              id="report-process-log-btn"
            >
              <History size={20} />
              Report Process Log
            </button>
          </div>
        </motion.div>

        {/* Footer / Disclaimer Area */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="max-w-4xl mx-auto border-t border-white/10 pt-8 mt-auto"
        >
          <p className="text-[10px] md:text-xs text-white/40 leading-relaxed text-center italic">
            <span className="font-bold not-italic text-white/60 block mb-1">Note on Document Status:</span>
            This report is a Strategic Pitching Blueprint developed for professional demonstration and portfolio purposes. While based on official HUL disclosures and Malaysia–India bilateral frameworks, it serves as an independent analytical proposal rather than an officially commissioned governmental or corporate document.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
