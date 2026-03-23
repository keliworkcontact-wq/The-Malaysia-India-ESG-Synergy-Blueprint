import { motion } from 'motion/react';
import { 
  Calendar, 
  Zap, 
  Globe, 
  ShieldCheck, 
  TrendingUp, 
  Cpu, 
  Users, 
  BarChart3
} from 'lucide-react';

export default function MacroBackgroundSection() {
  return (
    <div className="w-full">
      {/* 1.0 Title & Intro */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-corporate-blue mb-8 leading-tight">
              Section 1.0: <br />
              The Malaysia–India Strategic Alignment — <br />
              A New Frontier for ESG Resilience
            </h1>
            <div className="h-1.5 w-24 bg-sustainability-green mx-auto rounded-full mb-8" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-stone-600 leading-relaxed text-lg">
              The economic relationship between Southeast Asia and South Asia reached a significant milestone on <span className="font-bold text-corporate-blue">9 February 2026</span>, marked by the signing of <span className="font-bold">11 agreements and memoranda of understanding (MoUs)</span> between Malaysia and India under the <span className="font-bold">Comprehensive Strategic Partnership (CSP)</span> framework.
            </p>
            <p className="text-stone-600 leading-relaxed">
              This development represents more than diplomatic alignment. It reflects a strengthening of institutional trust and policy coordination, creating a rare window for deeper economic and industrial collaboration.
            </p>
            <p className="text-stone-600 leading-relaxed">
              From an ESG perspective, this alignment is particularly consequential. It establishes the foundation for cross-border sustainability integration—enabling both countries to move beyond traditional trade linkages toward coordinated low-carbon and industrial transformation.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="/india-malaysia-flag.png" 
              alt="Strategic Partnership" 
              className="rounded-3xl shadow-2xl w-full h-80 object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-sustainability-green text-white p-6 rounded-2xl shadow-xl hidden md:block">
              <p className="text-3xl font-bold">11</p>
              <p className="text-sm font-medium uppercase tracking-wider">Bilateral Agreements</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 1.1 Unpacking the "ESG Golden Opportunity" */}
      <section className="bg-stone-50 py-20 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col items-center text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-corporate-blue mb-8 leading-tight">
              Section 1.1: <br />
              Unpacking the “ESG Golden Opportunity”
            </h1>
            <p className="text-stone-600 max-w-2xl text-lg">
              Within the broader context of technological competition and shifting global financial dynamics, the Malaysia–India partnership can be understood as an emerging <span className="font-bold text-amber-600">“ESG Golden Opportunity.”</span>
            </p>
            <p className="text-stone-500 mt-4">
              This opportunity is driven by the convergence of several structural enablers:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Resilient ESG Value Chains",
                desc: "Strengthening regional supply chains in semiconductors and digital infrastructure to reduce exposure to global disruptions"
              },
              {
                icon: ShieldCheck,
                title: "Financial Enablers for ESG Transition",
                desc: "Leveraging bilateral mechanisms such as the Local Currency Settlement (LC-SF) to support capital flows for green transformation"
              },
              {
                icon: TrendingUp,
                title: "The Green Economy Leap",
                desc: "A shared commitment to Net Zero 2050, where Malaysia can leverage India’s scale and digital ESG capabilities to accelerate NIMP 2030 and NETR"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center mb-6 text-corporate-blue">
                  <item.icon className="w-6 h-6" />
                </div>
                <h6 className="text-lg font-bold text-stone-800 mb-3">{item.title}</h6>
                <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center space-y-12">
            <p className="text-stone-600">Together, these factors signal a system-level opportunity for accelerated ESG development.</p>
            <blockquote className="border-l-4 border-corporate-blue pl-6 py-2 text-left max-w-3xl mx-auto">
              <p className="text-stone-500 text-lg italic mb-2">This leads to a key strategic question:</p>
              <p className="text-corporate-blue text-2xl md:text-3xl font-bold leading-tight">
                Which corporate model offers the most relevant and transferable ESG architecture for Malaysia?
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* 1.2 Seizing the Opportunity — The HUL Strategic Shortcut */}
      <section className="max-w-7xl mx-auto px-8 py-20 border-t border-stone-100">
        <div className="space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-corporate-blue leading-tight">
              Section 1.2: <br />
              Seizing the Opportunity — The HUL Strategic Shortcut
            </h1>
          </motion.div>

          <div className="space-y-12">
            {/* Paragraph Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-stone-600 leading-relaxed text-xl">
                Capturing this opportunity requires more than policy ambition—it requires a <span className="font-bold text-corporate-blue">proven operational model</span>.
              </p>
              <p className="text-stone-600 leading-relaxed text-lg">
                In this context, <span className="font-bold">Hindustan Unilever Limited (HUL)</span> serves as a high-fidelity reference point. Operating under India’s <span className="font-bold">Business Responsibility and Sustainability Reporting (BRSR)</span> framework, HUL demonstrates how digitalization can be embedded into ESG execution at scale.
              </p>
              <p className="text-stone-600 leading-relaxed text-lg">
                Its model offers a potential <span className="font-bold text-corporate-blue">“strategic shortcut”</span> across three key dimensions:
              </p>
            </motion.div>

            {/* Images & Dimensions Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="space-y-4">
                  <div className="h-40 bg-corporate-blue rounded-3xl flex flex-col items-center justify-center text-white p-6 text-center">
                    <Cpu className="w-8 h-8 mb-2" />
                    <p className="text-xs font-bold uppercase tracking-tighter">Industrial Digitalization</p>
                  </div>
                  <div className="h-56 bg-stone-200 rounded-3xl overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=500" 
                      alt="Industry 4.0" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="h-56 bg-stone-200 rounded-3xl overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=500" 
                      alt="Teamwork" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="h-40 bg-sustainability-green rounded-3xl flex flex-col items-center justify-center text-white p-6 text-center">
                    <TrendingUp className="w-8 h-8 mb-2" />
                    <p className="text-xs font-bold uppercase tracking-tighter">Net Zero Acceleration</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-stone-50 p-8 md:p-12 rounded-[2.5rem] border border-stone-100"
              >
                <ul className="space-y-8">
                  {[
                    { title: "TVET Transformation", desc: "Aligning workforce capabilities with Industry 4.0 and ESG requirements" },
                    { title: "Industrial Digitalization", desc: "Applying AI-enabled systems to enhance supply chain efficiency and transparency" },
                    { title: "Net Zero Acceleration", desc: "Transitioning from static reporting toward real-time, audit-grade environmental monitoring" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-6">
                      <div className="w-8 h-8 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 mt-1">
                        <div className="w-2.5 h-2.5 rounded-full bg-corporate-blue" />
                      </div>
                      <div>
                        <p className="text-xl font-bold text-stone-800 mb-2">{item.title}</p>
                        <p className="text-stone-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.3 The Case for HUL — Why this Benchmark Matters */}
      <section className="bg-corporate-blue py-20 text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="space-y-16">
            <div className="space-y-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Section 1.3: <br />
                The Case for HUL — Why this Benchmark Matters
              </h1>
              <div className="space-y-6 text-left">
                <p className="text-lg text-white/80 leading-relaxed">
                  HUL’s relevance as a benchmark lies in its ability to integrate <span className="font-bold text-sustainability-green">operational scale with digital governance capability</span>.
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  Beyond being a consumer goods company, HUL operates as a data-driven ecosystem—successfully managing the complexities of an emerging market while maintaining strong ESG performance. This combination closely mirrors the structural conditions faced by Malaysia.
                </p>
              </div>
            </div>
            
            <blockquote className="border-l-4 border-sustainability-green pl-6 py-2 text-left max-w-4xl mx-auto">
              <p className="text-lg text-white/90 leading-relaxed mb-4">
                <span className="text-sustainability-green font-bold">Section 2 — Benchmark Audit</span> — therefore moves from strategic context to empirical analysis.
              </p>
              <p className="text-lg text-white/70 leading-relaxed italic">
                It evaluates HUL’s ESG performance (2023–2025) to identify the underlying mechanisms, technologies, and governance structures that can inform Malaysia’s ESG transformation pathway.
              </p>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}
