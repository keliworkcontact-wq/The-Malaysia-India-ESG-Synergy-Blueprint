import { motion } from 'motion/react';
import { 
  Target, 
  Clock, 
  TrendingUp, 
  Globe, 
  ShieldCheck, 
  Cpu, 
  Award,
  ChevronRight
} from 'lucide-react';

export default function ConclusionRoadmapSection() {
  const phases = [
    {
      title: "Short Term (1–2 Years)",
      subtitle: "Institutional Foundations & Human Capital",
      items: [
        {
          label: "Launch a Bilateral ESG Data-Sharing and Technology Transfer Platform",
          desc: "Utilize the CSP framework to establish a Malaysia–India ESG technology database. Priority will be given to introducing HUL’s Digital Discovery Factory (DDF) simulation architecture, enabling Malaysian manufacturers to evaluate decarbonization effects in virtual environments before significant capital commitment."
        },
        {
          label: "Pilot Digital TVET Exchange Programs",
          desc: "Address the talent gap in Industry 4.0 and ESG auditing by launching cross-border Technical and Vocational Education and Training (TVET) pilots. Digital curricula will cultivate local talent proficient in IoT maintenance and blockchain traceability, building the human capital required for the technical solutions detailed in Section 3."
        }
      ],
      icon: Clock,
      color: "blue"
    },
    {
      title: "Medium Term (3–5 Years)",
      subtitle: "Industrial Scaling & Financial Integration",
      items: [
        {
          label: "Scale Lighthouse Factory Models to Semiconductor and Food Sectors",
          desc: "Export HUL’s smart water management and Zero Liquid Discharge (ZLD) technologies from pilot plants to Malaysia’s strategic core industries. AI-driven resource efficiency models will be deployed to enhance global supply chain competitiveness."
        },
        {
          label: "Expand LC-SF-Based Green Commodity Trade",
          desc: "Fully activate the Local Currency Settlement Framework (LC-SF) to apply 'Green Exchange Rate Dividends' to palm oil and recycled plastic trade. Financial incentives will drive SMEs and smallholders to fulfill ESG compliance, achieving the dual benefits of de-dollarization and green transition."
        },
        {
          label: "Deploy Real-Time ESG Monitoring Networks",
          desc: "Complete the IoT sensor networking across Malaysia’s primary industrial zones and agricultural belts to establish a national-level, audit-grade environmental dashboard for real-time monitoring."
        }
      ],
      icon: TrendingUp,
      color: "emerald"
    },
    {
      title: "Long Term — 2050 Vision",
      subtitle: "Building a Regional Green Hub",
      items: [
        {
          label: "Malaysia–India High-Tech Low-Carbon Economic Corridor",
          desc: "The ultimate goal is to establish a low-carbon, high-technology economic corridor anchored by Malaysia–India collaboration, radiating across the ASEAN region."
        },
        {
          label: "Decentralized Regional Green Trade Network",
          desc: "Through matured blockchain-based compliance assets and the LC-SF settlement system, Malaysia will transition from a manufacturing center to the 'Heart of ASEAN’s Sustainability Transition.' By leveraging transparency, digital resilience, and financial innovation, Malaysia will redefine the standards for regional green trade."
        }
      ],
      icon: Globe,
      color: "amber"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto w-full py-20">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Section 4: Conclusion & Strategic Roadmap
        </motion.h2>
      </div>

      <div className="space-y-12">
        {/* 1. Report Summary */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 border border-white/20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-sustainability-green">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">1. Report Summary: From Vision to Systemic Implementation</h3>
          </div>
          <p className="text-lg text-white/80 leading-relaxed">
            This report provides a localized transformation blueprint for Malaysia, derived from a macro analysis of the Malaysia–India Comprehensive Strategic Partnership (CSP) and benchmarking Hindustan Unilever Limited’s (HUL) digital ESG leadership. By integrating the <span className="text-white font-bold">Digital Regenerative Agriculture Platform (RAP)</span>, the <span className="text-white font-bold">Shakti 2.0 Community Green Service Network</span>, and <span className="text-white font-bold">LC-SF Supply Chain Finance Optimization</span>, these initiatives form a data-driven and finance-powered closed-loop ecosystem. This roadmap directly aligns with Malaysia’s <span className="text-sustainability-green font-bold">NIMP 2030</span> and <span className="text-sustainability-green font-bold">NETR</span> national strategies while serving as a practical model for regional green transformation.
          </p>
        </motion.section>

        {/* 2. Phased Execution Pathway */}
        <section className="space-y-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-sustainability-green">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">2. Phased Execution Pathway</h3>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {phases.map((phase, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border border-stone-100">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center
                        ${phase.color === 'blue' ? 'bg-blue-50 text-blue-600' : 
                          phase.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' : 
                          'bg-amber-50 text-amber-600'}`}
                      >
                        <phase.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h4 className={`text-xl font-bold 
                          ${phase.color === 'blue' ? 'text-blue-600' : 
                            phase.color === 'emerald' ? 'text-emerald-600' : 
                            'text-amber-600'}`}
                        >
                          {phase.title}
                        </h4>
                        <p className="text-stone-500 font-medium">{phase.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {phase.items.map((item, i) => (
                      <div key={i} className="space-y-3">
                        <div className="flex items-start gap-3">
                          <ChevronRight className={`w-5 h-5 mt-1 shrink-0
                            ${phase.color === 'blue' ? 'text-blue-400' : 
                              phase.color === 'emerald' ? 'text-emerald-400' : 
                              'text-amber-400'}`} 
                          />
                          <h5 className="font-bold text-stone-800 leading-tight">{item.label}</h5>
                        </div>
                        <p className="text-sm text-stone-500 leading-relaxed pl-8">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. Analyst Commentary */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-sustainability-green rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">3. Analyst Commentary: Seizing a Historic Window of Opportunity</h3>
            </div>
            
            <div className="space-y-6 text-lg leading-relaxed text-white/90">
              <p>
                The current political stability, the surge in digitalization, and the warming of Malaysia–India bilateral relations have created a rare <span className="text-white font-bold">"policy window."</span> HUL’s journey proves that ESG is not a cost burden but a core competitiveness in the digital age.
              </p>
              <p>
                Through the phased implementation of this roadmap, Malaysia can leapfrog from being a <span className="italic">"passive complier"</span> to becoming a <span className="text-white font-bold">"strategic standard-setter."</span> I urge policymakers and industry leaders to act immediately, utilizing the strategic levers provided by the Malaysia–India CSP framework to embark on this journey toward the <span className="text-white font-bold">2050 Net Zero target</span>.
              </p>
            </div>
          </div>
          
          {/* Decorative element */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        </motion.section>
      </div>
    </div>
  );
}
