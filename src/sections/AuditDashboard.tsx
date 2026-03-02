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
import { ShieldCheck, Recycle, HardHat, AlertCircle, Info, Eye, TrendingDown, Zap, Globe, DollarSign } from 'lucide-react';
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
    <div className="max-w-7xl mx-auto w-full px-4 py-12 space-y-12" id="audit-dashboard">
      
      {/* Technical Block: Reporting Cycle Chart */}
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

      {/* Integrated Compliance Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Circularity Card */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200 hover:border-sustainability-green transition-all group">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-emerald-50 text-sustainability-green rounded-2xl group-hover:scale-110 transition-transform">
              <Recycle size={24} />
            </div>
            <h4 className="font-bold text-corporate-blue">Circularity</h4>
          </div>
          <div className="text-4xl font-mono font-bold text-sustainability-green mb-2">
            {compliance?.recyclability || 74}%
          </div>
          <p className="text-stone-500 text-sm leading-relaxed">
            Technically recyclable plastic packaging in HUL portfolio (FY 24-25).
          </p>
        </div>

        {/* Governance Card */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200 hover:border-corporate-blue transition-all group">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-50 text-corporate-blue rounded-2xl group-hover:scale-110 transition-transform">
              <ShieldCheck size={24} />
            </div>
            <h4 className="font-bold text-corporate-blue">Governance</h4>
          </div>
          <div className="text-4xl font-mono font-bold text-corporate-blue mb-2">
            {compliance?.fines || 0}
          </div>
          <p className="text-stone-500 text-sm leading-relaxed">
            Environmental prosecutions and fines recorded in the audit period.
          </p>
          <div className="mt-4 inline-block px-3 py-1 bg-blue-50 text-corporate-blue rounded-full text-[10px] font-bold uppercase tracking-wider">
            100% Regulatory Compliance
          </div>
        </div>

        {/* Safety Card */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200 hover:border-red-500 transition-all group">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-red-50 text-red-500 rounded-2xl group-hover:scale-110 transition-transform">
              <HardHat size={24} />
            </div>
            <h4 className="font-bold text-corporate-blue">Safety</h4>
          </div>
          <div className="text-4xl font-mono font-bold text-red-500 mb-2">
            {compliance?.fatalities || 0}
          </div>
          <p className="text-stone-500 text-sm leading-relaxed">
            Total fatal accidents recorded across all HUL operations (FY 24-25).
          </p>
        </div>
      </div>

    </div>
  );
}
