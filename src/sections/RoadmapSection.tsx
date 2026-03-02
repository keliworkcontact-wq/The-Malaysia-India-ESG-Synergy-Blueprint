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
  constructiveness: string | string[];
  risksAndGaps: string | string[];
  recommendation?: string;
  disclaimer?: string;
  stakeholderValue?: string[];
}

interface RoadmapItem {
  id: string;
  title: string;
  icon: any;
  idea: string;
  operation: string;
  auditNote: AuditNote;
  type: 'standard' | 'shakti' | 'rap';
  fullBlueprint: {
    section: string;
    content: string | string[];
  }[];
}

// --- Data ---

const roadmapData: Record<'E' | 'S' | 'G', RoadmapItem[]> = {
  E: [
    {
      id: 'water',
      title: 'Smart Water Management',
      icon: Droplets,
      idea: "Inspired by HUL’s water-neutral and ZLD practices, this proposal introduces smart rainwater harvesting systems across industrial zones.",
      operation: "Utilizing IoT sensors to monitor water quality in real-time, the system redirects harvested rainwater for industrial cooling and non-potable use.",
      auditNote: {
        constructiveness: ["Enables a structural shift from resource consumption to circular resource management."],
        risksAndGaps: ["Long CAPEX payback without policy incentives."],
        recommendation: "Deploy green financing tools under CSP framework."
      },
      type: 'standard',
      fullBlueprint: [
        { section: "The Idea", content: "Inspired by HUL’s water-neutral and ZLD practices, this proposal introduces smart rainwater harvesting systems across industrial zones." },
        { section: "Operation", content: "Utilizing IoT sensors to monitor water quality in real-time, the system redirects harvested rainwater for industrial cooling and non-potable use." }
      ]
    },
    {
      id: 'plastic',
      title: 'Digital Plastic Recycling System',
      icon: Recycle,
      idea: "A blockchain traceability platform integrated with AI sorting to support Malaysia’s EPR rollout.",
      operation: "AI sorting at local recovery centers ensures every gram of plastic waste is identified, categorized, and tracked on an immutable blockchain ledger.",
      auditNote: {
        constructiveness: [
          "Turns recycling into audit-grade compliance assets",
          "Improves material purity and resale value",
          "Enhances regulatory transparency"
        ],
        risksAndGaps: [
          "Limited adoption among smaller recyclers",
          "Dependence on EPR enforcement strength"
        ],
        disclaimer: "Lack of baseline waste-flow data: Due to the current lack of baseline data on plastic flow in Malaysia, I cannot precisely calculate the percentage increase in 'Food-grade Recycled Plastic' output."
      },
      type: 'standard',
      fullBlueprint: [
        { section: "The Idea", content: "A blockchain traceability platform integrated with AI sorting to support Malaysia’s EPR rollout." },
        { section: "Constructiveness", content: "Operation: By deploying AI sorting at local recovery centers, we ensure every gram of plastic waste is identified, categorized, and tracked from collection to the recycling plant on an immutable blockchain ledger." }
      ]
    }
  ],
  S: [
    {
      id: 'tvet',
      title: 'Digital TVET Training System',
      icon: GraduationCap,
      idea: "Using DDF simulation architecture, Malaysian technicians can train locally through immersive digital environments to become Industry 4.0 architects rather than operators.",
      operation: "Funding Pathways: Recommend MyMahir apply to HRD Corp; Establish Malaysia-India Digital Manufacturing Scholarship; Corporate sponsorship for equipment in exchange for priority hiring rights.",
      auditNote: {
        constructiveness: [
          "Long-term assetisation: Although the initial cost of building a virtual twin platform is high, digital assets do not wear out and are highly scalable. Once built, the marginal cost of training ten thousand learners will be far lower than setting up traditional physical labs.",
          "Feasibility of Ecological Financing: This strategy no longer relies solely on government grants. By combining HRD Corp support, transnational scholarships and corporate sponsorship, the costs are shared with the beneficiaries, which offers strong commercial sustainability.",
          "ESG Integration: The training process itself is digital and low-carbon, and the core curriculum includes how to achieve precise carbon reduction through Industry 4.0 technologies. This makes trained talent the company's future 'green transformation drivers'."
        ],
        risksAndGaps: [
          "Cost and calibration challenges: The initial costs for architecture setup and expert consultancy are a significant financial burden. Furthermore, if the Indian models are not fully compatible with Malaysian hardware, the cost of secondary development could exceed the budget.",
          "Risk of Simulation Distortion: If the virtual environment fails to synchronise with real production parameters promptly, those trained as 'architects' may struggle when facing physical production lines."
        ]
      },
      type: 'standard',
      fullBlueprint: [
        { section: "The Idea", content: "Using DDF simulation architecture, Malaysian technicians can train locally through immersive digital environments to become Industry 4.0 architects rather than operators." },
        { section: "Operation", content: [
          "1. Develop a high-precision digital base (digital twin architecture). Implementation actions: Invest dedicated funds and invite HUL DDF architects to collaborate with local system integrators in developing customised digital twin platforms for Malaysia's key industries, such as semiconductors and food processing. Technical details: Build virtual production line models and integrate real-time production data to allow trainees to access cutting-edge industrial standards in a virtual environment.",
          "2. Malaysia-India Expert 'Cloud Mentorship' (Remote Expert Mentorship). Implementation actions: Hire senior engineers from HUL India as 'digital mentors' to provide remote mentorship through simulation systems. Operational logic: Although expert consultation fees are expensive, cloud collaboration avoids the travel costs associated with large-scale personnel movements between Malaysia and India.",
          "3. Virtual Sandbox & Stress Testing: Implementation actions: Trainees simulate extreme situations in the virtual system, such as equipment wear warnings and production scheduling optimisation. Core value: The virtual system enables trainees to experiment without damaging expensive physical assets (CAPEX) and gain experience in handling complex industrial logic.",
          "4. Localisation & Train-the-Trainer Implementation actions: Adapting mature Indian models to Malaysian local factory hardware (e.g. different brands of PLC controllers). The long-term goal is to cultivate the first batch of local 'digital trainers' to ensure the training system can iterate independently."
        ]},
        { section: "Funding and Financing Strategy", content: [
          "To hedge against the high initial construction costs (CAPEX), I recommend the following three channels of ecological financing:",
          "1. Government Fund Support (HRD Corp): MyMahir should actively apply to have this project included in HRD Corp's approved training list. Funds can be recirculated from training levies paid by enterprises, thereby reducing the direct financial burden on participating companies.",
          "2. Bilateral scholarships: Based on the 11 Memoranda of Understanding (MoUs) signed between Malaysia and India, the governments of both countries are recommended to jointly establish the \"Malaysia-India Digital Manufacturing Scholarship\", specifically to subsidise high software licensing and Indian expert consultancy fees.",
          "3. Corporate Sponsorship & Talent Loop: Large manufacturing companies in Malaysia (such as semiconductor and FMCG giants) should be attracted to sponsor hardware equipment or digital model construction costs. In return, sponsoring companies will gain priority hiring rights for these 'Industry 4.0 architects', creating a virtuous cycle of funds and talent."
        ]}
      ]
    },
    {
      id: 'shakti',
      title: 'Shakti 2.0: Community Circular Service Network',
      icon: Network,
      idea: "Redesigned into a Circular Service framework targeting the last-mile recycling gap rather than retail distribution, as retail giants dominate the Malaysian market.",
      operation: "B40 women act as 'Digital Resource Managers' and 'ESG Ambassadors', managing community collection points and providing household diagnostic services.",
      auditNote: {
        constructiveness: [
          "Identity Transformation: Informal collectors become certified logistics partners; B40 women become digital resource managers.",
          "Internalized Incentive Mechanism via LC-SF."
        ],
        risksAndGaps: [
          "Baseline Data Gap: Lack of historical carbon footprint data limits quantification.",
          "Policy Overlap Risk: Potential conflicts with state initiatives like Negeri Sembilan’s KITARecycle."
        ]
      },
      type: 'shakti',
      fullBlueprint: [
        { section: "The Idea", content: "In Malaysia’s highly urbanized market, retail giants such as 99 Speedmart dominate distribution channels. As a result, HUL’s original retail-based Shakti model has no structural space to scale. To address this, the model is redesigned into a Circular Service framework targeting the last-mile recycling gap rather than retail distribution." },
        { section: "Context Premise", content: [
          "Before the operational workflow begins, the model assumes an active participation loop from residents as below, this premise establishes the physical entry point of materials into the Shakti ecosystem:",
          "Residents bring pre-sorted household waste — particularly high-value recyclables (e.g., aluminium cans) and low-value but highly polluting waste (e.g., multi-layer plastic packaging).",
          "Waste is delivered either to the B40 member’s home, or a designated community micro-collection point."
        ]},
        { section: "Scenario 1: Community Collection", content: [
          "Digital Weighing & Verification: B40 female members use Bluetooth-connected smart scales; Data automatically recorded in the Shakti App.",
          "Household ESG Diagnostic Service: The App analyzes historical disposal data. Members proactively provide 'Green Diagnostic Advice' (e.g., bulk purchasing instead of small packaging)."
        ]},
        { section: "Scenario 2: Logistics Integration", content: [
          "Inventory Trigger: When stock reaches predefined threshold (e.g., 50 kg), system automatically generates a pickup order for contracted collectors.",
          "Efficient Collection: App navigation directs collectors precisely to the micro-center; Pre-sorted waste allows immediate loading.",
          "Premium Settlement: Materials command higher resale prices; Incremental profit shared among platform, collectors, and B40 members."
        ]},
        { section: "Scenario 3: Financial Incentives", content: [
          "Carbon Reduction Data Generation: Emission reductions recorded for global ESG compliance.",
          "Dividend Injection via LC-SF Mechanism: Exchange-rate savings from Malaysia–India trade channeled into the Shakti 2.0 Incentive Fund.",
          "End-User Benefits: Residents earn recycling points redeemable for green products at double discounts."
        ]},
        { section: "Core Revenue Mechanisms", content: [
          "B40 Members: Management Commission (volume-based fee), Digital Consulting Fee (ESG diagnostics), Retail Margin (group buying).",
          "Independent Collectors: Efficiency Incentive (reduced search time), Compliance Subsidy (LC-SF supply-chain financing), Backend Premium (pre-sorted waste)."
        ]},
        { section: "Stakeholder Value", content: [
          "B40 Women: Digital skills, social recognition, flexible income",
          "Logistics Partners: Transition to formal green logistics careers",
          "Corporations: Access to traceable recycled inputs",
          "Government: Faster progress toward Net Zero"
        ]}
      ]
    }
  ],
  G: [
    {
      id: 'lcsf',
      title: 'LC-SF Supply Chain Optimization',
      icon: TrendingUp,
      idea: "Introduce a 'Green Exchange Rate Premium' mechanism under the Local Currency Settlement (LC-SF) framework.",
      operation: "Commodities meeting high ESG standards (RSPO/MSPO) receive preferential exchange rates, using financial incentives to drive compliance despite yield volatility.",
      auditNote: {
        constructiveness: ["De-Dollarization Green Dividend: Links local-currency settlement benefits directly with ESG certification (RSPO / MSPO)."],
        risksAndGaps: [
          "Production Volatility Risk: Declining agricultural output could offset exchange-rate savings.",
          "Raw material price increases may erode benefits."
        ]
      },
      type: 'standard',
      fullBlueprint: [
        { section: "The Idea", content: "Introduce a Green Exchange Rate Premium under the Local Currency Settlement framework." },
        { section: "Strategy", content: "Commodities meeting high ESG standards (RSPO/MSPO) receive preferential exchange rates, using financial incentives to drive compliance despite yield volatility." }
      ]
    },
    {
      id: 'rap',
      title: 'Digital Regenerative Agriculture Platform (RAP)',
      icon: Sprout,
      idea: "A four-step ecosystem addressing the Smallholder ESG Dilemma—where farmers seek compliance but lack technology and incentives.",
      operation: "Collaborate with MPOB to deploy IoT sensors and satellite sensing, delivering precision advisory via WhatsApp and linking to LC-SF incentives.",
      auditNote: {
        constructiveness: [
          "Compliance Automation: MSPO auditing becomes a by-product of daily operations.",
          "Appropriate Technology Deployment: WhatsApp-based instructions bypass learning barriers."
        ],
        risksAndGaps: [
          "Hardware Deployment Cost: IoT installation requires upfront capital.",
          "Prediction Accuracy Risk: AI models depend on localized soil data."
        ]
      },
      type: 'rap',
      fullBlueprint: [
        { section: "Step 1: Data Assetization", content: "Collaborate with MPOB; Deploy low-cost IoT sensors (soil pH, moisture, NPK); Use satellite remote sensing to detect vegetation coverage gaps." },
        { section: "Step 2: Precision Advisory System", content: "Build AI prediction models; Deliver recommendations via WhatsApp (e.g., fertilizer timing or harvest delay suggestions)." },
        { section: "Step 3: LC-SF Linked Incentives", content: "Integrate platform with local-currency settlement mechanism; Farmers meeting regenerative standards receive exchange-saving-based bonuses." },
        { section: "Step 4: Automated MSPO Compliance", content: "Platform generates digital production records; One-click export for certification; Significantly lowers compliance cost and barriers." }
      ]
    }
  ]
};

