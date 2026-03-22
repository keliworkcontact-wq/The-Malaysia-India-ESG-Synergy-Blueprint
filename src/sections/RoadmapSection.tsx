import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
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
      idea: "A pragmatic framework utilizing IoT harvesting and ZLD technologies to transform tropical rainfall into a circular industrial asset, enabling Malaysian manufacturers to decouple production from municipal water reliance while generating audit-grade ESG data.",
      operation: "A four-step circular asset cycle: Smart catchment with IoT sensing, AI-driven automated tiered filtration, closed-loop reuse with ZLD integration, and digital water footprint auditing for ESG reporting.",
      auditNote: {
        constructiveness: [
          "**Structural Shift in Resource Models**: Enterprises transition from mere 'consumers' of water to 'collectors and circulators', enhancing resilience during dry seasons or water rationing periods.",
          "**Audit-grade ESG Performance**: Provides real-time IoT data for global supply chain audits, meeting high standards required by major corporations like HUL."
        ],
        risksAndGaps: [
          "**Long CAPEX Payback Period**: Significant upfront expenditure may cause resistance from SMEs if payback exceeds five years without subsidies.",
          "**Technical Maintenance Barriers**: Smart systems require regular professional maintenance; risk of 'technological waste' if local talent is lacking."
        ]
      },
      type: 'standard',
      fullBlueprint: [
        { section: "The Idea", content: "Inspired by HUL’s 'Water Neutral' and Zero Liquid Discharge (ZLD) practices, this proposal aims to transform rainwater from 'wasted runoff' into a 'controlled industrial asset'.\n\nThe core objective is to establish an intelligent rainwater harvesting and reuse system across Malaysian industrial zones. By integrating harvested rainwater into industrial cooling and cleaning cycles, companies can significantly reduce their reliance on municipal water supplies. This not only lowers operational costs but also utilizes technological intervention to enable a structural shift from 'resource consumption' to 'circular resource management'." },
        { section: "Blueprint Operation: The Circular Asset Cycle", content: "To ensure the system is audit-grade and integrated, the operation follows a four-step cycle:" },
        { section: "Step 1: Smart Catchment & Sensing", content: [
          "**Action**: Install high-capacity rainwater harvesting arrays on industrial rooftops, equipped with IoT (Internet of Things) sensors.",
          "**Logic**: Sensors provide real-time monitoring of storage tank levels and initial water quality, ensuring maximum capture efficiency during Malaysia’s high-rainfall seasons."
        ] },
        { section: "Step 2: Automated Tiered Filtration", content: [
          "**Action**: Captured rainwater passes through an AI-driven filtration system that automatically diverts water based on real-time purity levels.",
          "**Logic**: High-purity water is routed to industrial cooling towers, while secondary-grade water is used for cleaning or landscape irrigation, achieving 'quality-on-demand' and minimizing treatment costs."
        ] },
        { section: "Step 3: Closed-loop Reuse & ZLD Integration", content: [
          "**Action**: Integrate HUL’s ZLD logic to perform secondary treatment on industrial wastewater.",
          "**Logic**: Treated water is re-pumped back into the harvesting system. This 'rainwater replenishment + internal circulation' model creates a small-scale, self-sufficient water ecosystem within the industrial zone."
        ] },
        { section: "Step 4: Digital Water Footprint Auditing", content: [
          "**Action**: All water-saving data is uploaded via the cloud to the corporate ESG dashboard.",
          "**Logic**: Every cubic meter of displaced municipal water is recorded as a 'water asset,' providing audit-grade evidence for companies to apply for green financing or tax incentives under the CSP framework."
        ] }
      ]
    },
    {
      id: 'plastic',
      title: 'Digital Plastic Recycling System',
      icon: Recycle,
      idea: "This scheme integrates blockchain traceability and AI precision sorting to support Malaysia’s EPR rollout. By converting recycling efforts into audit-grade digital assets and linking the CaaS Platform network with financial incentives, it establishes a transparent and efficient closed-loop circular economy.",
      operation: "A four-step circular verification loop: Digital traceability entry (linked with CaaS Platform), AI-driven precision sorting, tokenization of compliance into 'Plastic Credits,' and EPR settlement via the LC-SF engine.",
      auditNote: {
        constructiveness: [
          "**Audit-Grade Compliance Assets**: Utilizing blockchain to turn fragmented recycling activities into verifiable evidence gives Malaysian enterprises a competitive edge when facing international ESG standards.",
          "**Value Chain Premium**: AI sorting drastically improves material purity, allowing recycled plastic to enter premium markets like food-grade packaging, increasing income for B40 collectors.",
          "**Regulatory Transparency**: Provides a real-time dashboard for regulators to accurately monitor national waste flows, significantly reducing monitoring costs."
        ],
        risksAndGaps: [
          "**Participation Barriers for Small Recyclers**: Small-scale recyclers may lack the digital hardware and technical expertise required, potentially polarizing the industry.",
          "**Dependency on EPR Enforcement**: Business model relies on mandatory government enforcement; lax enforcement diminishes the incentive for brands to purchase 'Compliance Assets'.",
          "**Baseline Data Gap**: Lack of comprehensive national baseline data on waste flows makes it challenging to precisely quantify initial recycling rate increases."
        ]
      },
      type: 'standard',
      fullBlueprint: [
        { section: "The Idea", content: "The core of this scheme is the establishment of a digital platform integrating Blockchain traceability and AI automated sorting to support the nationwide rollout of Malaysia’s Extended Producer Responsibility (EPR) policy.\n\n**Objective**: To address long-standing pain points in the recycling industry, such as low transparency and inconsistent material purity. By transforming plastic waste into audit-grade digital assets, the system enables producers (brands) to track the lifecycle of their packaging materials while ensuring the recycling process meets international ESG auditing standards. This is not merely an environmental project but a FinTech tool that converts 'waste' into 'high-value compliance assets.'" },
        { section: "Blueprint Operation: The Circular Verification Loop", content: "To ensure the system is audit-grade and integrated, the operation follows a four-step cycle:" },
        { section: "Step 1: Digital Traceability Entry (Linking with CaaS Platform)", content: [
          "**Action**: The system directly integrates with the CaaS Platform network. When B40 members weigh collected waste using Bluetooth-enabled smart scales, data is uploaded to the blockchain in real-time.",
          "**Logic**: A unique 'Digital ID' is assigned to the waste the moment it leaves the community, recording its source, type, and original weight to ensure the integrity of the foundational data."
        ] },
        { section: "Step 2: AI-Driven Precision Sorting & Purity Enhancement", content: [
          "**Action**: Deploy AI optical sorting technology at centralized collection hubs to automatically identify different polymer types (e.g., rPET, HDPE).",
          "**Logic**: Compared to manual sorting, AI significantly enhances the purity of recycled materials. High-purity recycled plastic commands a higher resale value in the market, directly increasing the profit margins across the entire supply chain."
        ] },
        { section: "Step 3: Tokenization of Compliance", content: [
          "**Action**: Sorted and processed volumes are converted into 'Plastic Credits' or 'Digital Compliance Certificates.'",
          "**Logic**: These certificates are recorded on an immutable blockchain. Brands (e.g., FMCG companies) purchase these credits as audited evidence of fulfilling their legal EPR obligations."
        ] },
        { section: "Step 4: EPR Settlement & Green Finance Incentives", content: [
          "**Action**: Sync recycling data with the LC-SF (Local Currency Settlement Framework) engine.",
          "**Logic**: Recyclers and B40 members can receive additional subsidies or green finance loans funded by LC-SF exchange rate savings, based on the volume of 'Compliance Assets' they contribute, creating a closed loop of capital and material."
        ] }
      ]
    }
  ],
  S: [
    {
      id: 'tvet',
      title: 'Digital TVET Training System',
      icon: GraduationCap,
      idea: "Using DDF simulation architecture, Malaysian technicians can train locally through immersive digital environments to become Industry 4.0 architects rather than operators.",
      operation: "**Funding Pathways**: Recommend MyMahir apply to HRD Corp; Establish Malaysia-India Digital Manufacturing Scholarship; Corporate sponsorship for equipment in exchange for priority hiring rights.",
      auditNote: {
        constructiveness: [
          "**Long-term assetisation**: Although the initial cost of building a virtual twin platform is high, digital assets do not wear out and are highly scalable. Once built, the marginal cost of training ten thousand learners will be far lower than setting up traditional physical labs.",
          "**Feasibility of Ecological Financing**: This strategy no longer relies solely on government grants. By combining HRD Corp support, transnational scholarships and corporate sponsorship, the costs are shared with the beneficiaries, which offers strong commercial sustainability.",
          "**ESG Integration**: The training process itself is digital and low-carbon, and the core curriculum includes how to achieve precise carbon reduction through Industry 4.0 technologies. This makes trained talent the company's future 'green transformation drivers'."
        ],
        risksAndGaps: [
          "**Cost and calibration challenges**: The initial costs for architecture setup and expert consultancy are a significant financial burden. Furthermore, if the Indian models are not fully compatible with Malaysian hardware, the cost of secondary development could exceed the budget.",
          "**Risk of Simulation Distortion**: If the virtual environment fails to synchronise with real production parameters promptly, those trained as 'architects' may struggle when facing physical production lines."
        ]
      },
      type: 'standard',
      fullBlueprint: [
        { section: "The Idea", content: "Using DDF simulation architecture, Malaysian technicians can train locally through immersive digital environments to become Industry 4.0 architects rather than operators." },
        { section: "Step 1: Develop a high-precision digital base (digital twin architecture)", content: [
          "**Implementation actions**: Invest dedicated funds and invite HUL DDF architects to collaborate with local system integrators in developing customised digital twin platforms for Malaysia's key industries, such as semiconductors and food processing.",
          "**Technical details**: Build virtual production line models and integrate real-time production data to allow trainees to access cutting-edge industrial standards in a virtual environment."
        ]},
        { section: "Step 2: Malaysia-India Expert 'Cloud Mentorship' (Remote Expert Mentorship)", content: [
          "**Implementation actions**: Hire senior engineers from HUL India as 'digital mentors' to provide remote mentorship through simulation systems.",
          "**Operational logic**: Although expert consultation fees are expensive, cloud collaboration avoids the travel costs associated with large-scale personnel movements between Malaysia and India."
        ]},
        { section: "Step 3: Virtual Sandbox & Stress Testing", content: [
          "**Implementation actions**: Trainees simulate extreme situations in the virtual system, such as equipment wear warnings and production scheduling optimisation.",
          "**Core value**: The virtual system enables trainees to experiment without damaging expensive physical assets (CAPEX) and gain experience in handling complex industrial logic."
        ]},
        { section: "Step 4: Localisation & Train-the-Trainer", content: "**Implementation actions**: Adapting mature Indian models to Malaysian local factory hardware (e.g. different brands of PLC controllers). The long-term goal is to cultivate the first batch of local 'digital trainers' to ensure the training system can iterate independently." },
        { section: "Funding and Financing Strategy", content: [
          "To hedge against the high initial construction costs (CAPEX), I recommend the following three channels of ecological financing:",
          "**1. Government Fund Support (HRD Corp)**: MyMahir should actively apply to have this project included in HRD Corp's approved training list. Funds can be recirculated from training levies paid by enterprises, thereby reducing the direct financial burden on participating companies.",
          "**2. Bilateral scholarships**: Based on the 11 Memoranda of Understanding (MoUs) signed between Malaysia and India, the governments of both countries are recommended to jointly establish the \"Malaysia-India Digital Manufacturing Scholarship\", specifically to subsidise high software licensing and Indian expert consultancy fees.",
          "**3. Corporate Sponsorship & Talent Loop**: Large manufacturing companies in Malaysia (such as semiconductor and FMCG giants) should be attracted to sponsor hardware equipment or digital model construction costs. In return, sponsoring companies will gain priority hiring rights for these 'Industry 4.0 architects', creating a virtuous cycle of funds and talent."
        ]}
      ]
    },
    {
      id: 'shakti',
      title: 'Circularity-as-a-Service Platform (CaaS Platform)',
      icon: Network,
      idea: "The CaaS Platform is a modular ecosystem built on community nodes and digital systems, providing on-demand circular economy services. Inspired by Project Shakti, it places B40 women and informal waste collectors at the core of operations, ensuring that environmental sustainability is achieved alongside grassroots economic empowerment and social inclusion.",
      operation: "A modular ecosystem delivering circularity as an on-demand service through community nodes, digital weighing systems, and integrated logistics networks.",
      auditNote: {
        constructiveness: [
          "**Identity Transformation**: Informal collectors become certified logistics partners; B40 women become digital resource managers.",
          "**Internalized Incentive Mechanism**: LC-SF exchange savings fund the incentive pool, solving long-term financing sustainability.",
          "**Digital Upgrade of Social Governance**: Represents a shift to data-informed community service."
        ],
        risksAndGaps: [
          "**Baseline Data Gap**: Lack of historical carbon footprint data limits quantification of emission reductions from logistics optimization.",
          "**Human Insight Gap**: Quality-of-life improvement estimates remain theoretical due to absence of dedicated field surveys.",
          "**Policy Overlap Risk**: Potential conflicts with state initiatives such as Negeri Sembilan’s KITARecycle program."
        ]
      },
      type: 'shakti',
      fullBlueprint: [
        { section: "The Idea", content: "In Malaysia’s highly urbanized market, retail giants such as 99 Speedmart dominate distribution channels, leaving limited structural space for HUL’s original retail-based Shakti model to scale.\n\nTo address this constraint, this study integrates the inclusive entrepreneurship model of Project Shakti with the systemic circularity framework of Project Circular Bharat, redesigning them into a **Circularity-as-a-Service Platform (CaaS Platform)**—a digitally enabled, service-based infrastructure targeting Malaysia’s **last-mile recycling gap**.\n\nThe CaaS Platform is a modular ecosystem built on community nodes and digital systems, providing on-demand circular economy services. Inspired by Project Shakti, it places B40 women and informal waste collectors at the core of operations, ensuring that environmental sustainability is achieved alongside grassroots economic empowerment and social inclusion." },
        { section: "Context Premise", content: [
          "Before the operational workflow begins, the model assumes an active participation loop from residents:",
          "Residents bring pre-sorted household waste—particularly high-value recyclables (e.g., aluminium cans) and low-value but highly polluting waste (e.g., multi-layer plastic packaging).",
          "Waste is delivered either to the B40 member’s home, or a designated community micro-collection point.",
          "This premise establishes the physical entry point of materials into the CaaS Platform ecosystem, forming the foundation of a decentralized circular network."
        ]},
        { section: "Core Revenue Mechanisms", content: [
          "**B40 Female Members**: Management Commission (percentage fee based on total community recycling volume) and Digital Consulting Fee (small service fee for household ESG diagnostics).",
          "**Independent Collectors**: Efficiency Incentive (reduced fuel costs and higher hourly productivity), Compliance Subsidy (eligible for green financial rewards), and Backend Premium (pre-sorted waste commands significantly higher resale prices)."
        ]},
        { section: "Stakeholder Value", content: [
          "**B40 Women**: Digital workforce + ESG micro-entrepreneurs",
          "**Logistics Partners**: Transition into formalized green logistics operators",
          "**Corporations**: Access to traceable, compliant recycled inputs",
          "**Government**: Accelerated Net Zero pathway + system-level ESG adoption"
        ] }
      ]
    }
  ],
  G: [
    {
      id: 'lcsf',
      title: 'LC-SF Supply Chain Optimization',
      icon: TrendingUp,
      idea: "A financial engine leveraging local-currency settlements to reward ESG compliance with **exchange-rate premiums**, driving a self-sustaining green trade corridor between Malaysia and India.",
      operation: "A four-step circular incentive loop: Digital assetization of compliance, LC-SF trade execution (1-3% savings), 'Green Premium' injection via preferential rates, and dynamic re-investment into hardware subsidies.",
      auditNote: {
        constructiveness: [
          "**Monetizing Compliance**: Provides an immediate, tangible financial reward for MSPO/RSPO certification, solving the 'Smallholder ESG Dilemma'.",
          "**Systemic Synergy**: Acts as the 'connective tissue' between agriculture and waste management by using a unified financial engine (LC-SF).",
          "**Resilience against Global Volatility**: Shields small-scale producers from USD fluctuations, providing more stable income for B40 communities."
        ],
        risksAndGaps: [
          "**Production Volatility Risk**: If agricultural yields drop due to climate events, the total volume of LC-SF trade may shrink, reducing the 'Incentive Pool'.",
          "**Data Integrity Gap**: System is only as good as the data from RAP and CaaS Platform; requires rigorous digital auditing to prevent 'fake' green production.",
          "**Adoption Friction**: Moving away from USD-based trade requires significant buy-in from commercial banks and procurement departments."
        ]
      },
      type: 'standard',
      fullBlueprint: [
        { section: "The Idea", content: "The core objective is to dismantle the 'Compliance vs. Cost' trade-off. Historically, ESG compliance (like MSPO or plastic tracing) adds costs that smallholders and SMEs cannot absorb.\n\nI propose a **Green Exchange Rate Premium**. By utilizing the Malaysia-India Local Currency Settlement (LC-SF) framework to bypass the US Dollar, the transaction savings (reduced hedging costs and exchange fees) are captured and redistributed as a **'De-dollarization Dividend.'**\n\nThis dividend is paid exclusively to supply chain participants who meet verifiable ESG standards, essentially making 'Sustainability' a currency of its own." },
        { section: "Blueprint Operation: The Circular Incentive Loop", content: "To ensure the system is audit-grade and integrated, the operation follows a four-step cycle that directly connects to the **RAP** and **CaaS Platform** data streams:" },
        { section: "Step 1: Digital Assetization of Compliance (Input from RAP & CaaS Platform)", content: [
          "The system recognizes 'Green Assets' generated by the other two programs.",
          "**From RAP**: Automated MSPO production records of palm oil smallholders.",
          "**From CaaS Platform**: Verified volumes of high-purity recycled plastic collected by B40 managers.",
          "**Action**: These digital certificates are uploaded to a shared blockchain ledger between Malaysian and Indian trade banks."
        ] },
        { section: "Step 2: LC-SF Trade Execution (The Savings Catalyst)", content: [
          "When an Indian corporation (e.g., HUL) purchases raw materials from a Malaysian supplier, the transaction is settled in **MYR/INR** via the LC-SF mechanism.",
          "**Action**: By bypassing the USD intermediary, the transaction realizes a 1%–3% saving in conversion and administrative overhead."
        ] },
        { section: "Step 3: The 'Green Premium' Injection (The Incentive)", content: [
          "The saved transaction costs are funneled into a **Bilateral Green Fund**.",
          "**Action**: Suppliers who provided the 'Green Assets' from Step 1 receive a **Preferential Exchange Rate** or a direct **Exchange Rate Subsidy**.",
          "For a palm oil farmer in the RAP program, this means receiving a higher MYR payout per ton compared to non-compliant neighbors."
        ] },
        { section: "Step 4: Dynamic Re-investment (The Circularity)", content: [
          "A portion of the LC-SF savings is allocated to subsidize the **IoT hardware costs** for new farmers joining the RAP platform or **smart scales** for the CaaS Platform network.",
          "**Action**: This reduces the CAPEX barrier for new participants, scaling the ESG network without relying on permanent government handouts."
        ] }
      ]
    },
    {
      id: 'rap',
      title: 'Digital Regenerative Agriculture Platform (RAP)',
      icon: Sprout,
      idea: "A four-step ecosystem addressing the Smallholder ESG Dilemma — farmers seek compliance but lack technology and incentives.",
      operation: "Collaborate with MPOB to deploy IoT sensors and satellite sensing, delivering precision advisory via WhatsApp and linking to LC-SF incentives.",
      auditNote: {
        constructiveness: [
          "**Compliance automation**: The 'MSPO Automated Compliance Audit' feature in the four-step strategy is brilliant. It transforms the originally high-threshold certification process into a 'by-product' of daily production, greatly lowering the entry barrier for small farmers.",
          "**Technology penetration**: By providing precise instructions via WhatsApp, the complex app learning curve is bypassed, representing a typical application of 'appropriate technology'."
        ],
        risksAndGaps: [
          "**Hardware deployment cost**: Deploying IoT sensors on pilot smallholder plots requires an initial capital investment. Without large-scale government subsidies, the financial model puts pressure on small farmers.",
          "**Agricultural forecast accuracy**: The accuracy of AI agricultural advisors' predictions depends on localised soil models, and there may be errors in the early stages of the project."
        ]
      },
      type: 'rap',
      fullBlueprint: [
        { section: "The Idea", content: "The establishment of a 'Digital Regenerative Agriculture Platform' should be a collaborative effort between Malaysia and India. The core of this platform is not merely a mobile app, but an ecosystem of 'technology empowerment + benefit bundling,' which utilises HUL's Regenerative Agriculture technology to address the low yield and compliance difficulties (MSPO) faced by Malaysian palm oil smallholders." },
        { section: "Step 1 : Assetisation of underlying data (sensors + remote sensing)", content: [
          "**Implementation**: Collaborate with the Malaysian Palm Oil Board (MPOB) to install low-cost IoT sensors on selected pilot smallholder plots to monitor soil pH, moisture and the content of nitrogen, phosphorus and potassium.",
          "**HUL technology introduction**: Introduce the Regenerative Agriculture Principles (RAP) model mentioned in HUL reports, using satellite remote sensing to monitor vegetation coverage and identify yield gap points caused by soil degradation."
        ]},
        { section: "Step 2: Precision agriculture command system (AI agricultural technician)", content: [
          "**Implementation**: Build AI prediction models. Based on sensor feedback, the platform will directly send 'precision instructions' to smallholders via WhatsApp or a simple app. These instructions will be in the form of recommendations such as: 'It will rain within the next 48 hours. It is recommended that you fertilise today to maximise the efficiency of the fertiliser.' or 'Based on soil moisture levels, it is recommended that you delay harvesting to improve the oil content.'",
          "**Constructive impact**: This solves the problem of smallholders 'planting based on experience', reducing resource waste and increasing yield."
        ]},
        { section: "Step 3: Local Currency Settlement (LC-SF) Linked to Incentives", content: "**Implementation Action**: Connect the platform to Malaysia's local currency settlement mechanism. Farmers who meet the standards for regenerative agriculture (for example, using bio-fertilisers and achieving carbon sequestration targets) can get an exchange rate bonus subsidy based on savings from LC-SF when they sell their palm fruit (FFB) to factories." },
        { section: "Step 4: MSPO Automated Compliance Audit", content: [
          "**Implementation action**: The platform automatically generates digital production records. When applying for MSPO certification, small farmers no longer need cumbersome handwritten ledgers and can export data with one click, significantly reducing certification costs and thresholds.",
          "**Value proposition**: This platform addresses the issue for small farmers of wanting to engage in ESG activities but lacking the necessary technology or receiving no rewards for doing so."
        ]}
      ]
    }
  ]
};

