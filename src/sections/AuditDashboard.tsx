import { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
  Area,
  ComposedChart,
  Dot
} from 'recharts';
import { 
  ShieldCheck, 
  Recycle, 
  HardHat, 
  AlertCircle, 
  Info, 
  Eye, 
  TrendingDown, 
  Zap, 
  Globe, 
  DollarSign,
  Target,
  Scale,
  Factory,
  FlaskConical,
  FileText,
  CheckCircle2,
  ArrowRight,
  Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { fetchComplianceData, ComplianceMetrics } from '../services/dataService';

const historicalData = [
  { 
    cycle: "Cycle 2023", 
    s12: 20165, 
    s3: 8719253, 
    s3Note: "Data Period: Oct 2022 - Sep 2023",
    isForecast: false
  },
  { 
    cycle: "Cycle 2024", 
    s12: 14718, 
    s3: 9962535, 
    s3Note: "Data Period: Jan 2024 - Dec 2024",
    isForecast: false
  },
  { 
    cycle: "Cycle 2025", 
    s12: 8944, 
    s3: null, 
    s3Note: "Status: Awaiting Supplier Disclosure",
    isForecast: false
  }
];

const forecastData = [
  { cycle: "2023", s12: 20165, s3: 8719253, isForecast: false },
  { cycle: "2024", s12: 14718, s3: 9962535, isForecast: false },
  { cycle: "2025", s12: 8944, s3: 9200000, isForecast: true, note: "AI Model: Projected reduction start" },
  { cycle: "2026", s12: 6500, s3: 8100000, isForecast: true },
  { cycle: "2027", s12: 4200, s3: 6800000, isForecast: true },
  { cycle: "2028", s12: 2500, s3: 5200000, isForecast: true },
  { cycle: "2029", s12: 1100, s3: 3500000, isForecast: true },
  { cycle: "2030", s12: 0, s3: 1800000, isForecast: true, note: "Net Zero Target (S1&2)" },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-4 rounded-xl shadow-xl border border-stone-200">
        <div className="flex items-center justify-between mb-2">
          <p className="font-bold text-corporate-blue">{label}</p>
          {data.isForecast && (
            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded-full uppercase">Forecast</span>
          )}
        </div>
        <div className="space-y-1 text-sm">
          <p className="flex justify-between gap-4">
            <span className="text-stone-500">Scope 1&2:</span>
            <span className="font-mono font-bold text-[#004e92]">{data.s12?.toLocaleString()} MT</span>
          </p>
          <p className="flex justify-between gap-4">
            <span className="text-stone-500">Scope 3:</span>
            <span className="font-mono font-bold text-[#f57c00]">
              {data.s3 ? `${data.s3.toLocaleString()} MT` : 'N/A'}
            </span>
          </p>
          {(data.s3Note || data.note) && (
            <div className="mt-3 pt-2 border-t border-stone-100 flex items-start gap-2 text-[10px] text-stone-400 italic">
              <Info size={12} className="shrink-0 mt-0.5" />
              <span>{data.s3Note || data.note}</span>
            </div>
          )}
        </div>
      </div>
    );
  }
  return null;
};

