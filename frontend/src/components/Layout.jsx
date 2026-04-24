import React from 'react';
import Sidebar from './Sidebar';
import { User, Bell, ChevronDown } from 'lucide-react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      <main className="flex-1 ml-64 flex flex-col">
        {/* Navbar */}
        <header className="h-16 glass border-b border-white/5 px-8 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-4 text-xs">
            <span className="text-zinc-500 uppercase tracking-widest font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
              System Online
            </span>
          </div>

          <div className="flex items-center gap-6">
            <button className="p-2 text-zinc-400 hover:text-white transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-background" />
            </button>
            <div className="h-8 w-[1px] bg-white/5" />
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center p-1 border border-white/10 group-hover:border-primary/50 transition-colors">
                <User size={18} className="text-zinc-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold">Guest User</span>
                <span className="text-[10px] text-zinc-500">Citizen</span>
              </div>
              <ChevronDown size={14} className="text-zinc-500" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