// --- Sub-Components ---

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
                    <h5 className="font-sans font-bold text-lg text-corporate-blue border-b border-stone-200 pb-2">{bp.section}</h5>
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
                              <ReactMarkdown components={{ p: ({node, ...props}) => <span {...props} /> }}>{line}</ReactMarkdown>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">
                        <ReactMarkdown>{bp.content as string}</ReactMarkdown>
                      </div>
                    )}
                  </div>
                ))}

                {/* Special Visualizations based on Type */}
                {item.type === 'rap' && (
                  <div className="pt-6 border-t border-stone-200">
                    <h5 className="font-sans font-bold text-lg text-corporate-blue mb-4">Implementation Roadmap</h5>
                    <RAPTimeline />
                  </div>
                )}
              </div>
            </div>

            {/* Right Side: The Audit Note */}
            <div className="md:w-2/5 p-8 relative overflow-y-auto">
              <div className="absolute top-6 right-6 opacity-10 rotate-12">
                <div className="border-4 border-amber-500 text-amber-500 px-4 py-1 font-black text-2xl rounded-lg uppercase">Audit</div>
              </div>
              
              <h4 className="font-sans font-bold text-2xl text-corporate-blue mb-6 underline decoration-stone-200 underline-offset-8 decoration-1">Analyst's Insight</h4>
              
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
                        <ReactMarkdown components={{ p: ({node, ...props}) => <span {...props} /> }}>{`"${point}"`}</ReactMarkdown>
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
                        <ReactMarkdown components={{ p: ({node, ...props}) => <span {...props} /> }}>{`"${point}"`}</ReactMarkdown>
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
                    <div className="text-sm text-slate-600 leading-relaxed italic">
                      <ReactMarkdown components={{ p: ({node, ...props}) => <span {...props} /> }}>{`"${note.recommendation}"`}</ReactMarkdown>
                    </div>
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
      {/* Section 3.0: Introduction */}
      <section className="mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-lg font-bold tracking-[0.2em] text-corporate-blue/60 uppercase mb-4">
            Section 3.0: Introduction — From Benchmark to Localization
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-corporate-blue mb-8 leading-tight">
            From Insight to Application
          </h1>
          
          <div className="w-full space-y-8">
            <blockquote className="border-l-4 border-blue-500 pl-6 py-4 bg-stone-50 italic text-lg text-stone-600 leading-relaxed">
              "Building on Section 2 findings, this section moves from insight to application."
            </blockquote>
            
            <div className="space-y-6">
              <p className="text-lg text-stone-500 leading-relaxed">
                Rather than replicating HUL’s ESG strategies directly, the focus is on translating their underlying mechanisms into a localized framework suited to Malaysia’s institutional and industrial context.
              </p>
              <p className="text-lg text-stone-500 leading-relaxed">
                This involves adapting key capabilities—such as digital-enabled sustainability, circular resource systems, and inclusive participation models—into integrated strategies aligned with national priorities.
              </p>
              <p className="text-lg font-semibold text-corporate-blue leading-relaxed">
                Anchored within the Malaysia–India Comprehensive Strategic Partnership (CSP), the objective is to construct a pragmatic and scalable ESG transformation system that supports Malaysia’s transition toward Net Zero 2050.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 3.1: Synergy Framework */}
      <section className="mb-24 p-8 md:p-12 bg-stone-50 rounded-[3rem] border border-stone-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-lg font-bold tracking-[0.2em] text-corporate-blue/60 uppercase mb-4">
            Section 3.1: Malaysia–India ESG Synergy Framework — Conceptual Overview
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold text-corporate-blue mb-8 leading-tight">
            The Logic of Translation
          </h1>
          
          <div className="space-y-8">
            <p className="text-xl text-stone-600 leading-relaxed">
              This framework visualizes the core logic of the report by structuring the transition from benchmark insights to localized implementation.
            </p>
            
            {/* Malaysia–India ESG Synergy Framework */}
            <div className="flex flex-col items-center gap-4 py-12">
              {/* Box 1: INDIA ESG BENCHMARK SYSTEM */}
              <div className="w-full max-w-2xl bg-white border border-stone-200 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-corporate-blue mb-3 border-b border-stone-100 pb-2 text-sm md:text-base">INDIA ESG BENCHMARK SYSTEM (HUL ESG Operating Architecture)</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-stone-600">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> ASPIRE Strategy</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> DDF / AI Supply Chain</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Governance Transparency</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Project Shakti</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Project Circular Bharat</li>
                </ul>
              </div>

              <div className="h-8 w-px bg-stone-300 relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 border-8 border-transparent border-t-stone-300" />
              </div>

              {/* Box 2: TRANSFERABLE ESG MECHANISMS */}
              <div className="w-full max-w-2xl bg-white border border-stone-200 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-corporate-blue mb-3 border-b border-stone-100 pb-2 text-sm md:text-base">TRANSFERABLE ESG MECHANISMS</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-stone-600">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Digital Sustainability Infrastructure</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Circular Economy Systems</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Inclusive Workforce Models</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Data-driven Governance</li>
                </ul>
              </div>

              <div className="h-8 w-px bg-stone-300 relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 border-8 border-transparent border-t-stone-300" />
              </div>

              {/* Box 3: LOCALIZATION FILTERS (MALAYSIA) */}
              <div className="w-full max-w-2xl bg-white border border-stone-200 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-corporate-blue mb-3 border-b border-stone-100 pb-2 text-sm md:text-base">LOCALIZATION FILTERS (MALAYSIA)</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-stone-600">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> NIMP 2030</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> TVET</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Malaysia–India CSP</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Digital & Industrial Readiness</li>
                </ul>
              </div>

              <div className="h-8 w-px bg-stone-300 relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 border-8 border-transparent border-t-stone-300" />
              </div>

              {/* Box 4: MALAYSIA ESG TRANSFORMATION SYSTEM */}
              <div className="w-full max-w-2xl bg-white border border-stone-200 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-corporate-blue mb-3 border-b border-stone-100 pb-2 text-sm md:text-base">MALAYSIA ESG TRANSFORMATION SYSTEM (Localized Strategy Blueprint)</h3>
                <div className="space-y-4 text-sm text-stone-600">
                  <div>
                    <p className="font-bold text-emerald-600 mb-1">E — Environmental Circularity</p>
                    <ul className="pl-4 space-y-1">
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Smart Water Management</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Digital Plastic Recycling System</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-blue-600 mb-1">S — Social Empowerment</p>
                    <ul className="pl-4 space-y-1">
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Digital TVET Training System</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Circularity-as-a-Service Platform (Caas Platform)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-amber-600 mb-1">G — Governance Innovation</p>
                    <ul className="pl-4 space-y-1">
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-400" /> LC-SF Supply Chain Optimization</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Digital Regenerative Agriculture Platform (RAP)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="h-8 w-px bg-stone-300 relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 border-8 border-transparent border-t-stone-300" />
              </div>

              {/* Box 5: OUTCOME TARGET */}
              <div className="w-full max-w-2xl bg-blue-600 border border-blue-500 rounded-2xl p-6 shadow-md text-white">
                <h3 className="font-bold mb-3 border-b border-blue-400 pb-2 text-sm md:text-base">OUTCOME TARGET</h3>
                <p className="font-bold mb-2">Malaysia Net Zero 2050 Roadmap</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-blue-100">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-200" /> Decarbonization Pathway</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-200" /> ESG Ecosystem Scaling</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-200" /> Industrial Transformation</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <p className="text-lg text-stone-500 leading-relaxed">
                It illustrates how transferable ESG mechanisms—spanning digital infrastructure, circular systems, and inclusive models—are systematically adapted through Malaysia’s policy, industrial, and institutional context.
              </p>
              <p className="text-lg text-stone-500 leading-relaxed">
                By mapping the progression from <span className="font-bold text-corporate-blue">benchmark → insight → localization → implementation</span>, the diagram provides a clear system-level view of how ESG strategies can be translated into a scalable transformation pathway toward Net Zero 2050.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="text-center mb-16">
        <h2 className="font-sans font-bold text-4xl md:text-5xl text-corporate-blue mb-8">Section 3.2: Malaysia ESG Transformation Strategies Blueprint</h2>
        
        <div className="max-w-3xl mx-auto space-y-8 text-slate-600 leading-relaxed">
          <div className="space-y-6">
            <h4 className="font-bold text-stone-900 text-xl">The ESG Ecosystem Loop</h4>
            <p className="text-lg">
              These initiatives are designed as an interconnected system rather than isolated projects.
            </p>
            <p className="text-lg">
              Within this framework, data generated from Environmental and Social platforms is intended to function as a verification layer within the system, enabling the activation of financial mechanisms under the Governance framework.
            </p>
            <p className="text-lg">
              Through this design, sustainability performance can be systematically linked to financial incentives, forming a self-reinforcing ESG ecosystem.
            </p>
          </div>

          <p className="font-semibold text-corporate-blue pt-6 border-t border-stone-100">
            You are invited to explore the detailed design of each initiative to understand the full structural logic of the proposed roadmap.
          </p>
        </div>
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
                        <h3 className="font-sans font-bold text-2xl text-corporate-blue">{item.title}</h3>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="space-y-1">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">The Idea</span>
                          <div className="text-slate-600 leading-relaxed">
                            <ReactMarkdown>{item.idea}</ReactMarkdown>
                          </div>
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
