import React from 'react';
import { Home, Calendar, NotebookTabs, ShieldCheck, MessageSquare, Info, Vote, Users } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useSafeNavigation } from '../utils/navigationFix';

const Sidebar = () => {
  const location = useLocation();
  const { safeNavigate } = useSafeNavigation();

  const menuItems = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'Dashboard', icon: Vote, path: '/dashboard' },
    { name: 'Election Timeline', icon: Calendar, path: '/timeline' },
    { name: 'Eligibility Checker', icon: ShieldCheck, path: '/eligibility' },
    { name: 'Voting Guide', icon: NotebookTabs, path: '/guide' },
    { name: 'AI Assistant', icon: MessageSquare, path: '/ai' },
    { name: 'Candidates', icon: Users, path: '/candidates' },
  ];

  return (
    <div className="w-64 h-screen glass border-r border-white/5 flex flex-col fixed left-0 top-0 z-20">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-neon rounded-lg flex items-center justify-center">
          <Vote className="text-white" size={24} />
        </div>
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
          Adhikar AI
        </span>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.name}
              onClick={() => safeNavigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                isActive 
                  ? 'bg-primary/20 text-primary border border-primary/20 shadow-[0_0_15px_-5px_rgba(139,92,246,0.5)]' 
                  : 'text-zinc-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon size={20} className={isActive ? 'text-primary' : 'group-hover:text-white'} />
              <span className="font-medium">{item.name}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-6 border-t border-white/5">
        <div className="p-4 rounded-2xl glass-card bg-primary/5 border border-primary/10">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs text-primary font-semibold uppercase tracking-wider">Awareness Score</span>
          </div>
          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-[75%]" />
          </div>
          <div className="mt-2 text-[10px] text-zinc-500 text-center">
            75% Ready to Vote
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
