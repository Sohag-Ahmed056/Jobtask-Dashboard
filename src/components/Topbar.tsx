
import { Search, Bell, Mail, Command } from 'lucide-react';

const Topbar = () => {
  return (
    <div className="flex justify-between items-center mb-10 py-2">
      
      <div className="relative w-full max-w-md">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input 
          type="text" 
          placeholder="Search task" 
          className="w-full pl-12 pr-12 py-2.5 rounded-full border border-gray-100 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/10 shadow-sm"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-0.5 text-gray-300 border border-gray-100 px-1 rounded bg-gray-50">
          <Command size={10} /> <span className="text-[10px] font-bold">F</span>
        </div>
      </div>

    
      <div className="flex items-center gap-3">
        <button className="p-2.5 text-gray-500 bg-white border border-gray-100 rounded-full hover:bg-gray-50 transition-colors">
          <Mail size={18}/>
        </button>
        <button className="p-2.5 text-gray-500 bg-white border border-gray-100 rounded-full relative hover:bg-gray-50 transition-colors">
          <Bell size={18}/>
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
        </button>
        
        <div className="flex items-center gap-3 ml-2 pl-2 border-l border-gray-100">
          <div className="text-right">
            <p className="text-sm font-bold text-gray-800 leading-none">Totok Michael</p>
            <p className="text-[11px] text-gray-400 font-medium mt-1">tmichael20@mail.com</p>
          </div>
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
            alt="User Avatar" 
            className="w-10 h-10 rounded-full bg-orange-100 border border-gray-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;