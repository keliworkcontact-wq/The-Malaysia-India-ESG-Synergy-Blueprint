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
  Dot,
  BarChart,
  Bar,
  Legend,
  AreaChart,
  Cell
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

const transitionData = [
  { year: '2023', historical: 8.72, realistic: null, netZero: null, gap: 0 },
  { year: '2024', historical: 9.96, realistic: null, netZero: null, gap: 0 },
  { year: '2025', historical: null, realistic: 9.7, netZero: 9.2, gap: 0.5 },
  { year: '2026', historical: null, realistic: 9.2, netZero: 7.8, gap: 1.4 },
  { year: '2027', historical: null, realistic: 8.6, netZero: 6.0, gap: 2.6 },
  { year: '2028', historical: null, realistic: 7.8, netZero: 4.3, gap: 3.5 },
  { year: '2029', historical: null, realistic: 7.0, netZero: 3.0, gap: 4.0 },
  { year: '2030', historical: null, realistic: 6.2, netZero: 1.8, gap: 4.4 },
];

const leverData = [
  { 
    name: '2030 Potential', 
    'Ingredient Reformulation': 0.7, 
    'Recycled Packaging': 0.2, 
    'EV Logistics': 0.15, 
    'Supplier Efficiency Programs': 0.25 
  }
];

const adoptionData = [
  { year: '2024', rate: 10 },
  { year: '2025', rate: 18 },
  { year: '2026', rate: 28 },
  { year: '2027', rate: 42 },
  { year: '2028', rate: 55 },
  { year: '2029', rate: 65 },
  { year: '2030', rate: 75 },
];

const modelData = [
  { year: '2024', adoption: 12, baselineEmissions: 9.96, modelEmissions: 9.36, delayedEmissions: 9.96, adoptionContribution: 0.60, baselineContribution: 0.00 },
  { year: '2025', adoption: 18, baselineEmissions: 9.20, modelEmissions: 8.37, delayedEmissions: 9.20, adoptionContribution: 0.83, baselineContribution: 0.76 },
  { year: '2026', adoption: 28, baselineEmissions: 8.51, modelEmissions: 7.31, delayedEmissions: 7.99, adoptionContribution: 1.20, baselineContribution: 1.45 },
  { year: '2027', adoption: 42, baselineEmissions: 7.86, modelEmissions: 6.21, delayedEmissions: 7.15, adoptionContribution: 1.65, baselineContribution: 2.10 },
  { year: '2028', adoption: 58, baselineEmissions: 7.26, modelEmissions: 5.15, delayedEmissions: 6.24, adoptionContribution: 2.11, baselineContribution: 2.70 },
  { year: '2029', adoption: 68, baselineEmissions: 6.71, modelEmissions: 4.43, delayedEmissions: 5.30, adoptionContribution: 2.28, baselineContribution: 3.25 },
  { year: '2030', adoption: 75, baselineEmissions: 6.20, modelEmissions: 3.87, delayedEmissions: 4.40, adoptionContribution: 2.33, baselineContribution: 3.76 },
];

const CustomAdoptionTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-xl shadow-xl border border-stone-200">
        <p className="font-bold text-corporate-blue mb-2">{label}</p>
        <p className="flex justify-between gap-4 text-xs">
          <span className="text-stone-500">Adoption Rate:</span>
          <span className="font-mono font-bold text-blue-600">{payload[0].value}%</span>
        </p>
      </div>
    );
  }
  return null;
};

const CustomEmissionsTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-xl shadow-xl border border-stone-200">
        <p className="font-bold text-corporate-blue mb-2">{label}</p>
        <div className="space-y-1 text-xs">
          {payload.map((entry: any, index: number) => (
            <p key={index} className="flex justify-between gap-4">
              <span className="text-stone-500">{entry.name}:</span>
              <span className="font-mono font-bold" style={{ color: entry.color }}>
                {entry.value.toFixed(2)} Mt
              </span>
            </p>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

const CustomTransitionTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-xl shadow-xl border border-stone-200">
        <p className="font-bold text-corporate-blue mb-2">{label}</p>
        <div className="space-y-1 text-xs">
          {payload.map((entry: any, index: number) => (
            <p key={index} className="flex justify-between gap-4">
              <span className="text-stone-500">{entry.name}:</span>
              <span className="font-mono font-bold" style={{ color: entry.color }}>
                {entry.value.toFixed(2)}M MT
              </span>
            </p>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

const CustomGapTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const realistic = payload.find((p: any) => p.dataKey === 'realistic')?.value || 0;
    const netZero = payload.find((p: any) => p.dataKey === 'netZero')?.value || 0;
    const gap = realistic - netZero;
    
    return (
      <div className="bg-white p-4 rounded-xl shadow-xl border border-stone-200">
        <p className="font-bold text-corporate-blue mb-2">{label}</p>
        <div className="space-y-1 text-xs">
          <p className="flex justify-between gap-4">
            <span className="text-stone-500">Realistic:</span>
            <span className="font-mono font-bold text-blue-600">{realistic.toFixed(2)}M</span>
          </p>
          <p className="flex justify-between gap-4">
            <span className="text-stone-500">Target:</span>
            <span className="font-mono font-bold text-emerald-600">{netZero.toFixed(2)}M</span>
          </p>
          <p className="flex justify-between gap-4 pt-1 border-t border-stone-100">
            <span className="text-stone-800 font-bold">Gap:</span>
            <span className="font-mono font-bold text-red-600">{gap.toFixed(2)}M MT</span>
          </p>
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

        {/* 2-C) Adoption-Driven Emission Impact Model */}
        <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-stone-200 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-100 pb-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-corporate-blue">
                <TrendingDown size={28} />
                <h3 className="text-2xl font-bold">2-C) Adoption-Driven Emission Impact Model</h3>
              </div>
              <p className="text-stone-500 max-w-2xl">
                Quantifying the transmission mechanism between supplier ESG adoption and absolute Scope 3 decarbonization (2024–2030).
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Baseline (E₀)</p>
                <p className="text-xl font-mono font-bold text-corporate-blue">9.96 MtCO₂e</p>
              </div>
              <div className="w-px h-10 bg-stone-200" />
              <div className="text-right">
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Target Reduction</p>
                <p className="text-xl font-mono font-bold text-emerald-600">-61.1%</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Chart 1: Supplier Adoption Curve */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-stone-800 text-sm uppercase tracking-wider">Supplier Adoption Curve (S-Curve)</h4>
                <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-bold">Logistic Growth</span>
              </div>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={modelData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorAdopt" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2563eb" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: '#888', fontSize: 10 }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#888', fontSize: 10 }} unit="%" />
                    <Tooltip content={<CustomAdoptionTooltip />} />
                    <Area type="monotone" dataKey="adoption" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorAdopt)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <p className="text-[10px] text-stone-400 italic text-center">Inflection point projected at 2027 (~42% adoption)</p>
            </div>

            {/* Chart 2: Scope 3 Emissions Scenarios */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-stone-800 text-sm uppercase tracking-wider">Scope 3 Emission Scenarios</h4>
                <div className="flex gap-2">
                  <div className="flex items-center gap-1 text-[9px] font-bold text-stone-400"><div className="w-1.5 h-1.5 bg-stone-300 rounded-full" /> Baseline</div>
                  <div className="flex items-center gap-1 text-[9px] font-bold text-blue-600"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full" /> Model</div>
                </div>
              </div>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={modelData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: '#888', fontSize: 10 }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#888', fontSize: 10 }} />
                    <Tooltip content={<CustomEmissionsTooltip />} />
                    <Line type="monotone" dataKey="baselineEmissions" stroke="#a8a29e" strokeWidth={2} strokeDasharray="5 5" dot={false} />
                    <Line type="monotone" dataKey="modelEmissions" stroke="#2563eb" strokeWidth={3} dot={{ r: 4, fill: '#2563eb' }} />
                    <Line type="monotone" dataKey="delayedEmissions" stroke="#ef4444" strokeWidth={2} strokeDasharray="3 3" dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-[10px] text-red-500 font-bold text-center uppercase tracking-tighter">Red Line: 2-Year Adoption Delay Penalty</p>
            </div>

            {/* Chart 3: Reduction Contribution Analysis */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-stone-800 text-sm uppercase tracking-wider">Reduction Contribution</h4>
                <span className="text-[10px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full font-bold">Cumulative Impact</span>
              </div>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={modelData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: '#888', fontSize: 10 }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#888', fontSize: 10 }} />
                    <Tooltip />
                    <Legend iconType="circle" wrapperStyle={{ fontSize: '9px', fontWeight: 'bold', textTransform: 'uppercase', paddingTop: '10px' }} />
                    <Bar name="Organic Efficiency" dataKey="baselineContribution" stackId="a" fill="#d1d5db" />
                    <Bar name="Supplier Adoption" dataKey="adoptionContribution" stackId="a" fill="#059669" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-[10px] text-stone-400 italic text-center">Adoption accounts for ~38% of total 2030 reduction potential</p>
            </div>
          </div>

          {/* Model Insights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-stone-100">
            {[
              {
                title: "Transmission Mechanism",
                desc: "Supplier adoption acts as the 'gearing' for Scope 3. Without it, organic efficiency (r_base) alone leaves a 2.3 MtCO₂e gap by 2030."
              },
              {
                title: "Non-Linear Thresholds",
                desc: "The model reveals a 'tipping point' in 2027. Once adoption crosses 40%, the emission reduction rate accelerates by 2.4x due to network effects."
              },
              {
                title: "The Delay Penalty",
                desc: "A 2-year delay in reaching the inflection point results in a cumulative excess of 4.2 MtCO₂e—effectively erasing 3 years of organic gains."
              },
              {
                title: "Critical Bottleneck",
                desc: "Scope 3 decarbonization is not a technology problem, but a participation problem. Alpha (α) efficiency is useless if Adoption(t) remains below 20%."
              }
            ].map((insight, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center gap-2 text-corporate-blue">
                  <div className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center text-[10px] font-bold">{i + 1}</div>
                  <h5 className="font-bold text-sm">{insight.title}</h5>
                </div>
                <p className="text-xs text-stone-500 leading-relaxed">{insight.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3) Climate Transition Pathway & Net Zero Gap Analysis (2023-2030) */}
      <section className="space-y-10">
        <div className="flex items-center gap-4 border-b border-stone-200 pb-4">
          <div className="w-10 h-10 bg-corporate-blue text-white rounded-lg flex items-center justify-center font-bold text-xl">3</div>
          <h2 className="text-3xl font-bold text-corporate-blue">Climate Transition Pathway & Net Zero Gap Analysis (2023-2030)</h2>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* 3-A) Climate Transition Pathway */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-corporate-blue">Climate Transition Pathway</h3>
                <p className="text-stone-500 text-xs">Scope 3 Emissions Scenarios (Million tCO₂e)</p>
              </div>
              <div className="flex gap-4 text-[10px] font-bold uppercase tracking-wider">
                <div className="flex items-center gap-1.5"><div className="w-2 h-2 bg-stone-400 rounded-full" /> Historical</div>
                <div className="flex items-center gap-1.5"><div className="w-2 h-2 bg-blue-600 rounded-full" /> Realistic</div>
                <div className="flex items-center gap-1.5"><div className="w-2 h-2 bg-emerald-600 rounded-full" /> Net Zero</div>
              </div>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={transitionData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: '#888', fontSize: 11 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#888', fontSize: 11 }} />
                  <Tooltip content={<CustomTransitionTooltip />} />
                  <Line name="Historical" type="monotone" dataKey="historical" stroke="#57534e" strokeWidth={3} dot={{ r: 4, fill: '#57534e' }} connectNulls />
                  <Line name="Realistic" type="monotone" dataKey="realistic" stroke="#2563eb" strokeWidth={3} dot={{ r: 4, fill: '#2563eb' }} connectNulls />
                  <Line name="Net Zero" type="monotone" dataKey="netZero" stroke="#059669" strokeWidth={3} dot={{ r: 4, fill: '#059669' }} connectNulls />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 3-B) Net Zero Gap Analysis */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-corporate-blue">Net Zero Gap Analysis</h3>
                <p className="text-stone-500 text-xs">Projected Compliance Shortfall (2025-2030)</p>
              </div>
              <div className="px-3 py-1 bg-red-50 text-red-600 text-[10px] font-bold rounded-full uppercase tracking-wider">
                Gap Shading Enabled
              </div>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={transitionData.filter(d => parseInt(d.year) >= 2025)} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: '#888', fontSize: 11 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#888', fontSize: 11 }} />
                  <Tooltip content={<CustomGapTooltip />} />
                  <Area type="monotone" dataKey="realistic" stroke="#2563eb" fill="#2563eb" fillOpacity={0.1} />
                  <Area type="monotone" dataKey="netZero" stroke="#059669" fill="#059669" fillOpacity={0.1} />
                  <Area type="monotone" dataKey="gap" stroke="none" fill="#ef4444" fillOpacity={0.2} name="Compliance Gap" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 3-C) Decarbonization Lever Contribution */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-corporate-blue">Decarbonization Lever Contribution</h3>
                <p className="text-stone-500 text-xs">Estimated Reduction Potential (MtCO₂e by 2030)</p>
              </div>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={leverData} layout="vertical" margin={{ top: 20, right: 30, left: 40, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f0f0f0" />
                  <XAxis type="number" axisLine={false} tickLine={false} tick={{ fill: '#888', fontSize: 11 }} />
                  <YAxis type="category" dataKey="name" hide />
                  <Tooltip cursor={{ fill: 'transparent' }} />
                  <Legend verticalAlign="top" align="right" wrapperStyle={{ fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase' }} />
                  <Bar dataKey="Ingredient Reformulation" stackId="a" fill="#004e92" radius={[0, 0, 0, 0]} />
                  <Bar dataKey="Recycled Packaging" stackId="a" fill="#059669" />
                  <Bar dataKey="EV Logistics" stackId="a" fill="#f59e0b" />
                  <Bar dataKey="Supplier Efficiency Programs" stackId="a" fill="#7c3aed" radius={[0, 10, 10, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 3-D) Supplier Decarbonization Adoption Curve */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-corporate-blue">Supplier Adoption Curve</h3>
                <p className="text-stone-500 text-xs">Network-Effect Participation Rate (%)</p>
              </div>
              <div className="flex items-center gap-2 text-emerald-600">
                <TrendingDown className="w-4 h-4 rotate-180" />
                <span className="text-[10px] font-bold uppercase">S-Curve Growth</span>
              </div>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={adoptionData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorAdoption" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#059669" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#059669" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: '#888', fontSize: 11 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#888', fontSize: 11 }} unit="%" />
                  <Tooltip />
                  <Area type="monotone" dataKey="rate" stroke="#059669" strokeWidth={3} fillOpacity={1} fill="url(#colorAdoption)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* 3-F) Model Methodology & Assumptions */}
        <div className="bg-stone-50 p-8 rounded-3xl border border-stone-200 space-y-6">
          <div className="flex items-center gap-3 text-corporate-blue border-b border-stone-200 pb-4">
            <FileText size={24} />
            <h3 className="text-xl font-bold">3-F) Model Methodology & Assumptions</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h4 className="font-bold text-stone-800 text-sm uppercase tracking-wider">1. Decarbonization Equation</h4>
              <div className="bg-white p-4 rounded-xl border border-stone-200 font-mono text-xs space-y-2">
                <p className="text-corporate-blue font-bold">Eₜ = E₀ × (1 - r)ᵗ</p>
                <div className="text-stone-500 space-y-1">
                  <p>• Eₜ: Emissions in year t</p>
                  <p>• E₀: Baseline (2024)</p>
                  <p>• r: Annual Reduction Rate</p>
                  <p>• t: Years from baseline</p>
                </div>
              </div>
              <p className="text-xs text-stone-500 leading-relaxed">
                The model uses a geometric decay function to simulate compounding efficiency gains.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-stone-800 text-sm uppercase tracking-wider">2. Key Parameters</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm border-b border-stone-100 pb-1">
                  <span className="text-stone-500">Baseline (E₀)</span>
                  <span className="font-bold text-stone-800">9.96 MtCO₂e</span>
                </div>
                <div className="flex justify-between text-sm border-b border-stone-100 pb-1">
                  <span className="text-stone-500">Target Rate (r_target)</span>
                  <span className="font-bold text-emerald-600">24.9% / year</span>
                </div>
                <div className="flex justify-between text-sm border-b border-stone-100 pb-1">
                  <span className="text-stone-500">Realistic Rate (r_real)</span>
                  <span className="font-bold text-blue-600">7.6% / year</span>
                </div>
              </div>
              <p className="text-xs text-stone-500 leading-relaxed">
                The "Realistic" pathway reflects current policy constraints, while "Net Zero" requires a 3.3x acceleration.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-stone-800 text-sm uppercase tracking-wider">3. Adoption Assumptions</h4>
              <ul className="space-y-2">
                {[
                  'Initial Phase: 10-18% adoption (Tier 1 strategic partners).',
                  'Inflection Point: 2027 (42% adoption) via digital mandates.',
                  'Network Effect: 75% participation by 2030 across high-impact spend.'
                ].map((text, i) => (
                  <li key={i} className="flex gap-2 text-xs text-stone-600">
                    <ArrowRight size={12} className="text-corporate-blue shrink-0 mt-0.5" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 3-E) ESG Analyst Insight: Decarbonization Pathway & 2030 Forecast Integrity */}
        <div className="bg-stone-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <ShieldCheck size={120} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                <TrendingDown size={18} className="text-white" />
              </div>
              <h3 className="text-xl font-bold tracking-tight">3-E) ESG Analyst Insight: The Decarbonization Paradox (FY23-25)</h3>
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
