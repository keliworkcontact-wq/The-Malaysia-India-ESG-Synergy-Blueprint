import { useState, useEffect, useMemo } from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceDot,
  Cell,
} from 'recharts';
import { ShieldCheck, AlertTriangle, TrendingDown, ToggleLeft, ToggleRight } from 'lucide-react';
import { fetchESGData, ESGDataPoint } from '../services/dataService';

export default function AuditDashboard() {
  const [data, setData] = useState<ESGDataPoint[]>([]);
  const [showForecast, setShowForecast] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchESGData().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  const forecastData = useMemo(() => {
    if (!data.length || !showForecast) return data;
    
    const lastPoint = data[data.length - 1];
    const forecastYears = ['FY 2025-26', 'FY 2030-31', 'FY 2040-41', '2050 (Net Zero)'];
    
    // Simple linear projection to zero for Scopes 1&2
    const currentTotal = lastPoint.scope1 + lastPoint.scope2;
    const step = currentTotal / 4;

    const forecast = forecastYears.map((year, i) => ({
      year,
      scope1: Math.max(0, lastPoint.scope1 - (step * (i + 1)) * 0.8),
      scope2: Math.max(0, lastPoint.scope2 - (step * (i + 1)) * 0.2),
      scope3: lastPoint.scope3 * (1 - (i + 1) * 0.15), // Slower reduction for Scope 3
      isForecast: true,
    }));

    return [...data, ...forecast];
  }, [data, showForecast]);

  const zeroFines = data.every(d => d.fines === 0);

  if (loading) return <div className="h-96 flex items-center justify-center text-stone-400">Loading Audit Data...</div>;

  return (
    <div className="max-w-7xl mx-auto w-full px-4 py-12" id="audit-dashboard">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Climate Risk Chart - Spans 2 columns */}
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-stone-200">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-corporate-blue">Climate Risk Audit</h3>
              <p className="text-stone-500 text-sm">GHG Emissions Trend (Metric Tonnes CO2)</p>
            </div>
            <button 
              onClick={() => setShowForecast(!showForecast)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                showForecast ? 'bg-sustainability-green text-white' : 'bg-stone-100 text-stone-600'
              }`}
            >
              {showForecast ? <ToggleRight size={20} /> : <ToggleLeft size={20} />}
              2050 Forecast
            </button>
          </div>

          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={forecastData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="year" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#888', fontSize: 12 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#888', fontSize: 12 }}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Legend verticalAlign="top" align="right" iconType="circle" />
                
                <Line 
                  name="Scopes 1 & 2 (Direct)" 
                  type="monotone" 
                  dataKey={(d) => d.scope1 + d.scope2} 
                  stroke="#2D5A27" 
                  strokeWidth={3}
                  dot={{ r: 4, fill: '#2D5A27' }}
                  activeDot={{ r: 6 }}
                  strokeDasharray={d => d.isForecast ? "5 5" : "0"}
                />
                <Line 
                  name="Scope 3 (Supply Chain)" 
                  type="monotone" 
                  dataKey="scope3" 
                  stroke="#1B365D" 
                  strokeWidth={3}
                  dot={{ r: 4, fill: '#1B365D' }}
                  activeDot={{ r: 6 }}
                  strokeDasharray={d => d.isForecast ? "5 5" : "0"}
                />

                {/* Warning Dot for Scope 3 Rebound */}
                {!showForecast && (
                  <ReferenceDot 
                    x="FY 2024-25" 
                    y={data.find(d => d.year === 'FY 2024-25')?.scope3 || 0} 
                    r={8} 
                    fill="#ef4444" 
                    stroke="none"
                  >
                    <Tooltip content={() => <div className="bg-red-500 text-white p-2 rounded shadow text-xs">Emission Rebound Risk</div>} />
                  </ReferenceDot>
                )}
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-6 flex items-start gap-3 p-4 bg-red-50 rounded-xl border border-red-100">
            <AlertTriangle className="text-red-500 shrink-0" size={20} />
            <p className="text-xs text-red-800 leading-relaxed">
              <strong>Audit Insight:</strong> Scope 3 emissions show a rebound risk in FY 2024-25. This highlights the critical need for the "Regenerative Agriculture Platform" to de-risk the supply chain.
            </p>
          </div>
        </div>

        {/* Social & Governance Pill */}
        <div className="space-y-8">
          {/* Compliance Badge */}
          <div className="bg-corporate-blue text-white p-6 rounded-3xl shadow-lg relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="text-sustainability-green" size={28} />
                <h4 className="font-bold text-lg">Governance Audit</h4>
              </div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <p className="text-white/70 text-sm">Regulatory Compliance</p>
              <div className="mt-4 inline-block px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-wider">
                Audit Result: Zero Fines
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <ShieldCheck size={120} />
            </div>
          </div>

          {/* Social Trend Chart */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-200">
            <div className="mb-6">
              <h4 className="font-bold text-corporate-blue">Social Impact</h4>
              <p className="text-stone-500 text-xs">% Women in Workforce</p>
            </div>
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis dataKey="year" hide />
                  <Tooltip 
                    cursor={{ fill: '#f8f8f8' }}
                    contentStyle={{ borderRadius: '8px', border: 'none', fontSize: '12px' }}
                  />
                  <Bar dataKey="womenPercentage" radius={[4, 4, 0, 0]}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === data.length - 1 ? '#2D5A27' : '#1B365D'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sustainability-green">
                <TrendingDown className="rotate-180" size={16} />
                <span className="text-sm font-bold">+{((data[data.length-1]?.womenPercentage - data[0]?.womenPercentage) || 0).toFixed(1)}%</span>
              </div>
              <span className="text-stone-400 text-[10px] uppercase font-bold tracking-widest">5-Year Growth</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
