import React, { useMemo, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  Cell,
  ReferenceLine
} from 'recharts';

// Data from Reporting Cycle.csv
const emissionRealityData = [
  { year: '2023', scope1: 20165, scope2: 0, scope3: 8719253 },
  { year: '2024', scope1: 14622, scope2: 96, scope3: 9962535 },
  { year: '2025', scope1: 8944, scope2: 0, scope3: null },
];

// Logistic growth function for adoption curve
const logistic = (t: number, L: number, k: number, t0: number) => {
  return L / (1 + Math.exp(-k * (t - t0)));
};

const generateAdoptionImpactData = () => {
  const data = [];
  const startYear = 2025;
  const endYear = 2035;
  
  const providedAdoption: Record<number, number> = {
    2025: 15, 2026: 20, 2027: 28, 2028: 38, 2029: 50, 2030: 60, 2031: 68, 2032: 74, 2033: 78, 2034: 81, 2035: 83
  };

  const providedEmissions: Record<number, { baseline: number; modeled: number }> = {
    2025: { baseline: 10.0, modeled: 9.1 },
    2026: { baseline: 10.1, modeled: 8.9 },
    2027: { baseline: 10.2, modeled: 8.5 },
    2028: { baseline: 10.3, modeled: 7.9 },
    2029: { baseline: 10.4, modeled: 7.3 },
    2030: { baseline: 10.5, modeled: 6.7 },
    2031: { baseline: 10.6, modeled: 6.3 },
    2032: { baseline: 10.7, modeled: 5.9 },
    2033: { baseline: 10.8, modeled: 5.7 },
    2034: { baseline: 10.9, modeled: 5.6 },
    2035: { baseline: 11.0, modeled: 5.5 }
  };

  const providedContributions: Record<number, { internal: number; adoption: number }> = {
    2025: { adoption: 9, internal: 91 },
    2026: { adoption: 12, internal: 88 },
    2027: { adoption: 17, internal: 83 },
    2028: { adoption: 23, internal: 77 },
    2029: { adoption: 30, internal: 70 },
    2030: { adoption: 36, internal: 64 },
    2031: { adoption: 41, internal: 59 },
    2032: { adoption: 44, internal: 56 },
    2033: { adoption: 47, internal: 53 },
    2034: { adoption: 49, internal: 51 },
    2035: { adoption: 50, internal: 50 }
  };
  
  for (let year = startYear; year <= endYear; year++) {
    const adoption = providedAdoption[year];
    const emissions = providedEmissions[year];
    const contributions = providedContributions[year];
    
    data.push({
      year: year,
      adoptionRate: adoption,
      baseline: emissions.baseline,
      modeled: emissions.modeled,
      internal: contributions.internal,
      adoption: contributions.adoption,
    });
  }
  return data;
};

const RenderRightLabel = ({ viewBox }: any) => {
  const { x, y, height } = viewBox;
  return (
    <text
      x={x + 60}
      y={y + height / 2}
      textAnchor="middle"
      transform={`rotate(90, ${x + 60}, ${y + height / 2})`}
      style={{ fontSize: 12, fontWeight: 'bold', fontFamily: 'Inter, sans-serif' }}
    >
      <tspan fill="#2563eb">Scope 1</tspan>
      <tspan fill="#78716c"> & </tspan>
      <tspan fill="#10b981">Scope 2</tspan>
      <tspan fill="#78716c"> (MT)</tspan>
    </text>
  );
};

const RenderLeftLabel = ({ viewBox }: any) => {
  const { x, y, height } = viewBox;
  return (
    <text
      x={x - 60}
      y={y + height / 2}
      textAnchor="middle"
      transform={`rotate(-90, ${x - 60}, ${y + height / 2})`}
      style={{ fontSize: 12, fontWeight: 'bold', fontFamily: 'Inter, sans-serif' }}
    >
      <tspan fill="#f59e0b">Scope 3</tspan>
      <tspan fill="#78716c"> (MT)</tspan>
    </text>
  );
};

