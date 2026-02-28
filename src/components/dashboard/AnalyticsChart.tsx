

interface AnalyticsData {
  date: string;
  views: number;
  clicks: number;
  conversions: number;
}

const AnalyticsChart = ({ data = [] }: { data: AnalyticsData[] }) => {
  const maxViews = data.length > 0 ? Math.max(...data.map((d) => d.views)) : 0;

  return (
    <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm w-full h-full flex flex-col">
      <div className="flex justify-between items-center mb-10">
        <h3 className="font-bold text-xl text-gray-900 tracking-tight">Analytics</h3>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#0D3B2E]"></span>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Performance</span>
        </div>
      </div>

      <div className="relative flex-1 flex items-end justify-between gap-2 px-2 min-h-[220px]">
        {data.map((item, index) => {
          const heightPercent = maxViews > 0 ? (item.views / maxViews) * 100 : 0;
          const isPeak = item.views === maxViews && maxViews > 0;

          return (
            <div key={index} className="flex-1 flex flex-col items-center group relative h-full">
              
              {/* --- ENHANCED TOOLTIP START --- */}
              <div className="absolute -top-24 opacity-0 group-hover:opacity-100 group-hover:-top-28 transition-all duration-300 bg-[#0D3B2E] text-white p-3 rounded-2xl pointer-events-none z-20 shadow-xl min-w-[100px]">
                <div className="space-y-1">
                  <div className="flex justify-between gap-4">
                    <span className="text-[10px] text-gray-400 uppercase font-bold">Views</span>
                    <span className="text-[10px] font-bold text-emerald-400">{item.views}</span>
                  </div>
                  <div className="flex justify-between gap-4 border-t border-gray-700 pt-1">
                    <span className="text-[10px] text-gray-400 uppercase font-bold">Clicks</span>
                    <span className="text-[10px] font-bold">{item.clicks}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-[10px] text-gray-400 uppercase font-bold">Conv.</span>
                    <span className="text-[10px] font-bold">{item.conversions}</span>
                  </div>
                </div>
                {/* Tooltip Arrow */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#0D3B2E] rotate-45" />
              </div>
              {/* --- ENHANCED TOOLTIP END --- */}

              {/* Bar Track */}
              <div className="w-full max-w-[32px] bg-gray-50 rounded-full flex-1 flex flex-col justify-end overflow-hidden relative border border-gray-50/50">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,#000_5px,#000_10px)]" />
                
                <div
                  className={`w-full rounded-full transition-all duration-700 ease-out relative z-10 ${
                    isPeak ? 'bg-emerald-500 shadow-lg shadow-emerald-100' : 'bg-[#0D3B2E]'
                  }`}
                  style={{
                    height: `${heightPercent}%`,
                    opacity: isPeak ? 1 : 0.3 + (index * 0.12),
                  }}
                >
                  {isPeak && (
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full border-2 border-emerald-500" />
                  )}
                </div>
              </div>

              {/* Day Label */}
              <span className={`mt-4 text-[11px] font-bold uppercase tracking-tighter transition-colors ${
                isPeak ? 'text-gray-900' : 'text-gray-300 group-hover:text-gray-600'
              }`}>
                {new Date(item.date).toLocaleDateString("en-US", { weekday: "short" })}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnalyticsChart;