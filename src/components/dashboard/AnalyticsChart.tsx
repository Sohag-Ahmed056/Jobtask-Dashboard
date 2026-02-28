

const AnalyticsChart = ({ data }: { data: any[] }) => {
  const maxViews = Math.max(...data.map(d => d.views));

  return (
    <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm col-span-2">
      <h3 className="font-bold text-lg mb-8">Project Analytics</h3>
      <div className="flex items-end justify-between h-40 gap-3">
        {data.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center gap-3 group">
            <div className="relative w-full flex flex-col justify-end h-full">
              <div 
                className="w-full bg-[#0D3B2E] rounded-full transition-all duration-500 group-hover:bg-emerald-500"
                style={{ height: `${(item.views / maxViews) * 100}%`, opacity: 0.2 + (index * 0.15) }}
              />
            </div>
            <span className="text-[10px] text-gray-400 font-medium">
              {new Date(item.date).toLocaleDateString('en-US', { weekday: 'narrow' })}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsChart;