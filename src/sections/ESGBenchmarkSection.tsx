import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SystemDiagnosisDashboard from '../components/SystemDiagnosisDashboard';
import { 
  Target, 
  ShieldCheck, 
  Factory, 
  Zap, 
  Users, 
  Recycle, 
  ArrowRight, 
  ExternalLink,
  CheckCircle2,
  Info
} from 'lucide-react';

interface StrategyNode {
  id: string;
  title: string;
  category: 'Governance' | 'Technology' | 'Value Chain';
  icon: any;
  intro: string;
  execution: string[];
  results: string[];
  color: string;
}

const strategyNodes: StrategyNode[] = [
  {
    id: 'aspire',
    title: 'ASPIRE Strategy',
    category: 'Governance',
    icon: Target,
    color: 'bg-blue-600',
    intro: '"ASPIRE: Unlocking a Billion Aspirations" is HUL’s primary business strategy designed to drive growth by meeting the evolving needs of an increasingly affluent and digital-native Indian population. It is underpinned by two foundational pillars: Sustainability and Culture.',
    execution: [
      'Focus: Segmenting the portfolio into Core, Future Core, and Market Makers to prioritize high-growth spaces.',
      'Excel: Pivoting investments to five demand drivers, including digital-first marketing and specialty channels like premium beauty and health.',
      'Accelerate: Strengthening "distinctive moats" through disruptive science and an AI-enabled supply chain.'
    ],
    results: [
      'Market leadership in over 85% of its operating categories.',
      '200 bps portfolio shift toward future-facing and premium segments.',
      '99% reduction in operational (Scope 1 & 2) emissions compared to its 2008 baseline.'
    ]
  },
  {
    id: 'governance',
    title: 'Governance Transparency',
    category: 'Governance',
    icon: ShieldCheck,
    color: 'bg-blue-500',
    intro: 'HUL’s governance strategy is built on the "One Unilever" model and is deeply rooted in the core values of Integrity, Respect, Responsibility, and Pioneering. The primary objective is to ensure long-term sustainable success by exceeding minimum legal standards to build enduring trust with all stakeholders.',
    execution: [
      'Multi-tiered governance structure including the Board of Directors, six specialized Board Committees, and a Management Committee.',
      'Unbiased oversight: All Board Committees are chaired by Independent Directors.',
      'Code of Business Principles (CoBP): Enforced through a robust digital compliance management tool for real-time tracking and a 24/7 anonymous whistle-blowing hotline.'
    ],
    results: [
      'Board Composition: Achieved 55.56% independent directors on the Board and 67% on the ESG Committee.',
      'Diversity: Female representation reached 22.2% on the Board and 42% at the managerial level.',
      'Organizational Trust: 93% of employees are proud to work at HUL, with an overall engagement score of 82%.'
    ]
  },
  {
    id: 'ddf',
    title: 'Doom Dooma Factory (DDF)',
    category: 'Technology',
    icon: Factory,
    color: 'bg-emerald-600',
    intro: 'Located in Assam, DDF is recognized by the World Economic Forum as an "End-to-End Digital Lighthouse" for its mastery of Fourth Industrial Revolution (4IR) technologies.',
    execution: [
      'Integration of AI, IoT, and Digital Twin technology across its end-to-end supply chain.',
      '"Lights-off" (dark) manufacturing lines that operate with minimal manual intervention to maximize safety and efficiency.'
    ],
    results: [
      'Agility: Achieved 85% faster changeover times between product lines.',
      'Sustainability: Reduced virgin plastic usage by 21% and packaging trial times by 84%.',
      'Productivity: AI-driven task allocation boosted labor productivity by 400%.'
    ]
  },
  {
    id: 'stratos',
    title: 'Stratos Technology',
    category: 'Technology',
    icon: Zap,
    color: 'bg-emerald-500',
    intro: 'Stratos is a first-of-its-kind, patented revolutionary technology developed by HUL’s R&D team for its skin cleansing (soap) portfolio.',
    execution: [
      '"Smart structuring" to reformulate soap with plant-derived polysaccharides and vitamin blends.',
      'Replaces non-functional Total Fatty Matter (TFM) with skin-health actives that provide better consumer benefits.'
    ],
    results: [
      'Material Efficiency: Reduces TFM by up to 25%, significantly lowering the company\'s palm oil footprint.',
      'Environmental Impact: Drastically reduces GHG emissions across the value chain.',
      'Speed to Market: Combined with digital pilot plants, it helped reduce factory trials by 50%, enabling the technology to scale in record time.'
    ]
  },
  {
    id: 'shakti',
    title: 'Project Shakti',
    category: 'Value Chain',
    icon: Users,
    color: 'bg-amber-600',
    intro: 'Project Shakti is executed as a specialized rural distribution model that transforms social empowerment into a sustainable business engine. HUL combines skills development (training) with market access (distribution integration), allowing rural women to build sustainable livelihoods.',
    execution: [
      'Comprehensive Entrepreneurship Training: Covers business basics, salesmanship, and digital literacy (Shikhar e-B2B app).',
      'Integration into Distribution Network: Shakti Ammas act as micro-distributors, reaching households in remote areas.',
      'Community Leadership: Transitioning from passive consumers to active economic agents and "change agents" within their society.'
    ],
    results: [
      'Network: Over 200,000 women entrepreneurs active in the Shakti network.',
      'Lives Impacted: Reached approximately 1,388,989 beneficiaries (FY 2024-25 data).',
      'Vulnerability Focus: About 40% of beneficiaries are from vulnerable and marginalized groups.'
    ]
  },
  {
    id: 'circular',
    title: 'Project Circular Bharat',
    category: 'Value Chain',
    icon: Recycle,
    color: 'bg-amber-500',
    intro: 'Project Circular Bharat is an end-to-end model designed to accelerate the circularity of waste in India. It serves as HUL’s blueprint for establishing viable, scalable, and socially inclusive circularity models.',
    execution: [
      'Behavior Change: Driving "Responsible Citizenship" to inspire waste segregation at the source.',
      'Social Inclusion: Integrating informal waste workers (Safai Mitras/Safai Saathis) into the formal value chain.',
      'Infrastructure: Setting up integrated Material Recovery Facilities (MRFs) for waste collection and processing (network of 20+ partners).'
    ],
    results: [
      'Citizen Reach: Over 545,000 citizens inspired to segregate waste at the source.',
      'Social Impact: More than 20,000 Safai Mitras gained access to government social protection schemes.',
      'Compliance: HUL is 100% EPR (Extended Producer Responsibility) compliant, processing more plastic than it sells annually.'
    ]
  }
];

