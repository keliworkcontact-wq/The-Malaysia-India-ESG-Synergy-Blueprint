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
  Cell
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
  const startYear = 2023;
  const endYear = 2030;
  
  const providedAdoption: Record<number, number> = {
    2023: 12, 2024: 18, 2025: 25, 2026: 33, 2027: 42, 2028: 55, 2029: 65, 2030: 72
  };

  const providedEmissions: Record<number, { baseline: number; modeled: number }> = {
    2023: { baseline: 9.8, modeled: 9.6 },
    2024: { baseline: 9.9, modeled: 9.3 },
    2025: { baseline: 10.0, modeled: 8.9 },
    2026: { baseline: 10.1, modeled: 8.2 },
    2027: { baseline: 10.2, modeled: 7.4 },
    2028: { baseline: 10.3, modeled: 6.5 },
    2029: { baseline: 10.4, modeled: 5.5 },
    2030: { baseline: 10.5, modeled: 4.6 }
  };

  const providedContributions: Record<number, { internal: number; adoption: number }> = {
    2023: { internal: 0.2, adoption: 0.1 },
    2024: { internal: 0.4, adoption: 0.3 },
    2025: { internal: 0.7, adoption: 0.6 },
    2026: { internal: 1.0, adoption: 1.2 },
    2027: { internal: 1.3, adoption: 2.0 },
    2028: { internal: 1.6, adoption: 3.0 },
    2029: { internal: 1.8, adoption: 4.2 },
    2030: { internal: 2.0, adoption: 5.5 }
  };
  
  for (let year = startYear; year <= endYear; year++) {
    const adoption = providedAdoption[year];
    const emissions = providedEmissions[year];
    const contributions = providedContributions[year];
    
    data.push({
      year: year,
      adoption: adoption,
      baseline: emissions.baseline,
      modeled: emissions.modeled,
      internal: contributions.internal,
      adoptionContribution: contributions.adoption,
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

  const handleMouseMove = (state: any) => {
    if (state && state.activePayload && state.activePayload.length > 0) {
      setHoveredYear(state.activePayload[0].payload.year);
    }
  };

  const handleMouseLeave = () => {
    setHoveredYear(null);
  };

  return (
    <div className="w-full space-y-12 py-12 bg-white" id="system-diagnosis-dashboard">
      {/* Module 1 — Emission Reality */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="border-b border-stone-200 pb-4 mb-8">
          <h2 className="text-2xl font-bold text-corporate-blue uppercase tracking-wider">
            Module 1 — Emission Reality
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
      </div>

      {/* Module 2 — Adoption Impact System */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="border-b border-stone-200 pb-4 mb-8">
          <h2 className="text-2xl font-bold text-corporate-blue uppercase tracking-wider">
            Module 2 — Adoption Impact System
          </h2>
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
                  margin={{ top: 10, right: 30, left: 10, bottom: 30 }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  syncId="adoptionImpact"
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis 
                    dataKey="year" 
                    type="category"
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#78716c', fontSize: 10 }}
                    dy={15}
                  />
                  <YAxis 
                    domain={[0, 100]} 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#78716c', fontSize: 10 }}
                    tickFormatter={(val) => `${val}%`}
                    width={40}
                  />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
                    formatter={(val: any) => [`${val}%`, 'Adoption Rate']}
                    labelFormatter={(label) => `Year: ${label}`}
                    cursor={{ stroke: '#78716c', strokeWidth: 1, strokeDasharray: '3 3' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="adoption" 
                    stroke="#6366f1" 
                    strokeWidth={3}
                    dot={(props: any) => {
                      const { cx, cy, payload } = props;
                      if (payload.year === hoveredYear) {
                        return <circle cx={cx} cy={cy} r={6} fill="#6366f1" stroke="#fff" strokeWidth={2} />;
                      }
                      return <circle cx={cx} cy={cy} r={4} fill="#6366f1" />;
                    }}
                    activeDot={{ r: 8, strokeWidth: 0 }}
                    name="Adoption %"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 2. Emission Trajectory */}
          <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100 transition-all duration-300 flex flex-col">
            <h3 className="text-sm font-bold text-stone-500 uppercase tracking-widest mb-6 h-10 flex items-center">
              Emission Trajectory (Baseline vs Modeled)
            </h3>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart 
                  data={adoptionData} 
                  margin={{ top: 10, right: 30, left: 10, bottom: 30 }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  syncId="adoptionImpact"
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis 
                    dataKey="year" 
                    type="category"
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#78716c', fontSize: 10 }}
                    dy={15}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#78716c', fontSize: 10 }}
                    tickFormatter={(val) => `${val}M`}
                    width={40}
                  />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
                    formatter={(val: any, name: string) => [`${val}M MT`, name]}
                    labelFormatter={(label) => `Year: ${label}`}
                    cursor={{ stroke: '#78716c', strokeWidth: 1, strokeDasharray: '3 3' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="baseline" 
                    stroke="#94a3b8" 
                    strokeDasharray="5 5" 
                    strokeWidth={hoveredYear ? 1 : 2}
                    dot={(props: any) => {
                      const { cx, cy, payload } = props;
                      if (payload.year === hoveredYear) {
                        return <circle cx={cx} cy={cy} r={5} fill="#94a3b8" />;
                      }
                      return null;
                    }}
                    name="Baseline"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="modeled" 
                    stroke="#ef4444" 
                    strokeWidth={3} 
                    dot={(props: any) => {
                      const { cx, cy, payload } = props;
                      if (payload.year === hoveredYear) {
                        return <circle cx={cx} cy={cy} r={6} fill="#ef4444" stroke="#fff" strokeWidth={2} />;
                      }
                      return null;
                    }}
                    name="Modeled"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 3. Reduction Contribution */}
          <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100 transition-all duration-300 flex flex-col">
            <h3 className="text-sm font-bold text-stone-500 uppercase tracking-widest mb-6 h-10 flex items-center">
              Reduction Contribution Comparison
            </h3>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={adoptionData}
                  margin={{ top: 10, right: 30, left: 10, bottom: 30 }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  syncId="adoptionImpact"
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis 
                    dataKey="year" 
                    type="category"
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#78716c', fontSize: 10 }}
                    dy={15}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#78716c', fontSize: 10 }}
                    tickFormatter={(val) => `${val}M`}
                    width={40}
                  />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
                    formatter={(val: any) => [`${val}M MT`, '']}
                    cursor={{ fill: '#78716c', opacity: 0.15 }}
                  />
                  <Legend verticalAlign="top" align="right" iconType="circle" wrapperStyle={{ fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }} />
                  <Bar name="Internal Efficiency" dataKey="internal" stackId="a" fill="#3b82f6">
                    {adoptionData.map((entry, index) => (
                      <Cell 
                        key={`cell-internal-${index}`} 
                        fill="#3b82f6" 
                        fillOpacity={hoveredYear === null || entry.year === hoveredYear ? 1 : 0.3}
                      />
                    ))}
                  </Bar>
                  <Bar name="Adoption-Driven" dataKey="adoptionContribution" stackId="a" fill="#8b5cf6">
                    {adoptionData.map((entry, index) => (
                      <Cell 
                        key={`cell-adoption-${index}`} 
                        fill="#8b5cf6" 
                        fillOpacity={hoveredYear === null || entry.year === hoveredYear ? 1 : 0.3}
                        radius={entry.year === hoveredYear ? [4, 4, 0, 0] : [0, 0, 0, 0]}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-center text-[10px] font-bold text-stone-400 uppercase tracking-widest">
              Cumulative Reduction (MT)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemDiagnosisDashboard;
