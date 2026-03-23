import { motion } from 'motion/react';
import { 
  Target, 
  Layers, 
  Factory, 
  ShieldCheck, 
  Cpu, 
  Globe,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export default function ConclusionRoadmapSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="max-w-7xl mx-auto w-full py-20 px-8">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="space-y-16"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Section 4.0: <br />
            Operationalizing Net Zero: A System-Level Roadmap for Malaysia
          </h1>
          <div className="h-1.5 w-24 bg-sustainability-green mx-auto rounded-full" />
        </motion.div>

        {/* 4.1 Structural Constraint & Proposed Pathway */}
        <motion.section variants={itemVariants} className="bg-white/10 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 border border-white/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Target size={120} className="text-white" />
          </div>
          
          <div className="relative z-10 space-y-8">
            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-white font-light leading-relaxed">
                Building on the benchmark analysis in Section 2 and the localized system design in Section 3, this report identifies a critical structural constraint:
              </p>
            </div>

            <div className="bg-white/5 border-l-4 border-sustainability-green p-6 rounded-r-2xl">
              <p className="text-xl text-white font-bold italic leading-relaxed">
                "Scope 3 emissions cannot be effectively reduced through isolated corporate action, but require coordinated, system-level intervention across the value chain."
              </p>
            </div>

            <p className="text-lg text-white/80 leading-relaxed">
              Accordingly, the proposed pathway prioritizes <span className="text-white font-bold">digitally enabled and ecosystem-based decarbonization mechanisms</span>, rather than relying solely on firm-level commitments.
            </p>

            <div className="space-y-4">
              <p className="text-white/70 font-medium uppercase tracking-widest text-sm">Key directions include:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: Cpu, text: "Deploying digital simulation tools (e.g., DDF-inspired architectures) to enable pre-investment decarbonization planning" },
                  { icon: ShieldCheck, text: "Strengthening data infrastructure and traceability to enhance ESG reporting credibility" },
                  { icon: Globe, text: "Embedding circular resource flows within industrial and community systems, particularly in waste and agriculture" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col gap-4">
                    <item.icon className="text-sustainability-green w-8 h-8" />
                    <p className="text-sm text-white/70 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-lg text-white/80 leading-relaxed">
              While subject to constraints such as data availability and regulatory alignment, these directions represent <span className="font-bold">practical and scalable pathways</span> aligned with national initiatives such as NETR and NIMP 2030.
            </p>
          </div>
        </motion.section>

        {/* 4.1 ESG Ecosystem Scaling */}
        <motion.section variants={itemVariants} className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-stone-100 relative overflow-hidden">
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-stone-50 rounded-full" />
          
          <div className="relative z-10 space-y-12">
            {/* Title */}
            <div className="space-y-6">
              <h3 className="text-4xl md:text-5xl font-bold text-corporate-blue leading-tight">
                Section 4.1: <br />
                ESG Ecosystem Scaling
              </h3>
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                <Layers size={28} />
              </div>
            </div>

            {/* Paragraph Content */}
            <div className="space-y-6 max-w-4xl">
              <p className="text-xl text-stone-600 leading-relaxed">
                This report reframes ESG from a compliance function into a <span className="text-blue-600 font-bold">scalable ecosystem supported by interconnected platforms</span>.
              </p>
              <p className="text-lg text-stone-500 italic leading-relaxed">
                The strategies outlined in Section 3—including the CaaS Platform, Digital Regenerative Agriculture Platform (RAP), and LC-SF-enabled supply chain mechanisms—demonstrate how ESG objectives can be operationalized through coordinated systems.
              </p>
            </div>

            {/* Card 1: Enabling Conditions */}
            <div className="space-y-6">
              <p className="text-stone-400 font-bold uppercase tracking-widest text-xs">Enabling Conditions for Scaling the Ecosystem:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Institutional Coordination", desc: "Alignment across ministries, industry bodies, and bilateral platforms (e.g., Malaysia–India CSP)" },
                  { title: "Human Capital Development", desc: "Focusing on ESG-aligned TVET systems to build future-ready skills" },
                  { title: "Pilot-based Implementation", desc: "Validating models through targeted pilots before broader national rollout" },
                  { title: "Financial Alignment", desc: "Utilizing mechanisms like LC-SF to create direct economic incentives for compliance" }
                ].map((condition, idx) => (
                  <div key={idx} className="p-6 bg-stone-50 rounded-2xl border border-stone-100 hover:border-blue-200 transition-colors">
                    <h4 className="font-bold text-stone-800 mb-2 flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-blue-500" />
                      {condition.title}
                    </h4>
                    <p className="text-sm text-stone-500 leading-relaxed">{condition.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2: Phased Scaling Note */}
            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <p className="text-sm text-blue-800 italic text-center">
                Rather than immediate nationwide deployment, a <span className="font-bold">phased scaling approach</span> is recommended, where pilot outcomes inform iterative expansion.
              </p>
            </div>
          </div>
        </motion.section>

        {/* 4.2 Industrial Transformation */}
        <motion.section variants={itemVariants} className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-stone-100 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-stone-50 rounded-full" />
          
          <div className="relative z-10 space-y-12">
            {/* Title */}
            <div className="space-y-6">
              <h3 className="text-4xl md:text-5xl font-bold text-corporate-blue leading-tight">
                Section 4.2: <br />
                Industrial Transformation
              </h3>
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center">
                <Factory size={28} />
              </div>
            </div>

            {/* Paragraph Content */}
            <div className="space-y-6 max-w-4xl">
              <p className="text-xl text-stone-600 leading-relaxed">
                Over time, the proposed roadmap supports a shift in Malaysia’s industrial positioning—from cost-based manufacturing to a <span className="text-amber-600 font-bold">digitally enabled, sustainability-driven production system</span>.
              </p>
              <p className="text-lg text-stone-500 italic leading-relaxed">
                Insights from HUL indicate that ESG integration can enhance both efficiency and competitiveness when supported by digital infrastructure.
              </p>
            </div>

            {/* Card 1: Key Transformation Priorities */}
            <div className="space-y-6">
              <p className="text-stone-400 font-bold uppercase tracking-widest text-xs">Key transformation priorities include:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Resource Efficiency", desc: "Integrating resource efficiency technologies into manufacturing and agriculture" },
                  { title: "Supply Chain Capability", desc: "Strengthening ESG-linked supply chain capabilities in export-oriented sectors" },
                  { title: "Data Governance", desc: "Enhancing data governance to meet global compliance standards" },
                  { title: "Regional Collaboration", desc: "Leveraging regional collaboration, particularly within Malaysia–India and ASEAN frameworks" }
                ].map((priority, idx) => (
                  <div key={idx} className="p-6 bg-stone-50 rounded-2xl border border-stone-100 hover:border-amber-200 transition-colors">
                    <h4 className="font-bold text-stone-800 mb-2 flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-amber-500" />
                      {priority.title}
                    </h4>
                    <p className="text-sm text-stone-500 leading-relaxed">{priority.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2: Strategic Direction Note */}
            <div className="p-6 bg-stone-900 rounded-2xl text-white/70 text-sm text-center italic">
              This transformation is inherently long-term and dependent on policy consistency, industry participation, and market dynamics. The roadmap should therefore be understood as a <span className="font-bold">strategic direction, not a fixed prescription.</span>
            </div>
          </div>
        </motion.section>

        {/* Closing Statement */}
        <motion.section 
          variants={itemVariants}
          className="bg-sustainability-green rounded-[2.5rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden text-center"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full" />
            <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-white rounded-full" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h3 className="text-4xl md:text-5xl font-bold">Closing Statement</h3>
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              This report positions ESG not as a set of isolated initiatives, but as a <span className="font-bold">coordinated system of digital infrastructure, ecosystem participation, and financial alignment</span>.
            </p>
            <div className="h-px w-24 bg-white/30 mx-auto" />
            <p className="text-lg text-white/80 leading-relaxed">
              By bridging proven practices from India with Malaysia’s national priorities, it outlines a <span className="text-white font-bold underline underline-offset-8 decoration-white/30">pragmatic pathway</span> for Malaysia to transition from compliance-driven adoption to system-level leadership in the Net Zero transition.
            </p>
            
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
