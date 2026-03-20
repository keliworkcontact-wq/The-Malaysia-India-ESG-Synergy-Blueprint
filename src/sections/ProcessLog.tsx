import { motion } from 'motion/react';
import { 
  Target, 
  Search, 
  Zap, 
  RefreshCw, 
  Lightbulb, 
  ShieldCheck, 
  Database, 
  LineChart, 
  Users, 
  Globe, 
  Cpu, 
  Layout, 
  FileText,
  Github,
  ExternalLink,
  BookOpen,
  CheckCircle2
} from 'lucide-react';

const phases = [
  {
    title: "Phase 1: Vision & Research Initiation",
    date: "January 2026",
    icon: <Target className="text-corporate-blue" />,
    items: [
      {
        label: "Initial Objective",
        content: "Following the completion of the Data Analyst Associate certification, the project was initially conceived as a quantitative analysis and 2030 forecast of Hindustan Unilever Limited's (HUL) ESG performance."
      },
      {
        label: "Resource Discovery",
        content: "Identified HUL's Digital Sustainability Reporting Center as a high-transparency data source, providing the raw material for an ESG-focused data portfolio."
      },
      {
        label: "Analytical Efficiency",
        content: "Leveraged NotebookLM to synthesize multi-year annual reports, increasing the depth and speed of the initial literature review."
      }
    ]
  },
  {
    title: "Phase 2: The Strategic Pivot",
    date: "February 2026",
    icon: <RefreshCw className="text-sustainability-green" />,
    items: [
      {
        label: "Environmental Scanning",
        content: "A critical turning point occurred on February 9, following a report in eNanyang regarding the signing of 11 agreements and MoUs between Malaysia and India."
      },
      {
        label: "Insight Synthesis",
        content: "Recognized a \"policy window\" where HUL's ESG benchmarks could be localized as a strategic shortcut for Malaysia's Net Zero goals under the Comprehensive Strategic Partnership (CSP)."
      },
      {
        label: "Strategic Re-positioning",
        content: "Transitioned the project from a standard corporate audit to a Cross-Border Green Strategy Blueprint, focusing on \"Audit to Adaptation\"."
      }
    ]
  },
  {
    title: "Phase 3: Data Engineering & Integrity",
    date: "Technical Deep-Dive",
    icon: <Database className="text-corporate-blue" />,
    items: [
      {
        label: "Data Quality Assurance (DQA)",
        content: "Encountered data overlap and inconsistencies across HUL and Unilever global reports. Resolved this by narrowing the source scope to the 2023–2025 Digital Business Responsibility and Sustainability Reports (BRSR) to ensure audit-grade accuracy."
      },
      {
        label: "Mitigating AI Hallucination",
        content: "Identified and corrected AI-generated data fillers in Scope 3 reporting. Developed a custom \"Reporting Cycle\" CSV to force model adherence to verified historical figures."
      },
      {
        label: "Predictive Modeling",
        content: "Engineered a 2030 Decarbonization Forecast. Conducted rigorous logic validation on the underlying mathematical formulas to ensure the \"ESG Analyst Insight\" reflected realistic decarbonization pathways rather than simple linear trends."
      }
    ]
  },
  {
    title: "Phase 4: Strategic Localization & Critical Thinking",
    date: "Strategy Development",
    icon: <Globe className="text-sustainability-green" />,
    items: [
      {
        label: "HUL \"Shakti\" Evaluation",
        content: "Conducted an in-depth review of HUL's Shakti community retail model via official disclosures."
      },
      {
        label: "Market Landscape Analysis",
        content: "Through an assessment of the Malaysian retail sector, I identified high market saturation—typified by the rapid expansion of retail giants like 99 Speedmart."
      },
      {
        label: "Demographic & Logic Refinement",
        content: "Recognizing Malaysia's advanced urbanization rate compared to the rural-centric design of the original Shakti model, I determined that a direct \"copy-and-paste\" would be logically flawed."
      },
      {
        label: "Strategic Adaptation",
        content: "Consequently, I pivoted the proposal toward Shakti 2.0, re-engineering the model from a \"retail distribution\" tool into a \"digital green service network\" to better align with Malaysia's modern infrastructure and community needs."
      },
      {
        label: "Solution Optimization",
        content: "Iterated through multiple strategy versions with AI assistance, refining the RAP (Regenerative Agriculture Platform) and LC-SF frameworks until they achieved high structural logic and practical feasibility for the Malaysian landscape."
      }
    ]
  },
  {
    title: "Phase 5: Digital Architecture & UX Design",
    date: "MARCH 2026",
    icon: <Cpu className="text-corporate-blue" />,
    items: [
      {
        label: "Tech Stack Optimization",
        content: "Migrated development to Google AI Studio for higher efficiency and iterative speed in building the interactive web report."
      },
      {
        label: "UX/UI Innovation",
        content: "Solved the \"Information Fatigue\" challenge by implementing a Card-Based UI. This allows readers to navigate six complex localized schemes without being overwhelmed by technical density."
      },
      {
        label: "Content Preservation",
        content: "Developed a modular PDF upload workflow to prevent AI \"content-stripping,\" ensuring that every localized blueprint retained its full technical detail and strategic nuance."
      }
    ]
  }
];

