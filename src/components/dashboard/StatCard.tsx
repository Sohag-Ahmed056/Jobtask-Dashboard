import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  growth: number;
  isDark?: boolean;
}

const StatCard = ({ title, value, growth, isDark = false }: StatCardProps) => {
  return (
    <div className={`p-6 rounded-[2rem] shadow-sm border ${isDark ? 'bg-[#0D3B2E] text-white border-transparent' : 'bg-white text-gray-900 border-gray-100'}`}>
      <div className="flex justify-between items-start mb-4">
        <p className={`text-sm font-medium ${isDark ? 'text-emerald-200' : 'text-gray-500'}`}>{title}</p>
        <div className={`p-1 rounded-full border ${isDark ? 'border-emerald-700' : 'border-gray-200'}`}>
          <ArrowUpRight size={16} />
        </div>
      </div>
      <h3 className="text-4xl font-bold mb-3">{value}</h3>
      <div className="flex items-center gap-2">
        <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${isDark ? 'bg-emerald-500/20 text-emerald-300' : 'bg-emerald-50 text-emerald-600'}`}>
          {growth > 0 ? `+${growth}%` : `${growth}%`}
        </span>
        <span className={`text-[10px] ${isDark ? 'text-emerald-300/60' : 'text-gray-400'}`}>
          Increased from last month
        </span>
      </div>
    </div>
  );
};

export default StatCard;