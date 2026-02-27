import { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  Label,
} from 'recharts';
import { ShieldCheck, Recycle, HardHat, AlertCircle, Info } from 'lucide-react';
import { fetchComplianceData, ComplianceMetrics } from '../services/dataService';

const chartData = [
  { 
    cycle: "Cycle 2023", 
    s12: 20165, 
    s3: 8719253, 
    s3Note: "Data Period: Oct 2022 - Sep 2023" 
  },
  { 
    cycle: "Cycle 2024", 
    s12: 14718, 
    s3: 9962535, 
    s3Note: "Data Period: Jan 2024 - Dec 2024" 
  },
  { 
    cycle: "Cycle 2025", 
    s12: 8944, 
    s3: null, 
    s3Note: "Status: Awaiting Supplier Disclosure" 
  }
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-4 rounded-xl shadow-xl border border-stone-200">
        <p className="font-bold text-corporate-blue mb-2">{label}</p>
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
          <div className="mt-3 pt-2 border-top border-stone-100 flex items-start gap-2 text-[10px] text-stone-400 italic">
            <Info size={12} className="shrink-0 mt-0.5" />
            <span>{data.s3Note}</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default function AuditDashboard() {
  const [compliance, setCompliance] = useState<ComplianceMetrics | null>(null);

  useEffect(() => {
    fetchComplianceData().then(setCompliance);
  }, []);

  return (
    <div className="max-w-7xl mx-auto w-full px-4 py-12 space-y-12" id="audit-dashboard">
      
      {/* Technical Block: Reporting Cycle Chart */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h3 className="text-2xl font-bold text-corporate-blue">ESG Audit: Emissions Reporting Cycle</h3>
            <p className="text-stone-500 text-sm">Dual-Axis Analysis of Operational vs. Value Chain Impact</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#004e92] rounded-sm" />
              <span className="text-xs font-medium text-stone-600">Scope 1&2</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#f57c00] rounded-sm" />
              <span className="text-xs font-medium text-stone-600">Scope 3</span>
            </div>
          </div>
        </div>

        <div className="h-[500px] w-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 20, right: 60, left: 40, bottom: 40 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis 
                dataKey="cycle" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#888', fontSize: 12, fontWeight: 500 }}
                dy={15}
              >
                <Label value="Reporting Cycle" offset={-20} position="insideBottom" style={{ fill: '#888', fontSize: 12 }} />
              </XAxis>
              
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

              <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f8fafc', opacity: 0.4 }} />
              
              <Bar yAxisId="left" dataKey="s12" fill="#004e92" radius={[4, 4, 0, 0]} barSize={40} />
              <Bar yAxisId="right" dataKey="s3" fill="#f57c00" radius={[4, 4, 0, 0]} barSize={40}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.s3 === null ? 'transparent' : '#f57c00'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          {/* Data Gap Indicator for Cycle 2025 */}
          <div className="absolute bottom-[100px] right-[12%] flex flex-col items-center gap-2 pointer-events-none">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-stone-100 rounded-lg border border-stone-200 text-stone-400">
              <AlertCircle size={14} />
              <span className="text-[10px] font-bold uppercase tracking-wider">Data Gap</span>
            </div>
            <div className="w-px h-12 bg-dashed border-l border-dashed border-stone-300" />
          </div>
        </div>
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