const learnings = [
  {
    title: "The \"Human-in-the-Loop\" Necessity",
    content: "This project reinforced that while AI can drastically accelerate data synthesis (e.g., via NotebookLM), the Strategic Pivot depends entirely on human insight. Recognizing the \"Golden Opportunity\" in the eNanyang news report required a level of contextual awareness and geopolitical intuition that AI currently cannot replicate."
  },
  {
    title: "Data Integrity as a Foundation",
    content: "Dealing with discrepancies between HUL and global Unilever reports taught me that data cleaning is a form of governance. By creating a custom \"Reporting Cycle\" CSV, I learned that strict control over the AI's data input is the only way to ensure audit-grade outputs in ESG forecasting."
  },
  {
    title: "From Analyst to Strategist",
    content: "This journey transformed my perspective from merely \"interpreting past data\" to \"architecting future blueprints.\" The transition from Section 2 (Audit) to Section 3 (Localization) represents the core value of a modern analyst: the ability to translate technical findings into actionable, culturally-relevant business strategies."
  }
];

export default function ProcessLog() {
  return (
    <div className="space-y-16 pb-20">
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-px bg-stone-200 hidden md:block" />
        
        <div className="space-y-12">
          {phases.map((phase, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-0 md:pl-20"
            >
              <div className="absolute left-4 md:left-4 top-0 w-8 h-8 bg-white border-2 border-stone-200 rounded-full flex items-center justify-center z-10 shadow-sm">
                <div className="w-2 h-2 bg-corporate-blue rounded-full" />
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-stone-50 rounded-xl">
                      {phase.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-corporate-blue">{phase.title}</h3>
                      <p className="text-sm font-medium text-stone-400 uppercase tracking-wider">{phase.date}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {phase.items.map((item, iIdx) => (
                    <div key={iIdx} className="group">
                      <p className="text-sm font-bold text-corporate-blue mb-1 group-hover:text-sustainability-green transition-colors">
                        • {item.label}
                      </p>
                      <p className="text-stone-600 leading-relaxed pl-4 border-l-2 border-stone-50 group-hover:border-sustainability-green/30 transition-colors">
                        {item.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-corporate-blue text-white rounded-3xl p-10 shadow-xl"
      >
        <div className="flex items-center gap-4 mb-8">
          <Lightbulb className="text-sustainability-green w-8 h-8" />
          <h2 className="text-3xl font-bold">Key Learnings & Reflections</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {learnings.map((learning, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-lg font-bold text-sustainability-green border-b border-white/10 pb-2">
                {learning.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {learning.content}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 border border-stone-100 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <Github className="text-corporate-blue w-6 h-6" />
            <h3 className="text-xl font-bold text-corporate-blue">Webpage Report Creation Process Log</h3>
          </div>
          <a 
            href="https://github.com/keliworkcontact-wq/HUL-ESG-Malaysia-India-Strategic-Portfolio" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-stone-50 rounded-xl hover:bg-stone-100 transition-colors group"
          >
            <span className="text-sm font-medium text-stone-600 truncate mr-4">
              github.com/keliworkcontact-wq/HUL-ESG-Malaysia-India-Strategic-Portfolio
            </span>
            <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-corporate-blue transition-colors" />
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 border border-stone-100 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="text-sustainability-green w-6 h-6" />
            <h3 className="text-xl font-bold text-corporate-blue">Evidence & Traceability</h3>
          </div>
          <div className="space-y-3">
            {[
              { label: "NotebookLM", url: "https://notebooklm.google.com/notebook/3a986b34-fabe-4ccb-8173-c0ace119a71f" },
              { label: "eNanyang News", url: "https://www.enanyang.my/news/20260209/Finance/1160873" },
              { label: "HUL Performance Data", url: "https://www.hul.co.in/sustainability/sustainability-reporting-centre/sustainability-performance-data/" },
              { label: "HUL BRSR Reports", url: "https://www.hul.co.in/sustainability/sustainability-reporting-centre/digital-business-responsibility-and-sustainability-report/" }
            ].map((link, idx) => (
              <a 
                key={idx}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-stone-50 rounded-lg hover:bg-stone-100 transition-colors group text-xs"
              >
                <span className="font-bold text-corporate-blue">{link.label}</span>
                <ExternalLink className="w-3 h-3 text-stone-400 group-hover:text-sustainability-green transition-colors" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
