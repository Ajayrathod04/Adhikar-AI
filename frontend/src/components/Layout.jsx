import React from 'react';
import Sidebar from './Sidebar';
import { User, Bell, ChevronDown, Globe } from 'lucide-react';
import { useI18n, languages } from '../i18n/i18nContext';

const Layout = ({ children }) => {
  const { locale, setLocale } = useI18n();
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Premium Tricolour Accent Line */}
      <div className="h-1 w-full bg-gradient-tricolour sticky top-0 z-[100]" />
      
      <div className="flex flex-1">
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
            {/* ENHANCED LANGUAGE SWITCHER */}
            <div className="relative group/lang">
              <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-2xl px-4 py-2 hover:bg-primary/20 transition-all cursor-pointer shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                <Globe size={18} className="text-primary animate-pulse" />
                <select 
                  value={locale} 
                  onChange={(e) => setLocale(e.target.value)}
                  className="bg-transparent border-none outline-none text-xs font-black text-white cursor-pointer uppercase pr-2 z-10"
                  style={{ WebkitAppearance: 'none', MozAppearance: 'none', appearance: 'none' }}
                >
                  {languages.map(lang => (
                    <option key={lang.code} value={lang.code} className="bg-[#0f0a1a] text-white py-2">
                      {lang.name}
                    </option>
                  ))}
                </select>
                <ChevronDown size={14} className="text-primary/50" />
              </div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ping" />
            </div>

            <div className="h-8 w-[1px] bg-white/10" />
            
            <button className="p-2 text-zinc-400 hover:text-white transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-background" />
            </button>

            <div className="flex items-center gap-3 cursor-pointer group pl-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center p-1 border border-white/10 group-hover:border-primary/50 transition-all shadow-xl">
                <User size={20} className="text-primary" />
              </div>
              <div className="hidden md:flex flex-col text-left">
                <span className="text-sm font-bold text-white group-hover:text-primary transition-colors">Guest User</span>
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-tighter">Citizen • Verified</span>
              </div>
              <ChevronDown size={14} className="text-zinc-500 group-hover:rotate-180 transition-transform" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8">
          {children}
        </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