const SystemDiagnosisDashboard: React.FC = () => {
  const adoptionData = useMemo(() => generateAdoptionImpactData(), []);
  const [hoveredYear, setHoveredYear] = useState<number | null>(null);

  return (
    <div className="w-full space-y-12 py-12 bg-white" id="system-diagnosis-dashboard">
      {/* 2.2A）Emission Reality */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="border-b border-stone-200 pb-4 mb-8">
          <h2 className="text-2xl font-bold text-corporate-blue uppercase tracking-wider">
            2.2A）Emission Reality
          </h2>
        </div>
        
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={emissionRealityData}
              margin={{ top: 40, right: 100, left: 100, bottom: 40 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis 
                dataKey="year" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#78716c', fontSize: 12 }}
                dy={20}
                padding={{ left: 50, right: 50 }}
              />
              <YAxis 
                yAxisId="left"
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#78716c', fontSize: 12 }}
                tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
                label={<RenderLeftLabel />}
                padding={{ top: 20, bottom: 20 }}
              />
              <YAxis 
                yAxisId="right"
                orientation="right"
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#78716c', fontSize: 12 }}
                tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                label={<RenderRightLabel />}
                padding={{ top: 20, bottom: 20 }}
              />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                formatter={(value: any, name: string) => {
                  if (!value && value !== 0) return ['N/A', name];
                  return [value.toLocaleString() + ' MT', name];
                }}
              />
              <Legend verticalAlign="top" height={36} iconType="circle" />
              <Line 
                yAxisId="right"
                name="Scope 1 (Direct)" 
                type="monotone" 
                dataKey="scope1" 
                stroke="#2563eb" 
                strokeWidth={3} 
                dot={{ r: 6, fill: '#2563eb' }} 
                activeDot={{ r: 8 }}
              />
              <Line 
                yAxisId="right"
                name="Scope 2 (Indirect)" 
                type="monotone" 
                dataKey="scope2" 
                stroke="#10b981" 
                strokeWidth={3} 
                dot={{ r: 6, fill: '#10b981' }} 
                activeDot={{ r: 8 }}
              />
              <Line 
                yAxisId="left"
                name="Scope 3 (Value Chain)" 
                type="monotone" 
                dataKey="scope3" 
                stroke="#f59e0b" 
                strokeWidth={3} 
                dot={{ r: 6, fill: '#f59e0b' }} 
                activeDot={{ r: 8 }}
                connectNulls
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-8 flex items-center gap-2 text-stone-400">
          <div className="w-1 h-1 bg-stone-300 rounded-full" />
          <p className="text-xs italic">
            Note: Data for Scope 3 in 2025 is missing due to pending supplier disclosures.
          </p>
        </div>

        {/* Interpretation Box for 2.2A */}
        <div className="mt-12 bg-stone-50 rounded-3xl border border-stone-200 overflow-hidden divide-y divide-stone-200">
          {/* 1. Model Objective */}
          <div className="p-8">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">Model Objective</h3>
            <p className="text-stone-700 font-medium leading-relaxed">
              To diagnose the distribution and controllability of emissions across Scope 1, Scope 2, and Scope 3, and to identify where structural constraints limit decarbonization effectiveness.
            </p>
          </div>

          {/* 2. Model Observation & Insight */}
          <div className="p-8 bg-white/50">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">Model Observation & Insight</h3>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>The emission trends reveal a clear divergence across the three scopes.</p>
              <p>
                <span className="text-corporate-blue font-semibold">Scope 1 and Scope 2</span> emissions show a declining or stabilizing trend over the past three years, indicating that HUL has achieved a meaningful level of control over its direct operations and energy-related emissions through internal efficiency improvements.
              </p>
              <p>
                In contrast, <span className="text-amber-600 font-semibold">Scope 3</span> emissions remain significantly higher in magnitude and exhibit an upward trend, alongside visible data lag (e.g., incomplete 2025 reporting). This indicates that despite the implementation of advanced ESG systems, Scope 3 emissions remain largely beyond direct corporate control and are influenced by external dependencies.
              </p>
              <div className="pt-4 border-t border-stone-100">
                <p className="italic font-medium text-stone-800">
                  This divergence establishes a critical premise: even for a leading ESG performer like HUL, decarbonization effectiveness is structurally uneven across emission scopes.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Scope 3 Structural Interpretation */}
          <div className="p-8">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-6">Scope 3 Structural Interpretation</h3>
            <p className="text-stone-500 mb-8 italic">
              Due to the absence of detailed quantitative breakdowns, the structure of Scope 3 emissions is interpreted based on key drivers disclosed in HUL’s official reports.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Procured Goods & Services', desc: 'Most significant emission driver, particularly raw material inputs and formulation components.' },
                { title: 'Packaging', desc: 'Driven by plastic lifecycle, focused on recycled content and material optimization.' },
                { title: 'Logistics', desc: 'Emissions from both upstream and downstream transportation activities.' },
                { title: 'Consumer Use Phase', desc: 'Indirect emissions generated during product usage, beyond corporate control.' }
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-white rounded-2xl border border-stone-100 shadow-sm">
                  <h4 className="text-sm font-bold text-corporate-blue mb-2">{item.title}</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-xs text-stone-400 italic">
              Due to limited disclosure granularity, this interpretation focuses on structural drivers rather than full category-level quantification.
            </p>
          </div>

          {/* 4. Core Scope 3 Structural Insight */}
          <div className="p-8 bg-corporate-blue text-white">
            <h3 className="text-xs font-bold opacity-60 uppercase tracking-widest mb-6">Core Scope 3 Structural Insight</h3>
            <div className="space-y-6">
              <p className="text-lg font-light leading-snug">
                These components collectively demonstrate that Scope 3 emissions are not concentrated within a single controllable domain, but are <span className="font-bold">structurally distributed across the entire value chain</span>—spanning upstream suppliers, operational processes, and downstream consumption.
              </p>
              <div className="h-px bg-white/20 w-12" />
              <p className="opacity-90 leading-relaxed">
                As a result, decarbonization cannot be achieved through internal optimization alone. It is fundamentally dependent on <span className="underline underline-offset-4 decoration-white/40 font-medium text-white">coordinated intervention across the broader ecosystem</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Module 2 — Adoption Impact System */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="border-b border-stone-200 pb-4 mb-8">
          <h2 className="text-2xl font-bold text-corporate-blue uppercase tracking-wider">
            2.2B) Adoption Impact System
          </h2>
        </div>

        {/* System Overview Content */}
        <div className="mb-12 space-y-8 text-stone-600">
          <p className="text-stone-700 font-medium leading-relaxed">
            This system simulates how supplier adoption drives Scope 3 emission reduction over time (2025–2035).
          </p>

          <div className="border-t border-stone-200 pt-8">
            <h4 className="text-sm font-bold text-corporate-blue uppercase tracking-widest mb-6">System Logic</h4>
            <p className="text-lg font-semibold text-stone-800 mb-6 italic">The model is structured as a single causal chain: Adoption → Reduction Share → Emission Outcome</p>
            <ul className="space-y-4 text-base text-stone-700">
              <li className="flex items-start gap-3">
                <span className="text-corporate-blue font-bold text-lg">•</span>
                <span>Supplier adoption follows a non-linear (S-curve) growth pattern</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-corporate-blue font-bold text-lg">•</span>
                <span>Reduction scales proportionally with adoption</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-corporate-blue font-bold text-lg">•</span>
                <span>Emissions decline as adoption increases</span>
              </li>
            </ul>
          </div>

          <div className="border-t border-stone-200 pt-8">
            <h4 className="text-sm font-bold text-corporate-blue uppercase tracking-widest mb-6">What the Model Shows</h4>
            <ul className="space-y-4 text-base text-stone-700">
              <li className="flex items-start gap-3">
                <span className="text-corporate-blue font-bold text-lg">•</span>
                <span>Emission reduction is highly sensitive to adoption levels</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-corporate-blue font-bold text-lg">•</span>
                <span>Adoption creates non-linear acceleration effects</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-corporate-blue font-bold text-lg">•</span>
                <span>Over time, adoption becomes the dominant driver of decarbonization</span>
              </li>
            </ul>
          </div>

          <div className="border-t border-stone-200 pt-8">
            <h4 className="text-sm font-bold text-corporate-blue uppercase tracking-widest mb-4">Key Insight</h4>
            <p className="text-xl font-bold text-stone-900 bg-stone-100 p-8 rounded-2xl border-l-8 border-corporate-blue leading-tight shadow-sm">
              Scope 3 decarbonization is not constrained by internal capability, but by the ability to scale supplier participation.
            </p>
          </div>

          <div className="border-t border-stone-200 pt-8 text-sm text-stone-500 leading-relaxed">
            <p className="font-bold text-stone-700 uppercase tracking-widest mb-3">Note</p>
            <p className="mb-1">This is a normalized simulation illustrating system behavior.</p>
            <p className="mb-3">Values are indicative and do not represent actual reported emissions.</p>
            <p className="mt-4 italic text-stone-400">
              * The complete methodology for each model can be found in the "Report Appendix and Log PDF", which can be downloaded from the "Report Appendix and Log" page.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 1. Adoption Curve */}
          <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100 transition-all duration-300 flex flex-col">
            <h3 className="text-sm font-bold text-stone-500 uppercase tracking-widest mb-6 h-10 flex items-center">
              Adoption Curve (Logistic Growth)
            </h3>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={adoptionData}
                  syncId="adoptionImpact"
                  margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
                  onMouseMove={(state: any) => {
                    if (state?.activePayload && state.activePayload.length > 0) {
                      setHoveredYear(state.activePayload[0].payload.year);
                    }
                  }}
                  onMouseLeave={() => {
                    setHoveredYear(null);
                  }}
                >
                  <XAxis 
                    dataKey="year" 
                    label={{ value: 'Year', position: 'insideBottomRight', offset: -10, fontSize: 10, fill: '#78716c' }}
                    tick={{ fontSize: 10 }}
                  />
                  <YAxis 
                    label={{ value: 'Adoption Rate (%)', angle: -90, position: 'insideLeft', offset: 15, fontSize: 10, fill: '#78716c' }}
                    tick={{ fontSize: 10 }}
                  />
                  <Tooltip cursor={false} />

                  {hoveredYear && (
                    <ReferenceLine
                      x={hoveredYear}
                      stroke="#78716c"
                      strokeDasharray="3 3"
                    />
                  )}

                  <Line
                    type="monotone"
                    dataKey="adoptionRate"
                    name="Adoption Rate (%)"
                    stroke="#5B8FF9"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 2. Reduction Contribution */}
          <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100 transition-all duration-300 flex flex-col">
            <h3 className="text-sm font-bold text-stone-500 uppercase tracking-widest mb-6 h-10 flex items-center">
              Reduction Contribution (Share %)
            </h3>
            <div className="h-[250px] pointer-events-none">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                  data={adoptionData} 
                  syncId="adoptionImpact"
                  margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
                >
                  <XAxis 
                    dataKey="year" 
                    label={{ value: 'Year', position: 'insideBottomRight', offset: -10, fontSize: 10, fill: '#78716c' }}
                    tick={{ fontSize: 10 }}
                  />
                  <YAxis 
                    label={{ value: 'Share %', angle: -90, position: 'insideLeft', offset: 15, fontSize: 10, fill: '#78716c' }}
                    tick={{ fontSize: 10 }}
                  />

                  <Tooltip 
                    cursor={false}
                    formatter={(value: any, name: string) => [value, `${name} (%)`]}
                  />

                  {hoveredYear && (
                    <ReferenceLine
                      x={hoveredYear}
                      stroke="#78716c"
                      strokeDasharray="3 3"
                    />
                  )}

                  <Bar name="Internal Efficiency" dataKey="internal" stackId="a" fill="#5B8FF9" />
                  <Bar name="Adoption-Driven" dataKey="adoption" stackId="a" fill="#B37FEB" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 3. Emission Trajectory */}
          <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100 transition-all duration-300 flex flex-col">
            <h3 className="text-sm font-bold text-stone-500 uppercase tracking-widest mb-6 h-10 flex items-center">
              Emission Trajectory (Baseline vs Modeled)
            </h3>
            <div className="h-[250px] pointer-events-none">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart 
                  data={adoptionData} 
                  syncId="adoptionImpact"
                  margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
                >
                  <XAxis 
                    dataKey="year" 
                    label={{ value: 'Year', position: 'insideBottomRight', offset: -10, fontSize: 10, fill: '#78716c' }}
                    tick={{ fontSize: 10 }}
                  />
                  <YAxis 
                    label={{ value: 'Emissions (MT)', angle: -90, position: 'insideLeft', offset: 15, fontSize: 10, fill: '#78716c' }}
                    tick={{ fontSize: 10 }}
                  />
                  
                  <Tooltip 
                    cursor={false}
                    formatter={(value: any, name: string) => [value, `${name} (MT)`]}
                  />

                  {hoveredYear && (
                    <ReferenceLine
                      x={hoveredYear}
                      stroke="#78716c"
                      strokeDasharray="3 3"
                    />
                  )}

                  <Line name="Baseline" dataKey="baseline" stroke="#A0A0A0" strokeDasharray="5 5" dot={false} />
                  <Line name="Modeled" dataKey="modeled" stroke="#FF4D4F" dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* 2.2C) Integrated Insight */}
        <div className="mt-24 border-t border-stone-200 pt-16">
          <div className="border-b border-stone-200 pb-4 mb-8">
            <h2 className="text-2xl font-bold text-corporate-blue uppercase tracking-wider">
              2.2C) Integrated Insight
            </h2>
          </div>

          <div className="bg-stone-50 rounded-3xl border border-stone-200 overflow-hidden divide-y divide-stone-200">
            {/* Combined Analysis */}
            <div className="p-8">
              <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-6">Combined Analysis</h3>
              <p className="text-stone-700 font-medium mb-6">The combined analysis reveals a clear structural progression:</p>
              <ul className="space-y-4 text-stone-600 leading-relaxed">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-corporate-blue mt-2 shrink-0" />
                  <span>Emission data identifies Scope 3 as the dominant decarbonization challenge</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-corporate-blue mt-2 shrink-0" />
                  <span>Structural interpretation shows that Scope 3 emissions are distributed across the value chain, making them inherently beyond firm-level control</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-corporate-blue mt-2 shrink-0" />
                  <span>Impact modeling demonstrates that supplier adoption acts as the primary mechanism enabling emission reduction</span>
                </li>
              </ul>
            </div>

            {/* System-Level Conclusion */}
            <div className="p-8 bg-white/50">
              <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-6">System-Level Conclusion</h3>
              <div className="space-y-6">
                <p className="text-xl font-light text-stone-800 leading-snug">
                  Together, these findings indicate that: <br />
                  <span className="font-bold text-corporate-blue">Scope 3 decarbonization is not constrained by technical capability, but by the ability to mobilize ecosystem-wide participation.</span>
                </p>
                <div className="h-px bg-stone-200 w-12" />
                <p className="text-stone-600 leading-relaxed">
                  As a result: <br />
                  <span className="font-medium">ESG transformation cannot be achieved through internal optimization alone, but requires coordinated intervention across the entire value chain.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemDiagnosisDashboard;
