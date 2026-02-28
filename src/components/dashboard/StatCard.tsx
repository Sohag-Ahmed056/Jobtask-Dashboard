import { ArrowUpRight, TrendingUp, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface StatCardProps {
  title: string;
  value: string | number;
  growth: number;
  isDark?: boolean;
}

const StatCard = ({ title, value, growth, isDark = false }: StatCardProps) => {
  const isPositive = growth > 0;

  return (
    <motion.div
      // Entry Animation
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      // Hover Animation
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`relative overflow-hidden p-7 rounded-[2.5rem] shadow-xl border group transition-all duration-300
        ${isDark 
          ? 'bg-gradient-to-br from-[#0D3B2E] via-[#0a2e24] to-[#071f19] text-white border-emerald-800/50' 
          : 'bg-gradient-to-br from-white to-gray-50 text-gray-900 border-gray-100'
        }`}
    >
      {/* Subtle Background Glow/Mesh Effect */}
      <div className={`absolute -right-10 -top-10 w-32 h-32 blur-3xl rounded-full opacity-20 transition-opacity group-hover:opacity-40
        ${isDark ? 'bg-emerald-400' : 'bg-emerald-200'}`} 
      />

      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className="space-y-1">
          <p className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-emerald-400/80' : 'text-gray-400'}`}>
            {title}
          </p>
        </div>
        <div className={`p-2 rounded-xl border transition-colors
          ${isDark 
            ? 'border-emerald-700 bg-emerald-800/30 group-hover:bg-emerald-500 group-hover:text-white' 
            : 'border-gray-100 bg-gray-50 group-hover:bg-[#0D3B2E] group-hover:text-white'}`}>
          <ArrowUpRight size={18} />
        </div>
      </div>

      <div className="relative z-10 mb-4">
        <h3 className="text-4xl font-extrabold tracking-tight tabular-nums">
          {value}
        </h3>
      </div>

      <div className="flex items-center gap-3 relative z-10">
        <div className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold shadow-sm
          ${isPositive 
            ? (isDark ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-100 text-emerald-700')
            : 'bg-red-100 text-red-700'
          }`}>
          {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          {isPositive ? `+${growth}%` : `${growth}%`}
        </div>
        <span className={`text-[11px] font-medium ${isDark ? 'text-emerald-200/40' : 'text-gray-400'}`}>
          vs last month
        </span>
      </div>

      {/* Glassmorphism Shine Effect */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

export default StatCard;