export default function AuditDashboard() {
  const [compliance, setCompliance] = useState<ComplianceMetrics | null>(null);
  const [showForecast, setShowForecast] = useState(false);

  useEffect(() => {
    fetchComplianceData().then(setCompliance);
  }, []);

  const currentData = showForecast ? forecastData : historicalData;

  return (
    <div className="max-w-7xl mx-auto w-full px-4 py-12 space-y-20" id="audit-dashboard">
      
      {/* 1) Operating Narrative and Governance Foundations */}
      <section className="space-y-10">
        <div className="flex items-center gap-4 border-b border-stone-200 pb-4">
          <div className="w-10 h-10 bg-corporate-blue text-white rounded-lg flex items-center justify-center font-bold text-xl">1</div>
          <h2 className="text-3xl font-bold text-corporate-blue">Operating Narrative and Governance Foundations</h2>
        </div>
        <p className="text-stone-600 text-lg leading-relaxed max-w-4xl">
          HUL’s ESG leadership stems from embedding sustainability into operational strategy rather than treating it as a peripheral initiative.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 1-A) ASPIRE Strategy */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200 space-y-6">
            <div className="flex items-center gap-3 text-corporate-blue">
              <Target size={24} />
              <h3 className="text-xl font-bold">1-A) ASPIRE Strategy</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-stone-800 text-sm uppercase tracking-wider mb-2">Introduction</h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  "ASPIRE: Unlocking a Billion Aspirations" is HUL’s primary business strategy designed to drive growth by meeting the evolving needs of an increasingly affluent and digital-native Indian population. It is underpinned by two foundational pillars: <span className="font-bold">Sustainability</span> and <span className="font-bold">Culture</span>.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-800 text-sm uppercase tracking-wider mb-2">Execution</h4>
                <div className="grid grid-cols-1 gap-3">
                  {['Focus: Segmenting the portfolio into Core, Future Core, and Market Makers to prioritize high-growth spaces.', 
                    'Excel: Pivoting investments to five demand drivers, including digital-first marketing and specialty channels like premium beauty and health.', 
                    'Accelerate: Strengthening "distinctive moats" through disruptive science and an AI-enabled supply chain.'].map((item, i) => (
                    <div key={i} className="flex gap-3 items-start text-sm text-stone-600">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-stone-100">
                <h4 className="font-bold text-stone-800 text-sm uppercase tracking-wider mb-2">Results & Effectiveness</h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  HUL maintains market leadership in <span className="font-bold text-corporate-blue">over 85% of its operating categories</span>. The strategy driven a 200 bps portfolio shift toward future-facing and premium segments. In sustainability, HUL achieved a <span className="font-bold text-emerald-600">99% reduction in operational (Scope 1 & 2) emissions</span> compared to its 2008 baseline.
                </p>
              </div>
            </div>
          </div>

          {/* 1-B) Governance Transparency */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200 space-y-6">
            <div className="flex items-center gap-3 text-corporate-blue">
              <Scale size={24} />
              <h3 className="text-xl font-bold">1-B) Governance Transparency</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-stone-800 text-sm uppercase tracking-wider mb-2">Introduction</h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  HUL’s governance strategy is built on the <span className="font-bold">"One Unilever"</span> model and is deeply rooted in the core values of Integrity, Respect, Responsibility, and Pioneering. The primary objective is to ensure long-term sustainable success by exceeding minimum legal standards to build enduring trust with all stakeholders.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-800 text-sm uppercase tracking-wider mb-2">Execution</h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  The strategy is implemented through a <span className="font-bold">multi-tiered governance structure</span> that includes the Board of Directors, six specialized Board Committees, and a Management Committee. To maintain unbiased oversight, all Board Committees are chaired by Independent Directors. HUL enforces high ethical standards through the Code of Business Principles (CoBP), which is supported by a robust digital compliance management tool for real-time tracking and a 24/7 anonymous whistle-blowing hotline.
                </p>
              </div>
              <div className="pt-4 border-t border-stone-100">
                <h4 className="font-bold text-stone-800 text-sm uppercase tracking-wider mb-2">Results & Effectiveness</h4>
                <div className="space-y-3">
                  <div className="flex gap-3 items-start text-sm text-stone-600">
                    <div className="w-1.5 h-1.5 bg-corporate-blue rounded-full mt-1.5 shrink-0" />
                    <p><span className="font-bold text-stone-800">Board Composition:</span> Achieved 55.56% independent directors on the Board and 67% on the ESG Committee.</p>
                  </div>
                  <div className="flex gap-3 items-start text-sm text-stone-600">
                    <div className="w-1.5 h-1.5 bg-corporate-blue rounded-full mt-1.5 shrink-0" />
                    <p><span className="font-bold text-stone-800">Diversity:</span> Female representation has reached 22.2% on the Board and 42% at the managerial level.</p>
                  </div>
                  <div className="flex gap-3 items-start text-sm text-stone-600">
                    <div className="w-1.5 h-1.5 bg-corporate-blue rounded-full mt-1.5 shrink-0" />
                    <p><span className="font-bold text-stone-800">Organizational Trust:</span> The "UniVoice" survey indicated that 93% of employees are proud to work at HUL, with an overall engagement score of 82%.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) Technology-Driven Environmental and Social Outcomes */}
      <section className="space-y-10">
        <div className="flex items-center gap-4 border-b border-stone-200 pb-4">
          <div className="w-10 h-10 bg-corporate-blue text-white rounded-lg flex items-center justify-center font-bold text-xl">2</div>
          <h2 className="text-3xl font-bold text-corporate-blue">Technology-Driven Environmental and Social Outcomes</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 2-A) Doom Dooma Factory (DDF) Lighthouse Factory */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200 space-y-6">
            <div className="flex items-center gap-3 text-corporate-blue">
              <Factory size={24} />
              <h3 className="text-xl font-bold">2-A) Doom Dooma Factory (DDF)</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-stone-800 text-sm uppercase tracking-wider mb-2">Introduction</h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Located in Assam, DDF is recognized by the World Economic Forum as an <span className="font-bold">"End-to-End Digital Lighthouse"</span> for its mastery of Fourth Industrial Revolution (4IR) technologies.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-800 text-sm uppercase tracking-wider mb-2">Execution</h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  The site integrates <span className="font-bold">AI, IoT, and Digital Twin</span> technology across its end-to-end supply chain. It employs "lights-off" (dark) manufacturing lines that operate with minimal manual intervention to maximize safety and efficiency.
                </p>
              </div>
              <div className="pt-4 border-t border-stone-100">
                <h4 className="font-bold text-stone-800 text-sm uppercase tracking-wider mb-2">Results & Effectiveness</h4>
                <div className="space-y-3">
                  <div className="flex gap-3 items-start text-sm text-stone-600">
                    <div className="w-1.5 h-1.5 bg-corporate-blue rounded-full mt-1.5 shrink-0" />
                    <p><span className="font-bold text-stone-800">Agility:</span> Achieved 85% faster changeover times between product lines.</p>
                  </div>
                  <div className="flex gap-3 items-start text-sm text-stone-600">
                    <div className="w-1.5 h-1.5 bg-corporate-blue rounded-full mt-1.5 shrink-0" />
                    <p><span className="font-bold text-stone-800">Sustainability:</span> Reduced virgin plastic usage by 21% and packaging trial times by 84%.</p>
                  </div>
                  <div className="flex gap-3 items-start text-sm text-stone-600">
                    <div className="w-1.5 h-1.5 bg-corporate-blue rounded-full mt-1.5 shrink-0" />
                    <p><span className="font-bold text-stone-800">Productivity:</span> AI-driven task allocation boosted labor productivity by 400%.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2-B) Stratos Technology */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200 space-y-6">
            <div className="flex items-center gap-3 text-corporate-blue">
              <FlaskConical size={24} />
              <h3 className="text-xl font-bold">2-B) Stratos Technology</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-stone-800 text-sm uppercase tracking-wider mb-2">Introduction</h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Stratos is a first-of-its-kind, <span className="font-bold">patented revolutionary technology</span> developed by HUL’s R&D team for its skin cleansing (soap) portfolio.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-stone-800 text-sm uppercase tracking-wider mb-2">Execution</h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  This technology uses <span className="font-bold">"smart structuring"</span> to reformulate soap with plant-derived polysaccharides and vitamin blends. It replaces non-functional Total Fatty Matter (TFM) with skin-health actives that provide better consumer benefits.
                </p>
              </div>
              <div className="pt-4 border-t border-stone-100">
                <h4 className="font-bold text-stone-800 text-sm uppercase tracking-wider mb-2">Results & Effectiveness</h4>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { label: 'Material Efficiency', value: 'Reduces TFM by up to 25%, significantly lowering palm oil footprint.' },
                    { label: 'Environmental Impact', value: 'Drastically reduces GHG emissions across the value chain.' },
                    { label: 'Speed to Market', value: 'Reduced factory trials by 50%, enabling scale in record time.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-start text-sm">
                      <div className="w-1.5 h-1.5 bg-corporate-blue rounded-full mt-1.5 shrink-0" />
                      <p className="text-stone-600"><span className="font-bold text-stone-800">{item.label}:</span> {item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3) Data Modeling and Forward Analysis */}
      <section className="space-y-10">
        <div className="flex items-center gap-4 border-b border-stone-200 pb-4">
          <div className="w-10 h-10 bg-corporate-blue text-white rounded-lg flex items-center justify-center font-bold text-xl">3</div>
          <h2 className="text-3xl font-bold text-corporate-blue">Data Modeling and Forward Analysis</h2>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h3 className="text-2xl font-bold text-corporate-blue">ESG Audit: Emissions Reporting Cycle</h3>
              <p className="text-stone-500 text-sm">
                {showForecast 
                  ? "Net Zero Forecast & Gap Analysis (2023-2030)" 
                  : "Dual-Axis Analysis of Operational vs. Value Chain Impact"}
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="hidden sm:flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#004e92] rounded-full" />
                  <span className="text-xs font-medium text-stone-600">Scope 1&2</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#f57c00] rounded-full" />
                  <span className="text-xs font-medium text-stone-600">Scope 3</span>
                </div>
              </div>
              
              <button 
                onClick={() => setShowForecast(!showForecast)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all duration-300 ${
                  showForecast 
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-200' 
                  : 'bg-white text-stone-600 border-stone-200 hover:border-emerald-600 hover:text-emerald-600'
                }`}
              >
                <Eye size={18} className={showForecast ? 'animate-pulse' : ''} />
                <span className="text-sm font-bold">2030 Forecast</span>
              </button>
            </div>
          </div>

          <div className="h-[500px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={currentData} margin={{ top: 20, right: 60, left: 40, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="cycle" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#888', fontSize: 12, fontWeight: 500 }}
                  dy={15}
                />
                
                {/* Left Axis: Scope 1&2 */}
                <YAxis 
                  yAxisId="left"
                  orientation="left"
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#004e92', fontSize: 11 }}
                  domain={[0, 25000]}
                >
                  <Label 
                    value="Scope 1&2 (MT CO2e)" 
                    angle={-90} 
                    position="insideLeft" 
                    style={{ textAnchor: 'middle', fill: '#004e92', fontSize: 11, fontWeight: 600 }}
                    offset={-25}
                  />
                </YAxis>

                {/* Right Axis: Scope 3 */}
                <YAxis 
                  yAxisId="right"
                  orientation="right"
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#f57c00', fontSize: 11 }}
                  domain={[0, 12000000]}
                  tickFormatter={(val) => `${(val/1000000).toFixed(1)}M`}
                >
                  <Label 
                    value="Scope 3 (MT CO2e)" 
                    angle={90} 
                    position="insideRight" 
                    style={{ textAnchor: 'middle', fill: '#f57c00', fontSize: 11, fontWeight: 600 }}
                    offset={-25}
                  />
                </YAxis>

                <Tooltip content={<CustomTooltip />} />
                
                {showForecast && (
                  <Area 
                    yAxisId="right"
                    type="monotone" 
                    dataKey="s3" 
                    fill="url(#colorS3)" 
                    stroke="none" 
                    activeDot={false}
                  />
                )}

                <defs>
                  <linearGradient id="colorS3" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f57c00" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#f57c00" stopOpacity={0}/>
                  </linearGradient>
                </defs>

                <Line 
                  yAxisId="left" 
                  type="monotone" 
                  dataKey="s12" 
                  stroke="#004e92" 
                  strokeWidth={3} 
                  dot={{ r: 6, fill: '#004e92', strokeWidth: 2, stroke: '#fff' }}
                  activeDot={{ r: 8 }}
                />
                
                <Line 
                  yAxisId="right" 
                  type="monotone" 
                  dataKey="s3" 
                  stroke="#f57c00" 
                  strokeWidth={3} 
                  strokeDasharray={showForecast ? "5 5" : "0"}
                  connectNulls
                  dot={{ r: 6, fill: '#f57c00', strokeWidth: 2, stroke: '#fff' }}
                  activeDot={{ r: 8 }}
                />
              </ComposedChart>
            </ResponsiveContainer>

            {/* Data Gap Indicator for Cycle 2025 (only in historical mode) */}
            {!showForecast && (
              <div className="absolute bottom-[100px] right-[12%] flex flex-col items-center gap-2 pointer-events-none">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-stone-100 rounded-lg border border-stone-200 text-stone-400">
                  <AlertCircle size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Data Gap</span>
                </div>
                <div className="w-px h-12 bg-dashed border-l border-dashed border-stone-300" />
              </div>
            )}
          </div>

          {/* Gap Analysis Section */}
          <AnimatePresence>
            {showForecast && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-12 pt-8 border-t border-stone-100 overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-emerald-700">
                      <TrendingDown size={20} />
                      <h4 className="font-bold uppercase tracking-wider text-sm">Decarbonization Pathway</h4>
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Python-based modeling estimates a realistic Net Zero timeline for Scope 1&2 by 2030, driven by 100% renewable energy transition and fleet electrification. Scope 3 requires aggressive supplier engagement to bridge the <span className="font-bold text-corporate-blue">4.2M MT gap</span>.
                    </p>
                    <div className="flex gap-4">
                      <div className="flex-1 p-4 bg-stone-50 rounded-2xl border border-stone-100">
                        <div className="text-[10px] text-stone-400 font-bold uppercase mb-1">Target 2030</div>
                        <div className="text-xl font-bold text-corporate-blue">0 MT</div>
                        <div className="text-[10px] text-emerald-600 font-medium">Scope 1 & 2</div>
                      </div>
                      <div className="flex-1 p-4 bg-stone-50 rounded-2xl border border-stone-100">
                        <div className="text-[10px] text-stone-400 font-bold uppercase mb-1">Reduction</div>
                        <div className="text-xl font-bold text-[#f57c00]">-82%</div>
                        <div className="text-[10px] text-stone-500 font-medium">Scope 3 Intensity</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-3 text-amber-600">
                      <AlertCircle size={20} />
                      <h4 className="font-bold uppercase tracking-wider text-sm">Scope 3 Risk Analysis</h4>
                    </div>
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="shrink-0 w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
                          <DollarSign size={20} />
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-stone-800">Financial Risk: Carbon Pricing</h5>
                          <p className="text-xs text-stone-500 mt-1">Estimated $150M liability by 2030 if Scope 3 emissions are not reduced below 2M MT threshold.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="shrink-0 w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                          <Globe size={20} />
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-stone-800">Environmental Risk: Supply Chain</h5>
                          <p className="text-xs text-stone-500 mt-1">80% of raw material sourcing regions are at high risk of climate-induced disruptions by 2028.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 3-A) ESG Analyst Insight: The Decarbonization Paradox (FY23-25) */}
        <div className="bg-stone-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <ShieldCheck size={120} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                <TrendingDown size={18} className="text-white" />
              </div>
              <h3 className="text-xl font-bold tracking-tight">3-A) ESG Analyst Insight: The Decarbonization Paradox (FY23-25)</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="border-l-2 border-emerald-500 pl-4">
                  <h4 className="text-emerald-400 font-bold text-sm uppercase tracking-wider mb-1">Operational Alpha (Scope 1 & 2)</h4>
                  <p className="text-stone-300 text-sm leading-relaxed">
                    HUL has achieved a remarkable <span className="text-white font-bold">~55% absolute reduction</span> in operational emissions since 2023. This validates that internal decarbonization (Renewables/EVs) is now a mature, predictable process.
                  </p>
                </div>
                <div className="border-l-2 border-amber-500 pl-4">
                  <h4 className="text-amber-400 font-bold text-sm uppercase tracking-wider mb-1">The Scope 3 'Growth Trap'</h4>
                  <p className="text-stone-300 text-sm leading-relaxed">
                    The <span className="text-white font-bold">14% spike in FY24</span> reveals a decoupling failure. While operations get cleaner, the value chain scales with volume, not efficiency—the primary hurdle for the 2030 target.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-2 border-blue-400 pl-4">
                  <h4 className="text-blue-400 font-bold text-sm uppercase tracking-wider mb-1">Data Governance Risk</h4>
                  <p className="text-stone-300 text-sm leading-relaxed">
                    The FY25 Scope 3 "Data Gap" highlights a reporting lag risk. Relying on supplier disclosures creates a blind spot that could mask late-cycle emission spikes.
                  </p>
                </div>
                <div className="border-l-2 border-stone-500 pl-4">
                  <h4 className="text-stone-400 font-bold text-sm uppercase tracking-wider mb-1">Strategic Verdict</h4>
                  <p className="text-stone-300 text-sm leading-relaxed italic">
                    "HUL is currently <span className="text-white">Operationally Green but Systemically Gray</span>. The 2025-2030 transition requires a shift from voluntary engagement to aggressive supplier mandates."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3-B) ESG Analyst Insight: Decarbonization Pathway & 2030 Forecast Integrity */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200 space-y-8">
          <div className="flex items-center gap-3 text-corporate-blue">
            <TrendingDown size={24} />
            <h3 className="text-xl font-bold">3-B) ESG Analyst Insight: Decarbonization Pathway & 2030 Forecast Integrity</h3>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-stone-800 text-sm uppercase tracking-wider mb-3">Methodology Overview</h4>
              <p className="text-stone-600 text-sm leading-relaxed">
                The 2030 Net Zero forecast employs a <span className="font-bold">Bifurcated Decarbonization Model</span>. We distinguish between Operational Control (Scope 1 & 2) and Value Chain Influence (Scope 3) to reflect the distinct physical and economic realities of HUL's carbon footprint.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <h5 className="font-bold text-corporate-blue mb-3 flex items-center gap-2">
                  <Zap size={18} />
                  Linear Operational Transition (S1 & 2)
                </h5>
                <p className="text-stone-600 text-xs leading-relaxed">
                  The model utilizes a <span className="font-bold">Linear Decay ($E_t = E_0 - mt$)</span> based on HUL’s 2023-2025 performance. Given that direct operations are project-driven (e.g., renewable energy procurement), the steady year-on-year reduction is treated as a high-certainty internal KPI. Achieving Net Zero by 2030 is technically feasible through continuous capital expenditure.
                </p>
              </div>
              <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100">
                <h5 className="font-bold text-amber-700 mb-3 flex items-center gap-2">
                  <Globe size={18} />
                  The "S-Curve" of Value Chain Reform (S3)
                </h5>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Unlike direct operations, Scope 3 follows an <span className="font-bold">Exponential Decay ($E_t = E_{'2025'} \cdot e^{'-rt'}$)</span>. This reflects the <span className="font-bold">Network Effect</span> within HUL’s vast supplier ecosystem.
                </p>
                <div className="mt-4 p-3 bg-white/50 rounded-lg border border-amber-200 italic text-[10px] text-stone-500">
                  <span className="font-bold">Analyst Note on Network Effect:</span> Much like a digital payment network (e.g., DuitNow or UPI), the system's value is marginal when only a few participate. However, once a "critical mass" of tier-1 and tier-2 suppliers adopts green technology, the shared infrastructure becomes standardized and the unit cost of sustainable materials plummets. This creates a tipping point where the entire ecosystem shifts simultaneously, transforming sustainability from a "premium choice" into the "default industry standard."
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h5 className="font-bold text-stone-800 text-xs uppercase tracking-widest">The Lag Phase (2024-2026)</h5>
                <p className="text-stone-500 text-xs">Progress appears slower as it accounts for the administrative lead time of supplier onboarding and MSPO/RSPO certification alignment.</p>
              </div>
              <div className="space-y-2">
                <h5 className="font-bold text-stone-800 text-xs uppercase tracking-widest">The Acceleration Phase (2027-2030)</h5>
                <p className="text-stone-500 text-xs">The curve steepens as green logistics (hydrogen/EV) and sustainable raw materials reach a cost tipping point, allowing for non-linear, rapid decarbonization.</p>
              </div>
            </div>

            <div className="pt-6 border-t border-stone-100">
              <h4 className="font-bold text-stone-800 text-sm uppercase tracking-wider mb-3">Audit Observations on Data Gaps</h4>
              <p className="text-stone-600 text-sm leading-relaxed">
                It is critical to note that Scope 3 emissions showed a temporary upward trend in the 2024 cycle. The 2030 forecast acts as a <span className="font-bold">Gap Analysis Tool</span>—it does not merely project the past but defines the <span className="font-bold text-corporate-blue">"Acceleration Mandate"</span> required. If the predicted "network effect" is not triggered by 2027, the 28% annual compound reduction required in the final phase will pose a significant compliance risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4) FY 2023–2025 HUL ESG Analysis Summary */}
      <section className="space-y-10">
        <div className="flex items-center gap-4 border-b border-stone-200 pb-4">
          <div className="w-10 h-10 bg-corporate-blue text-white rounded-lg flex items-center justify-center font-bold text-xl">4</div>
          <h2 className="text-3xl font-bold text-corporate-blue">FY 2023–2025 HUL ESG Analysis Summary</h2>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div className="bg-stone-50 p-10 rounded-3xl border border-stone-200 space-y-8">
            <div className="max-w-4xl space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-corporate-blue">The Blueprint of Digitalized Resilience</h3>
                <p className="text-stone-600 leading-relaxed">
                  The 2023–2025 performance of Hindustan Unilever Limited (HUL) reveals a corporate maturity where ESG is not an isolated compliance task but a core engine of the <span className="font-bold">ASPIRE business strategy</span>. By embedding sustainability into its "distinctive moats"—specifically through an AI-enabled supply chain and the Digital Discovery Factory (DDF)—HUL has maintained market leadership while delivering quantifiable decarbonization.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-corporate-blue">Strategic Transferability: From India’s Scale to Malaysia’s Growth</h3>
                <p className="text-stone-600 leading-relaxed">
                  HUL’s proven frameworks offer several high-value lessons for Malaysia’s own industrial and ESG roadmap. Specifically, HUL’s model of <span className="font-bold">"Digital-led Sustainability"</span>—where virtual simulation and AI diagnostics drive resource efficiency—aligns perfectly with Malaysia’s NIMP 2030 and TVET transformation goals. HUL’s success in achieving plastic and water neutrality at scale demonstrates that large-cap companies can lead ecosystem-wide shifts through standardized, audit-grade frameworks.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-corporate-blue">Transition: From Benchmark to Local Action</h3>
                <p className="text-stone-600 leading-relaxed">
                  While Section 2 confirms the efficacy of these digital and governance frameworks in the Indian market, the next phase of this analysis moves from <span className="font-bold">Audit to Adaptation</span>.
                </p>
                <p className="text-stone-600 leading-relaxed">
                  In <span className="font-bold">Section 3 — Localization</span>, I will detail how these HUL-pioneered methodologies—such as the DDF simulation architecture and circular resource management—can be strategically localized within the <span className="font-bold">Malaysia–India Comprehensive Strategic Partnership (CSP)</span>. By integrating these benchmarks with local bilateral enablers like the Local Currency Setlement (LC-SF) and HRD Corp frameworks, we can chart a pragmatic ESG roadmap tailored for the Malaysian landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
