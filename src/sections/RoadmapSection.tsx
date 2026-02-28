import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Leaf, 
  Users, 
  Shield, 
  CheckCircle2, 
  Search, 
  ArrowRight, 
  Droplets, 
  Recycle, 
  GraduationCap, 
  Network, 
  TrendingUp, 
  Sprout,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Info
} from 'lucide-react';

// --- Types ---

interface AuditNote {
  constructiveness: string;
  risksAndGaps: string;
  disclaimer?: string;
}

interface RoadmapItem {
  id: string;
  title: string;
  icon: any;
  idea: string;
  operation: string;
  auditNote: AuditNote;
  type: 'standard' | 'shakti' | 'rap';
}

// --- Data ---

const roadmapData: Record<'E' | 'S' | 'G', RoadmapItem[]> = {
  E: [
    {
      id: 'water',
      title: 'Smart Water Management: From Consumption to Circularity',
      icon: Droplets,
      idea: "Drawing on HUL’s 'Water Neutral' and Zero Liquid Discharge (ZLD) technologies, I propose a Smart Rainwater Harvesting System for Malaysian industrial zones.",
      operation: "Utilizing IoT sensors to monitor water quality in real-time, the system redirects harvested rainwater for industrial cooling and non-potable use, significantly reducing the strain on state water supplies and lowering operational costs for enterprises.",
      auditNote: {
        constructiveness: "This represents a Leapfrog Transition, transforming industrial zones from 'Resource Consumers' into 'Circular Recyclers' to mitigate climate-driven water scarcity.",
        risksAndGaps: "Without significant carbon taxes or water subsidies, companies lack the financial incentive for ZLD upgrades. I suggest introducing 'Green Finance' instruments under the CSP framework to offset initial capital expenditure."
      },
      type: 'standard'
    },
    {
      id: 'plastic',
      title: 'Digital Plastic Recovery: AI-Driven Traceability',
      icon: Recycle,
      idea: "I propose a Blockchain-based Digital Traceability System that integrates HUL’s AI-sorting technology with Malaysia’s Extended Producer Responsibility (EPR) policy.",
      operation: "By deploying AI sorting at local recovery centers, we ensure every gram of plastic waste is identified, categorized, and tracked from collection to the recycling plant on an immutable blockchain ledger.",
      auditNote: {
        constructiveness: "This system turns 'Physical Recycling' into 'Digital Compliance Evidence,' providing companies with audit-grade data to meet upcoming EPR mandates.",
        risksAndGaps: "The success of the blockchain depends on the adoption of AI hardware; smaller vendors may struggle with the initial CAPEX, creating potential data silos.",
        disclaimer: "Quantifiable Proof Gap: Due to the current lack of baseline data on plastic flow in Malaysia, I cannot precisely calculate the percentage increase in 'Food-grade Recycled Plastic' output resulting from AI sorting."
      },
      type: 'standard'
    }
  ],
  S: [
    {
      id: 'tvet',
      title: 'Digital TVET Training: Developing "Industry 4.0 Architects"',
      icon: GraduationCap,
      idea: "I propose a virtual simulation training system based on HUL’s Digital Discovery Factory (DDF). Malaysian technicians can master high-end digital management in local labs via digital twins and simulation, bypassing the need for overseas travel.",
      operation: "Funding & Execution: Apply to HRD Corp for listing; establish a 'Malaysia-India Digital Manufacturing Scholarship'; use corporate sponsorship from large manufacturers in exchange for priority hiring rights.",
      auditNote: {
        constructiveness: "This pivots from training 'Operators' to developing 'Industry 4.0 Architects,' fast-tracking Malaysia’s manufacturing talent supply chain.",
        risksAndGaps: "The digital models from India’s DDF require 'Local Calibration' to ensure they align with the specific hardware used in Malaysian factories."
      },
      type: 'standard'
    },
    {
      id: 'shakti',
      title: 'Shakti 2.0: Community Green Service Network',
      icon: Network,
      idea: "In Malaysia’s highly urbanized market, retail giants like 99 Speedmart dominate distribution. Therefore, HUL’s original retail-based Shakti model has no room to grow. I have redesigned this into a 'Circular Service' model to solve the 'Last-Mile Recycling' gap.",
      operation: "Front-end: B40 Women (Education & Sorting). Middle-end: Lorry Botol (Digital Logistics). Back-end: Supermarkets/Recyclers (Return Logistics). Digital Core: Mobile 'Green Audit Platform'.",
      auditNote: {
        constructiveness: "This is a Social Governance Upgrade, formalizing the informal 'Lorry Botol' sector and empowering B40 women with digital identities as 'ESG Ambassadors.'",
        risksAndGaps: "These remain logical deductions rather than empirical certainties.",
        disclaimer: "Baseline Data Gap: Due to a lack of primary survey data on the B40 community’s daily constraints and current carbon footprints of informal collectors, I cannot yet prove the exact percentage of emission reduction or the quantifiable improvement in quality of life."
      },
      type: 'shakti'
    }
  ],
  G: [
    {
      id: 'lcsf',
      title: 'LC-SF Supply Chain Optimization',
      icon: TrendingUp,
      idea: "I propose a 'Green Exchange Rate Premium' mechanism using the Local Currency Settlement (LC-SF) framework.",
      operation: "Agricultural products (e.g., Palm Oil) meeting high ESG standards (RSPO/MSPO) are granted more favorable exchange rates. This uses financial tools to drive environmental compliance despite yield fluctuations.",
      auditNote: {
        constructiveness: "Provides a 'De-dollarized Green Dividend' that incentivizes high ESG standards via direct financial benefits.",
        risksAndGaps: "It may not fully offset raw material price spikes if regional production continues to decline."
      },
      type: 'standard'
    },
    {
      id: 'rap',
      title: 'Digital Regenerative Agriculture Platform (RAP)',
      icon: Sprout,
      idea: "I propose a four-step ecosystem designed to solve the 'Smallholder ESG Dilemma'—where farmers want to comply with MSPO but lack the technology and incentives.",
      operation: "A comprehensive platform integrating IoT soil sensors, AI agronomists via WhatsApp, LC-SF incentive linkages, and automated MSPO auditing.",
      auditNote: {
        constructiveness: "The 'MSPO Automated Audit' is the cornerstone, turning a high-barrier certification process into a 'By-product' of daily farming.",
        risksAndGaps: "Initial hardware deployment costs for IoT sensors remain a barrier for smallholders without large-scale government subsidies. Early-stage AI models may also face accuracy risks."
      },
      type: 'rap'
    }
  ]
};

