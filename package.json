import { motion } from 'motion/react';
import { ArrowRight, Globe, BarChart3, Map, Zap, Download } from 'lucide-react';
import CombinedNotice from '../components/CombinedNotice';

interface ReportHubProps {
  onSelectSection: (sectionId: string) => void;
  onBackToHome: () => void;
}

export default function ReportHub({ onSelectSection, onBackToHome }: ReportHubProps) {
  const modules = [
    {
      id: 'macro',
      title: 'Section 1 — Geopolitical Signal',
      description: 'The Malaysia–India Strategic Alignment: A New Frontier for ESG Resilience',
      keyPoint: 'Geopolitical alignment creates a rare window for cross-border ESG system integration',
      icon: Globe,
      color: 'bg-corporate-blue',
    },
    {
      id: 'audit',
      title: 'Section 2 — Corporate ESG Benchmark',
      description: 'Diagnosing ESG Systems: From Corporate Excellence to Scope 3 Constraint',
      keyPoint: 'Scope 3 emissions reveal the structural limits of firm-level decarbonization',
      icon: BarChart3,
      color: 'bg-audit-green',
    },
    {
      id: 'localization',
      title: 'Section 3 — Strategy Translation',
      description: 'From Benchmark to Blueprint: Translating ESG Systems for Malaysia',
      keyPoint: 'ESG transformation depends on adapting systems—not replicating strategies',
      icon: Zap,
      color: 'bg-deep-amber',
    },
    {
      id: 'conclusion',
      title: 'Section 4 — Malaysia Net Zero 2050 Roadmap',
      description: 'Operationalizing Net Zero: A System-Level Roadmap for Malaysia',
      keyPoint: 'Net Zero requires coordinated ecosystem execution, not isolated corporate action',
      icon: Map,
      color: 'bg-stone-800',
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <main className="flex-grow max-w-7xl mx-auto px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-corporate-blue mb-6">Report Overview</h1>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
            This page presents the full structure of the report, organized across four interconnected sections—from geopolitical context and corporate ESG benchmarking to strategy translation and national-level roadmap development.
          </p>
          <div className="mt-8 inline-block px-6 py-3 bg-amber-50 border border-amber-200 rounded-2xl text-amber-800 text-sm font-medium">
            💡 Readers are recommended to follow the sections sequentially (Section 1 to Section 4) to fully understand the analytical progression.
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {modules.map((module, index) => (
            <motion.button
              key={module.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onSelectSection(module.id)}
              className="group relative flex flex-col items-start text-left p-8 bg-white rounded-[2.5rem] border border-stone-200 shadow-sm hover:shadow-xl hover:border-corporate-blue/20 transition-all overflow-hidden"
            >
              <div className={`w-14 h-14 ${module.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <module.icon size={28} />
              </div>
              <h2 className="text-2xl font-bold text-corporate-blue mb-3 group-hover:text-sustainability-green transition-colors">
                {module.title}
              </h2>
              <div className="text-stone-500 leading-relaxed mb-8 space-y-3">
                <p>{module.description}</p>
                <p className="italic text-stone-400">→ {module.keyPoint}</p>
              </div>
              <div className="mt-auto flex items-center gap-2 text-sm font-bold text-corporate-blue uppercase tracking-widest">
                Explore Section
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
              
              {/* Decorative Arrow for Flow */}
              {index < modules.length - 1 && (
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden xl:block">
                   <ArrowRight size={40} className="text-stone-100" />
                </div>
              )}
            </motion.button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button
            onClick={onBackToHome}
            className="px-8 py-4 bg-stone-200 hover:bg-stone-300 text-stone-700 rounded-2xl font-bold transition-all"
          >
            Back to Home
          </button>
          <a 
            href="/Malaysia–India ESG Synergy Blueprint - THAM KE LI.pdf" 
            download
            className="inline-flex items-center gap-3 bg-corporate-blue text-white px-8 py-4 rounded-2xl font-bold hover:bg-sustainability-green transition-all shadow-lg group"
          >
            <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Download Full Report PDF
          </a>
        </div>
      </main>

      <footer className="py-12 bg-white border-t border-stone-200">
        <CombinedNotice variant="light" />
      </footer>
    </div>
  );
}
