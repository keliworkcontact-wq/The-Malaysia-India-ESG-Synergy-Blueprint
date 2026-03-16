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
    <div className="max-w-6xl mx-auto w-full py-20">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-corporate-blue mb-4"
        >
          Section 1: Macro Background
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl font-semibold text-stone-700 max-w-3xl mx-auto"
        >
          The Malaysia–India Strategic Alignment: A New Frontier for ESG Resilience
        </motion.h3>
      </div>

      <div className="space-y-16">
        {/* 1) The Strategic Catalyst */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 text-corporate-blue">
              <Calendar className="w-6 h-6" />
              <h4 className="text-xl font-bold uppercase tracking-wider">1) The Strategic Catalyst</h4>
            </div>
            <h5 className="text-2xl font-bold text-stone-800">A Milestone in Bilateral Relations</h5>
            <p className="text-stone-600 leading-relaxed">
              The landscape of Southeast Asian and South Asian economic relations reached a historic turning point on <span className="font-bold text-corporate-blue">9 February 2026</span>. As reported by <span className="italic">eNanyang</span>, the signing of <span className="font-bold">11 agreements and memoranda of understanding (MoUs)</span> between Malaysia and India signals a profound institutional alignment under the <span className="font-bold">Comprehensive Strategic Partnership (CSP)</span> framework.
            </p>
            <p className="text-stone-600 leading-relaxed">
              This milestone is more than a diplomatic formality; it is a manifestation of India’s growing confidence in the political and economic stability of Malaysia’s current administration. This "policy window" provides a rare, coordinated opportunity for both nations to move beyond traditional trade complementarity and toward high-level industrial and sustainability transformation.
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
              alt="India and Malaysia Strategic Partnership" 
              className="rounded-3xl shadow-2xl w-full h-80 object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-sustainability-green text-white p-6 rounded-2xl shadow-xl hidden md:block">
              <p className="text-3xl font-bold">11</p>
              <p className="text-sm font-medium uppercase tracking-wider">Bilateral Agreements & MoUs</p>
            </div>
          </motion.div>
        </section>

        {/* 2) Unpacking the "ESG Golden Opportunity" */}
        <section className="bg-stone-50 rounded-[3rem] p-8 md:p-16 border border-stone-200">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="flex items-center gap-3 text-amber-600 mb-4">
              <Zap className="w-6 h-6" />
              <h4 className="text-xl font-bold uppercase tracking-wider">2) Unpacking the "ESG Golden Opportunity"</h4>
            </div>
            <p className="text-stone-600 max-w-2xl">
              In an era defined by intensifying technological competition and the global trend of de-dollarization, the Malaysia–India collaboration has evolved into what I identify as the "ESG Golden Opportunity."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Geopolitical Resilience",
                desc: "Strengthening regional value chains in semiconductors and digital infrastructure to hedge against global supply chain fragility."
              },
              {
                icon: ShieldCheck,
                title: "Economic Sovereignty",
                desc: "Utilizing bilateral enablers like the Local Currency Settlement (LC-SF) to reduce reliance on external currencies while funding green transitions."
              },
              {
                icon: TrendingUp,
                title: "The Green Economy Leap",
                desc: "A mutual commitment to the 2050 Net Zero target, where Malaysia can leverage India’s massive scale of ESG digitalization to accelerate its own NIMP 2030 and NETR goals."
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
        </section>

        {/* 3) Seizing the Moment */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-40 bg-corporate-blue rounded-3xl flex flex-col items-center justify-center text-white p-6 text-center">
                  <Cpu className="w-8 h-8 mb-2" />
                  <p className="text-xs font-bold uppercase tracking-tighter">Industrial Digitalization</p>
                </div>
                <div className="h-56 bg-stone-200 rounded-3xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=500" 
                    alt="Industry 4.0" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-56 bg-stone-200 rounded-3xl overflow-hidden">
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
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 order-1 md:order-2"
          >
            <div className="flex items-center gap-3 text-corporate-blue">
              <BarChart3 className="w-6 h-6" />
              <h4 className="text-xl font-bold uppercase tracking-wider">3) Seizing the Moment</h4>
            </div>
            <h5 className="text-2xl font-bold text-stone-800">The HUL Strategic Shortcut</h5>
            <p className="text-stone-600 leading-relaxed">
              To capitalize on this window, Malaysia requires more than just policy goals; it needs a <span className="font-bold">battle-tested operational blueprint</span>. I identify <span className="font-bold text-corporate-blue">Hindustan Unilever Limited (HUL)</span> as the high-fidelity reference for this transition.
            </p>
            <p className="text-stone-600 leading-relaxed">
              By adopting HUL’s digitalized ESG practices—proven under India’s rigorous <span className="font-bold">Business Responsibility and Sustainability Reporting (BRSR)</span> framework—Malaysia can achieve a "strategic shortcut" in three key areas:
            </p>
            <ul className="space-y-4">
              {[
                { title: "TVET Transformation", desc: "Harmonizing talent development with Industry 4.0 requirements." },
                { title: "Industrial Digitalization", desc: "Using AI-enabled supply chains to drive resource efficiency." },
                { title: "Net Zero Acceleration", desc: "Moving from paper-based compliance to real-time, audit-grade environmental monitoring." }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-corporate-blue" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-800">{item.title}</p>
                    <p className="text-sm text-stone-500">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

        {/* 4) The Case for HUL */}
        <section className="relative overflow-hidden bg-corporate-blue rounded-[3rem] p-8 md:p-16 text-white">
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 text-sustainability-green mb-6">
              <Users className="w-6 h-6" />
              <h4 className="text-xl font-bold uppercase tracking-wider">4) The Case for HUL</h4>
            </div>
            <h5 className="text-3xl font-bold mb-6">Why this Benchmark Matters</h5>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              One might ask: <span className="italic">Why focus on HUL?</span> The answer lies in the company’s unique position at the intersection of extreme operational scale and cutting-edge digital governance. HUL is not merely a consumer goods company; it is a data-driven ecosystem that has successfully navigated the complexities of an emerging market while maintaining global leadership in sustainability.
            </p>
            <div className="pt-8 border-t border-white/10">
              <p className="text-white/60 mb-4">In the following chapter—<span className="text-white font-bold">Section 2: Benchmark Audit</span>—I will conduct a deep-dive analysis into HUL’s ESG performance between 2023 and 2025.</p>
              <p className="text-white/60">By dissecting their <span className="text-sustainability-green font-bold uppercase tracking-widest">ASPIRE strategy</span> and AI-driven methodologies, we will demonstrate the tangible value this benchmark offers to Malaysia’s corporate and national sustainability roadmap.</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
            <div className="w-full h-full bg-gradient-to-l from-white to-transparent" />
          </div>
        </section>
      </div>
    </div>
  );
}