const StrategyTreeNode: React.FC<{ node: StrategyNode; onClick: () => void }> = ({ node, onClick }) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="w-full group relative flex flex-col p-5 bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-lg hover:border-corporate-blue/20 transition-all text-left"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-8 h-8 ${node.color} text-white rounded-lg flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform`}>
          <node.icon size={16} />
        </div>
        <h4 className="text-sm font-bold text-corporate-blue group-hover:text-sustainability-green transition-colors leading-tight">
          {node.title}
        </h4>
      </div>
      <p className="text-[11px] text-stone-500 line-clamp-2 mb-3 leading-relaxed">
        {node.intro}
      </p>
      <div className="mt-auto flex items-center gap-1.5 text-[10px] font-bold text-corporate-blue uppercase tracking-widest">
        View Details
        <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.button>
  );
};

export default function ESGBenchmarkSection() {
  const [selectedNode, setSelectedNode] = useState<StrategyNode | null>(null);

  return (
    <div className="w-full">
      {/* Section 2.0:Diagnosing ESG Systemse */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-corporate-blue mb-8 leading-tight text-center">
            Section 2.0: <br />
            Diagnosing ESG Systems — <br />
            <span className="text-2xl md:text-5xl">From Corporate Excellence to Scope 3 Constraint</span>
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-6">
              <p className="text-base md:text-lg text-stone-500 leading-relaxed">
                This section examines the ESG operational architecture of Hindustan Unilever Limited (HUL), one of the most advanced ESG-integrated corporations in emerging markets.
              </p>
              <p className="text-base md:text-lg text-stone-500 leading-relaxed">
                Its objective is to identify <span className="text-corporate-blue font-semibold">transferable sustainability mechanisms</span> that can inform Malaysia’s ESG transformation pathway.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-stone-200 shadow-sm">
              <h3 className="text-lg font-bold text-corporate-blue mb-6 flex items-center gap-2">
                <Info size={20} className="text-blue-500" />
                Three Core Dimensions
              </h3>
              <div className="space-y-4">
                {[
                  { title: 'Governance Architecture', desc: 'Structural integrity models.' },
                  { title: 'Technology-enabled', desc: '4IR integration & R&D.' },
                  { title: 'Inclusive Value Chain', desc: 'Social empowerment.' }
                ].map((dim, i) => (
                  <div key={i} className="flex items-start gap-4 p-3 md:p-4 rounded-xl bg-stone-50 border border-stone-100">
                    <div className="w-7 h-7 bg-corporate-blue text-white rounded-lg flex items-center justify-center font-bold shrink-0 text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-corporate-blue text-sm md:text-base">{dim.title}</h4>
                      <p className="text-xs md:text-sm text-stone-500">{dim.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2.1 HUL ESG Operating Architecture */}
      <section className="bg-stone-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h1 className="text-3xl md:text-5xl font-bold text-corporate-blue mb-6">
              Section 2.1: <br className="md:hidden" /> HUL ESG System Structure
            </h1>
            <p className="text-base md:text-xl text-stone-600 max-w-4xl mx-auto leading-relaxed px-4">
              <span className="md:hidden text-corporate-blue font-semibold">Tap on the strategy cards</span> below to explore the HUL integrated ESG system.
              <span className="hidden md:inline">The diagram below illustrates HUL’s ESG practices as an integrated system. Select nodes to reveal insights.</span>
            </p>
          </div>

          {/* Tree Diagram Implementation */}
          <div className="hidden md:block overflow-x-auto pb-12">
            <div className="min-w-[1000px] relative flex flex-col items-center">
            {/* Root Node */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 px-16 py-8 bg-amber-500 text-white rounded-2xl shadow-xl font-bold text-2xl border-4 border-white"
            >
              HUL ESG System
            </motion.div>

            {/* Vertical Line from Root */}
            <div className="w-1 h-16 bg-stone-300" />

            {/* Horizontal Connector for Layers */}
            <div className="relative w-full flex justify-between">
              <div className="absolute top-0 left-[16.6%] right-[16.6%] h-1 bg-stone-300" />
              
              {/* Layer 1: Corporate Strategy */}
              <div className="flex-1 flex flex-col items-center">
                <div className="w-1 h-12 bg-stone-300" />
                <div className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-base mb-10 shadow-md">
                  Corporate Strategy Layer
                </div>
                
                {/* Nodes under Corporate Strategy */}
                <div className="space-y-8 w-full px-6">
                  {strategyNodes.filter(n => n.category === 'Governance').map(node => (
                    <StrategyTreeNode key={node.id} node={node} onClick={() => setSelectedNode(node)} />
                  ))}
                </div>
              </div>

              {/* Layer 2: Technology */}
              <div className="flex-1 flex flex-col items-center">
                <div className="w-1 h-12 bg-stone-300" />
                <div className="px-8 py-4 bg-sustainability-green text-white rounded-xl font-bold text-base mb-10 shadow-md">
                  Technology Layer
                </div>
                
                {/* Nodes under Technology */}
                <div className="space-y-8 w-full px-6">
                  {strategyNodes.filter(n => n.category === 'Technology').map(node => (
                    <StrategyTreeNode key={node.id} node={node} onClick={() => setSelectedNode(node)} />
                  ))}
                </div>
              </div>

              {/* Layer 3: Value Chain */}
              <div className="flex-1 flex flex-col items-center">
                <div className="w-1 h-12 bg-stone-300" />
                <div className="px-8 py-4 bg-amber-600 text-white rounded-xl font-bold text-base mb-10 shadow-md">
                  Inclusive Value Chain
                </div>
                
                {/* Nodes under Value Chain */}
                <div className="space-y-8 w-full px-6">
                  {strategyNodes.filter(n => n.category === 'Value Chain').map(node => (
                    <StrategyTreeNode key={node.id} node={node} onClick={() => setSelectedNode(node)} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
          
          {/* Mobile view: Stack Layout */}
          <div className="md:hidden space-y-12 relative">
             {/* Decorative centerline */}
             <div className="absolute left-1/2 top-0 bottom-0 w-px bg-stone-200 -z-0" />
             
             {[
               { title: 'Corporate Strategy', color: 'bg-blue-600', cat: 'Governance' },
               { title: 'Technology Layer', color: 'bg-emerald-600', cat: 'Technology' },
               { title: 'Inclusive Value Chain', color: 'bg-amber-600', cat: 'Value Chain' }
             ].map((layer, idx) => (
               <div key={idx} className="relative z-10 flex flex-col items-center">
                 <div className={`px-6 py-2 ${layer.color} text-white rounded-full text-xs font-bold shadow-md mb-6`}>
                   {layer.title}
                 </div>
                 <div className="grid grid-cols-1 gap-4 w-full">
                    {strategyNodes.filter(n => n.category === layer.cat).map(node => (
                      <StrategyTreeNode key={node.id} node={node} onClick={() => setSelectedNode(node)} />
                    ))}
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 2.2 From Emission Reality to System-Level Constraint */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-corporate-blue mb-8 leading-tight text-center">
            Section 2.2: <br />
            From Emission Reality to System-Level Constraint
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <div className="space-y-6">
              <p className="text-lg text-stone-500 leading-relaxed">
                To evaluate the real-world effectiveness of HUL’s ESG system, it is necessary to move beyond strategy descriptions and examine how emissions behave across scopes—and where structural constraints limit progress.
              </p>
              <p className="text-lg text-stone-500 leading-relaxed">
                Using reported data, this section applies a focused set of models to identify:
              </p>
              
              <ul className="mt-8 space-y-4">
                {[
                  'where emissions are being controlled',
                  'where systemic challenges persist',
                  'how ESG systems translate into real-world impact'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-600 font-medium">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-stone-200 shadow-sm">
             <h3 className="text-lg font-bold text-corporate-blue mb-8 text-center flex items-center justify-center gap-2">
               <Zap size={20} className="text-amber-500" />
               Analysis Logic
             </h3>
             <p className="text-stone-600 leading-relaxed mb-8 text-center">
               The analysis progresses from <span className="font-bold text-corporate-blue">emission reality → structural constraint → adoption-driven impact</span>, forming a sequential view of ESG transformation dynamics.
             </p>

              {/* Step bar: Horizontal on PC, vertical on mobile */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {["What's going on", "What's the problem", "What's the key factor"].map((step, i) => (
                  <React.Fragment key={i}>
                    <div className="w-full md:flex-1 text-center group">
                      <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-2">Step 0{i+1}</div>
                      <div className="py-4 px-4 bg-stone-50 border border-stone-100 rounded-2xl text-sm font-bold text-corporate-blue shadow-sm min-h-[80px] flex items-center justify-center transition-all group-hover:bg-white group-hover:border-blue-200">
                        {step}
                      </div>
                    </div>
                    {i < 2 && (
                      <>
                        <ArrowRight size={16} className="hidden md:block text-stone-300 mt-6" />
                        <div className="md:hidden h-6 w-px bg-stone-200" /> {/* 手机端的垂直连接线 */}
                      </>
                    )}
                  </React.Fragment>
                ))}
             </div>
           </div>
        </div>
      </section>

      {/* System Diagnosis Dashboard Intro */}
      <section className="max-w-7xl mx-auto px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-corporate-blue mb-8 leading-tight">
            Diagnosis Process
          </h1>
          <div className="text-xl text-stone-600 leading-relaxed space-y-4">
            <p>This section applies two models in sequence:</p>
            <ul className="list-none space-y-3">
              <li>• 2.2A — Emission Reality to identify where structural constraints emerge</li>
              <li>• 2.2B — Adoption Impact System to isolate the key driver of change</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* System Diagnosis Dashboard */}
      <SystemDiagnosisDashboard />

      {/* 2.3) Section 2 Summary */}
      <section className="w-full bg-stone-950 text-stone-300 py-20 border-t border-stone-800 mt-16 -mx-8 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-16 leading-tight text-center">
              Section 2.3: <br />
              From Benchmark to Localization
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <p className="text-lg text-stone-400 leading-relaxed">
                  The analysis of Hindustan Unilever Limited (HUL) demonstrates that ESG excellence is both achievable and scalable when embedded into core business strategy. Through the integration of governance frameworks, digital infrastructure, and inclusive value chain initiatives, HUL has transformed sustainability from a compliance function into a driver of operational efficiency and long-term competitiveness.
                </p>
                <p className="text-lg text-stone-400 leading-relaxed">
                  More importantly, the strength of HUL’s ESG system lies not only in its performance outcomes, but in its ability to structure and coordinate complex value chain interactions. By leveraging digital tools such as AI-enabled diagnostics and simulation platforms, HUL has established a system where sustainability actions can be measured, optimized, and scaled across multiple operational layers.
                </p>
                <blockquote className="border-l-4 border-blue-500 pl-6 py-4 bg-stone-900/40 italic text-lg text-stone-200 leading-relaxed">
                  This shifts the relevance of the benchmark from performance to transferability.
                </blockquote>
              </div>

              <div className="space-y-8">
                <p className="text-lg text-stone-400 leading-relaxed">
                  For Malaysia, this implies that ESG transformation cannot rely solely on firm-level execution, but must be supported by localized systems capable of mobilizing participation across suppliers, communities, and institutional actors.
                </p>
                <blockquote className="border-l-4 border-blue-500 pl-6 py-4 bg-stone-900/40 italic text-lg text-stone-200 leading-relaxed">
                  The value of the HUL benchmark therefore lies in its ability to inform system-level design.
                </blockquote>
                <p className="text-lg text-stone-400 leading-relaxed">
                  The next section moves from analysis to application, translating these mechanisms into a Malaysia-specific ESG transformation framework.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedNode && (
          <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNode(null)}
              className="absolute inset-0 bg-corporate-blue/40 backdrop-blur-md"
            />
            <motion.div
              initial={{ y: "100%" }} 
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              className="relative w-full md:max-w-4xl h-[90vh] md:h-auto md:max-h-[90vh] bg-white rounded-t-[2rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Modal Header */}
              <div className={`p-8 ${selectedNode.color} text-white flex items-center justify-between`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <selectedNode.icon size={28} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest opacity-80">
                      {selectedNode.category}
                    </span>
                    <h2 className="text-2xl font-bold">{selectedNode.title}</h2>
                  </div>
                </div>
                {/* Exit button removed as per request */}
              </div>

              {/* Modal Content */}
              <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar">
                <div className="space-y-10">
                  <section>
                    <h3 className="text-lg font-bold text-corporate-blue mb-4 flex items-center gap-2">
                      <Info size={20} className="text-blue-500" />
                      Introduction
                    </h3>
                    <p className="text-stone-600 leading-relaxed text-lg">
                      {selectedNode.intro}
                    </p>
                  </section>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <section>
                      <h3 className="text-lg font-bold text-corporate-blue mb-6 flex items-center gap-2">
                        <Zap size={20} className="text-amber-500" />
                        Execution Strategy
                      </h3>
                      <div className="space-y-4">
                        {selectedNode.execution.map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="mt-1.5 shrink-0">
                              <ArrowRight size={14} className="text-amber-500" />
                            </div>
                            <p className="text-stone-600 text-sm leading-relaxed">{item}</p>
                          </div>
                        ))}
                      </div>
                    </section>

                    <section>
                      <h3 className="text-lg font-bold text-corporate-blue mb-6 flex items-center gap-2">
                        <CheckCircle2 size={20} className="text-emerald-500" />
                        Results & Effectiveness
                      </h3>
                      <div className="space-y-4">
                        {selectedNode.results.map((item, i) => (
                          <div key={i} className="flex items-start gap-3 p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                            <div className="mt-1 shrink-0">
                              <CheckCircle2 size={16} className="text-emerald-600" />
                            </div>
                            <p className="text-emerald-900 text-sm font-medium leading-relaxed">{item}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-stone-50 border-t border-stone-100 flex justify-end">
                <button 
                  onClick={() => setSelectedNode(null)}
                  className="px-8 py-2.5 bg-corporate-blue text-white rounded-full font-bold hover:bg-corporate-blue/90 transition-colors"
                >
                  Close Details
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