// --- Sub-Components ---

const ShaktiSlider = () => {
  const [current, setCurrent] = useState(0);
  const scenarios = [
    {
      actor: "B40 Women",
      action: "Act as 'Digital Resource Managers' using Bluetooth scales to weigh waste.",
      benefit: "Residents receive 'Green Credits' (Unilever discounts) funded by LC-SF savings."
    },
    {
      actor: "Lorry Botol",
      action: "App sends 'Pickup Order' when hub reaches 50kg threshold.",
      benefit: "Eliminates aimless 'street-sweeping', reducing fuel costs and increasing purity price."
    },
    {
      actor: "Corporate Loop",
      action: "Carbon reduction data recorded for ESG compliance.",
      benefit: "LC-SF savings injected into 'Shakti 2.0 Incentive Fund' for commissions and bonuses."
    }
  ];

  return (
    <div className="relative bg-stone-50 rounded-xl p-6 border border-stone-200 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h5 className="font-bold text-corporate-blue text-sm uppercase tracking-wider">Operational Scenarios</h5>
        <div className="flex gap-2">
          <button onClick={() => setCurrent(prev => Math.max(0, prev - 1))} className="p-1 hover:bg-stone-200 rounded"><ChevronLeft size={18} /></button>
          <button onClick={() => setCurrent(prev => Math.min(scenarios.length - 1, prev + 1))} className="p-1 hover:bg-stone-200 rounded"><ChevronRight size={18} /></button>
        </div>
      </div>
      <div className="min-h-[140px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-3"
          >
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-corporate-blue text-white text-[10px] font-bold rounded">SCENARIO {current + 1}</span>
              <span className="font-bold text-stone-800">{scenarios[current].actor}</span>
            </div>
            <p className="text-sm text-stone-600">
              <span className="font-semibold text-corporate-blue">Action:</span> {scenarios[current].action}
            </p>
            <p className="text-sm text-stone-600 group/benefit">
              <span className="font-semibold text-sustainability-green">Benefit:</span>{' '}
              {current === 0 ? (
                <>
                  Residents receive{' '}
                  <span className="font-bold text-sustainability-green underline decoration-dotted underline-offset-2">
                    'Green Credits'
                  </span>
                  —discounts on Unilever products funded by the savings from{' '}
                  <span className="bg-amber-100 px-1 rounded cursor-help transition-colors hover:bg-amber-200">
                    Local Currency Settlement (LC-SF)
                  </span>
                  .
                </>
              ) : scenarios[current].benefit}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex justify-center gap-1.5 mt-4">
        {scenarios.map((_, i) => (
          <div key={i} className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? 'bg-corporate-blue' : 'bg-stone-300'}`} />
        ))}
      </div>
    </div>
  );
};

const RAPTimeline = () => {
  const steps = [
    { title: "Data Assetization", desc: "IoT sensors monitor soil health; Satellite sensing identifies yield gaps." },
    { title: "Precision Instructions", desc: "AI models push instructions via WhatsApp (e.g., 'Rain expected; fertilize now')." },
    { title: "LC-SF Incentive Linkage", desc: "Farmers receive subsidies derived from LC-SF exchange rate savings." },
    { title: "MSPO Automated Audit", desc: "One-click data export for certification, eliminating manual record-keeping." }
  ];

  return (
    <div className="space-y-4 py-4">
      {steps.map((step, i) => (
        <div key={i} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 rounded-full bg-sustainability-green text-white text-[10px] flex items-center justify-center font-bold shrink-0">
              {i + 1}
            </div>
            {i < steps.length - 1 && <div className="w-px h-full bg-stone-200 my-1" />}
          </div>
          <div className="pb-4">
            <h6 className="font-bold text-stone-800 text-sm">{step.title}</h6>
            <p className="text-xs text-stone-500 leading-relaxed">{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const AuditNote = ({ note, isOpen, onClose }: { note: AuditNote; isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div 
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
            onClick={e => e.stopPropagation()}
          >
            {/* Left Side: The Blueprint Placeholder */}
            <div className="md:w-1/2 p-8 bg-stone-50 border-r border-stone-100">
              <div className="flex items-center gap-2 mb-6 text-stone-400">
                <Info size={16} />
                <span className="text-[10px] font-bold uppercase tracking-widest">The Blueprint</span>
              </div>
              <div className="h-64 rounded-2xl border-2 border-dashed border-stone-200 flex items-center justify-center text-stone-300 italic text-sm text-center px-6">
                Visual process flow diagram representing the localized HUL framework.
              </div>
            </div>

            {/* Right Side: The Audit Note */}
            <div className="md:w-1/2 p-8 relative">
              <div className="absolute top-6 right-6 opacity-10 rotate-12">
                <div className="border-4 border-amber-500 text-amber-500 px-4 py-1 font-black text-2xl rounded-lg uppercase">Audit</div>
              </div>
              
              <h4 className="font-serif text-2xl text-slate-900 mb-6">I - Analyst's Insight</h4>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#10B981]">
                    <CheckCircle2 size={18} />
                    <span className="font-bold text-xs uppercase tracking-wider">Constructiveness</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed italic">"{note.constructiveness}"</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#F59E0B]">
                    <Search size={18} />
                    <span className="font-bold text-xs uppercase tracking-wider">Risks & Gaps</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed italic">"{note.risksAndGaps}"</p>
                </div>

                {note.disclaimer && (
                  <div className="p-4 bg-amber-50 rounded-xl border border-amber-100">
                    <div className="flex items-center gap-2 text-amber-700 mb-1">
                      <AlertCircle size={14} />
                      <span className="font-bold text-[10px] uppercase tracking-wider">Audit Disclaimer</span>
                    </div>
                    <p className="text-[11px] text-amber-800 leading-tight font-medium">{note.disclaimer}</p>
                  </div>
                )}
              </div>

              <button 
                onClick={onClose}
                className="mt-8 w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors"
              >
                Close Audit Note
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- Main Component ---

export default function RoadmapSection() {
  const [activeTab, setActiveTab] = useState<'E' | 'S' | 'G'>('E');
  const [selectedItem, setSelectedItem] = useState<RoadmapItem | null>(null);

  const tabs = [
    { id: 'E', label: 'Environment', icon: Leaf, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { id: 'S', label: 'Social', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
    { id: 'G', label: 'Governance', icon: Shield, color: 'text-amber-600', bg: 'bg-amber-50' },
  ];

  return (
    <div className="max-w-6xl mx-auto w-full px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-6">Section 3: Malaysia ESG Roadmap</h2>
        <p className="max-w-2xl mx-auto text-slate-500 leading-relaxed">
          In this section, I translate the <span className="text-corporate-blue font-bold">"India Experience"</span> into <span className="text-sustainability-green font-bold">"Malaysian Solutions."</span> My objective is to demonstrate how HUL’s proven frameworks can be localized within the CSP to drive real ESG impact.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center gap-4 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-bold transition-all ${
              activeTab === tab.id 
                ? `${tab.bg} ${tab.color} shadow-sm ring-1 ring-inset ring-current/20` 
                : 'text-slate-400 hover:text-slate-600 hover:bg-stone-100'
            }`}
          >
            <tab.icon size={20} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="grid grid-cols-1 gap-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            {roadmapData[activeTab].map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Left: Info */}
                    <div className="flex-1 space-y-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-2xl ${tabs.find(t => t.id === activeTab)?.bg} ${tabs.find(t => t.id === activeTab)?.color}`}>
                          <item.icon size={28} />
                        </div>
                        <h3 className="font-serif text-2xl text-slate-900">{item.title}</h3>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="space-y-1">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">The Idea</span>
                          <p className="text-slate-600 leading-relaxed">{item.idea}</p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Operation</span>
                          <p className="text-slate-600 leading-relaxed">{item.operation}</p>
                        </div>
                      </div>

                      <button 
                        onClick={() => setSelectedItem(item)}
                        className="flex items-center gap-2 text-sm font-bold text-slate-900 group"
                      >
                        View Analyst’s Risk Assessment
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>

                    {/* Right: Specialized Layouts */}
                    <div className="md:w-1/3 shrink-0">
                      {item.type === 'shakti' && <ShaktiSlider />}
                      {item.type === 'rap' && <RAPTimeline />}
                      {item.type === 'standard' && (
                        <div className="h-full min-h-[200px] bg-stone-50 rounded-2xl border border-stone-100 flex items-center justify-center p-6">
                          <img 
                            src={`https://images.unsplash.com/photo-1518173946687-a4c8a9b746f5?auto=format&fit=crop&q=80&w=400`} 
                            alt={item.title}
                            className="w-full h-full object-cover rounded-xl opacity-80 grayscale hover:grayscale-0 transition-all"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Audit Note Modal */}
      <AuditNote 
        note={selectedItem?.auditNote as AuditNote} 
        isOpen={!!selectedItem} 
        onClose={() => setSelectedItem(null)} 
      />
    </div>
  );
}
