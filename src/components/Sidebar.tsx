import React from 'react';
import { 
  LayoutDashboard, CheckSquare, Calendar, 
  BarChart3, Users, Settings, HelpCircle, 
  LogOut, Download 
} from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white h-screen border-r border-gray-100 flex flex-col p-6 sticky top-0">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-10">
        <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
          <div className="w-3 h-3 border-2 border-white rounded-full" />
        </div>
        <span className="font-bold text-xl text-gray-800">Donezo</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        <p className="text-[10px] text-gray-400 font-bold mb-4 uppercase tracking-widest">Menu</p>
        <NavItem icon={<LayoutDashboard size={20}/>} label="Dashboard" active />
        <NavItem icon={<CheckSquare size={20}/>} label="Tasks" badge="12+" />
        <NavItem icon={<Calendar size={20}/>} label="Calendar" />
        <NavItem icon={<BarChart3 size={20}/>} label="Analytics" />
        <NavItem icon={<Users size={20}/>} label="Team" />

        <div className="pt-6">
          <p className="text-[10px] text-gray-400 font-bold mb-4 uppercase tracking-widest">General</p>
          <NavItem icon={<Settings size={20}/>} label="Settings" />
          <NavItem icon={<HelpCircle size={20}/>} label="Help" />
          <NavItem icon={<LogOut size={20}/>} label="Logout" />
        </div>
      </nav>

      {/* App Promotion Card */}
      <div className="mt-auto bg-[#0D3B2E] p-4 rounded-2xl relative overflow-hidden group">
        <div className="relative z-10">
          <p className="text-white text-xs font-bold leading-tight mb-3">Download our<br/>Mobile App</p>
          <button className="bg-emerald-500 text-white text-[10px] px-3 py-1.5 rounded-lg flex items-center gap-2 hover:bg-emerald-400 transition-colors">
            <Download size={12} /> Download
          </button>
        </div>
        {/* Background Decorative Circles */}
        <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-emerald-500/20 rounded-full group-hover:scale-150 transition-transform duration-700" />
      </div>
    </aside>
  );
};

const NavItem = ({ icon, label, active = false, badge }: any) => (
  <button className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${active ? 'bg-emerald-50 text-emerald-600' : 'text-gray-400 hover:bg-gray-50 hover:text-gray-600'}`}>
    <div className="flex items-center gap-3 font-semibold text-sm">
      {icon} {label}
    </div>
    {badge && <span className="bg-emerald-600 text-white text-[10px] px-1.5 py-0.5 rounded-md font-bold">{badge}</span>}
  </button>
);

export default Sidebar;