// --- Sub-Components ---

const ShaktiSlider = () => {
  const [current, setCurrent] = useState(0);
  const scenarios = [
    {
      actor: "B40 ESG Ambassadors",
      action: "Use Bluetooth scales for digital weighing & verification. Provide 'Green Diagnostic Advice' based on disposal data.",
      benefit: "Residents earn 'Green Credits' (double discounts on Indian-sourced green products) via LC-SF savings."
    },
    {
      actor: "Lorry Botol (Logistics)",
      action: "Inventory thresholds (50kg) trigger pickup orders. App navigation directs collectors to micro-centers.",
      benefit: "Efficient collection eliminates 'street-sweeping'. Premium settlement shared among platform, collectors, and B40."
    },
    {
      actor: "Financial Dividend",
      action: "Carbon reduction data recorded for ESG compliance. LC-SF exchange savings injected into Incentive Fund.",
      benefit: "B40 members receive management commissions; Collectors receive efficiency subsidies."
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
    { title: "Foundational Data Assetization", desc: "Collaborate with MPOB; Deploy IoT sensors (pH, NPK); Satellite sensing for vegetation gaps." },
    { title: "Precision Advisory System", desc: "AI prediction models deliver recommendations via WhatsApp (e.g., fertilizer timing)." },
    { title: "LC-SF Linked Incentives", desc: "Farmers meeting regenerative standards receive exchange-saving-based bonuses." },
    { title: "Automated MSPO Compliance", desc: "Platform generates digital records; One-click export significantly lowers barriers." }
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

const AuditNote = ({ item, isOpen, onClose }: { item: RoadmapItem | null; isOpen: boolean; onClose: () => void }) => {
  if (!item) return null;
  const note = item.auditNote;

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
            className="bg-white w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-[90vh]"
            onClick={e => e.stopPropagation()}
          >
            {/* Left Side: The Blueprint (Full Details) */}
            <div className="md:w-3/5 p-8 bg-stone-50 border-r border-stone-100 overflow-y-auto">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2 text-stone-400">
                  <Info size={16} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Full Strategic Blueprint</span>
                </div>
              </div>

              <div className="space-y-10">
                {item.fullBlueprint.map((bp, i) => (
                  <div key={i} className="space-y-3">
                    <h5 className="font-serif text-lg text-slate-900 border-b border-stone-200 pb-2">{bp.section}</h5>
                    {Array.isArray(bp.content) ? (
                      <div className="space-y-3">
                        {bp.content.map((line, j) => {
                          const isIntro = line.endsWith(":") || line.includes("________________________________________");
                          if (isIntro) {
                            return <p key={j} className="text-sm text-slate-600 leading-relaxed">{line}</p>;
                          }
                          return (
                            <div key={j} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                              <div className="w-1.5 h-1.5 rounded-full bg-corporate-blue mt-2 shrink-0" />
                              <span>{line}</span>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <p className="text-sm text-slate-600 leading-relaxed">{bp.content}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: The Audit Note */}
            <div className="md:w-2/5 p-8 relative overflow-y-auto">
              <div className="absolute top-6 right-6 opacity-10 rotate-12">
                <div className="border-4 border-amber-500 text-amber-500 px-4 py-1 font-black text-2xl rounded-lg uppercase">Audit</div>
              </div>
              
              <h4 className="font-serif text-2xl text-slate-900 mb-6 underline decoration-stone-200 underline-offset-8 decoration-1">Analyst's Insight</h4>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#10B981]">
                    <CheckCircle2 size={18} />
                    <span className="font-bold text-xs uppercase tracking-wider">Constructiveness</span>
                  </div>
                  <div className="space-y-2">
                    {(Array.isArray(note.constructiveness) ? note.constructiveness : [note.constructiveness]).map((point, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed italic">
                        <div className="w-1 h-1 rounded-full bg-[#10B981] mt-2 shrink-0" />
                        <span>"{point}"</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#F59E0B]">
                    <Search size={18} />
                    <span className="font-bold text-xs uppercase tracking-wider">Risks & Gaps</span>
                  </div>
                  <div className="space-y-2">
                    {(Array.isArray(note.risksAndGaps) ? note.risksAndGaps : [note.risksAndGaps]).map((point, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed italic">
                        <div className="w-1 h-1 rounded-full bg-[#F59E0B] mt-2 shrink-0" />
                        <span>"{point}"</span>
                      </div>
                    ))}
                  </div>
                </div>

                {note.recommendation && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-corporate-blue">
                      <ArrowRight size={18} />
                      <span className="font-bold text-xs uppercase tracking-wider">Recommendation</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed italic">"{note.recommendation}"</p>
                  </div>
                )}

                {note.stakeholderValue && (
                  <div className="space-y-3 pt-4 border-t border-stone-100">
                    <span className="font-bold text-xs uppercase tracking-wider text-stone-400">Stakeholder Value</span>
                    <ul className="space-y-2">
                      {note.stakeholderValue.map((val, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-500">
                          <div className="w-1 h-1 rounded-full bg-stone-300 mt-1.5 shrink-0" />
                          {val}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

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
                  <div className="flex flex-col md:flex-row gap-8 items-center">
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
                      </div>

                      <button 
                        onClick={() => setSelectedItem(item)}
                        className="flex items-center gap-2 text-sm font-bold text-slate-900 group"
                      >
                        Full Strategic Blueprint & Analyst's Insight
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
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
        item={selectedItem} 
        isOpen={!!selectedItem} 
        onClose={() => setSelectedItem(null)} 
      />
    </div>
  );
}
