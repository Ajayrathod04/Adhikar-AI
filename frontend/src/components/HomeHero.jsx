import React from 'react';
import { motion } from 'framer-motion';
import { Users, Landmark, MapPin, Clock, ArrowRight, Play, ShieldCheck, Sparkles } from 'lucide-react';

const HomeHero = () => {
  const stats = [
    { icon: Users, label: '97 Cr+', sub: 'Voters' },
    { icon: Landmark, label: '543', sub: 'Constituencies' },
    { icon: MapPin, label: '10L+', sub: 'Polling Booths' },
    { icon: Clock, label: '75+', sub: 'Years of Democracy' }
  ];

  return (
    <div className="relative overflow-hidden rounded-[48px] bg-[#020617] border border-white/5 mb-12 shadow-2xl min-h-[700px] flex items-center group/hero">
      {/* Background Image Overlay (Parliament) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
        <img 
          src="/assets/parliament.png" 
          alt="Parliament of India" 
          className="w-full h-full object-cover scale-110 group-hover/hero:scale-100 transition-transform duration-[10s] ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
      </div>

      {/* Subtle INDIA TRICOLOUR gradient glow */}
      <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-[#FF9933] opacity-10 rounded-full blur-[150px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-white opacity-[0.01] rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-[#138808] opacity-10 rounded-full blur-[150px] pointer-events-none animate-pulse" />

      {/* Horizontal Animated Tricolour Strip */}
      <div className="absolute top-0 left-0 w-full h-[4px] flex overflow-hidden opacity-60 z-20">
        <motion.div 
          animate={{ x: ['-100%', '0%'] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="flex w-[200%]"
        >
          <div className="w-1/3 h-full bg-[#FF9933] shadow-[0_0_10px_#FF9933]" />
          <div className="w-1/3 h-full bg-white shadow-[0_0_10px_#ffffff]" />
          <div className="w-1/3 h-full bg-[#138808] shadow-[0_0_10px_#138808]" />
        </motion.div>
      </div>

      <div className="relative z-10 p-10 lg:p-24 flex flex-col items-center text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          {/* Democracy Slogan */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-[#FF9933] text-xs font-black uppercase tracking-[0.3em] mb-10 shadow-2xl"
          >
            <Sparkles size={16} className="animate-spin-slow" />
            Your Vote. Your Voice. Your Power. 🇮🇳
          </motion.div>

          <h1 className="text-6xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-10 text-white">
            Understand India's <br />
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] via-white to-[#138808] filter drop-shadow-sm">
                Election Process
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-[6px] bg-gradient-to-r from-[#FF9933] via-white to-[#138808] rounded-full opacity-30" />
            </span> <br />
            Like Never Before
          </h1>

          <p className="text-xl lg:text-3xl text-zinc-400 mb-14 leading-relaxed max-w-3xl mx-auto font-medium">
            Empowering citizens with <span className="text-white">clear, accessible</span> and <span className="text-white">real-time</span> election insights. 
            The definitive guide to your democratic rights.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 mb-24">
            <button className="group relative px-12 py-6 bg-white text-black font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_50px_-12px_rgba(255,255,255,0.3)] flex items-center gap-3 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF9933]/10 to-[#138808]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <ShieldCheck size={24} className="relative z-10" />
              <span className="relative z-10 text-lg">Start My Journey</span>
              <ArrowRight size={24} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-12 py-6 bg-white/5 backdrop-blur-xl text-white font-black rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-3 shadow-xl">
              <Play size={24} fill="currentColor" />
              <span className="text-lg">Explore Elections</span>
            </button>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              whileHover={{ y: -10, borderColor: 'rgba(255,255,255,0.3)' }}
              className="bg-white/[0.03] backdrop-blur-2xl p-10 rounded-[40px] border border-white/5 flex flex-col items-center text-center shadow-2xl transition-all group/card"
            >
              <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center text-white mb-6 group-hover/card:bg-[#FF9933]/20 group-hover/card:text-[#FF9933] transition-colors">
                <stat.icon size={32} />
              </div>
              <span className="text-4xl font-black mb-2 text-white tabular-nums tracking-tighter">{stat.label}</span>
              <span className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.25em]">{stat.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Assets */}
      <div className="absolute bottom-10 left-10 w-32 h-32 opacity-10 pointer-events-none group-hover/hero:opacity-20 transition-opacity duration-1000">
        <img src="/assets/lion.png" alt="Ashoka Lion" className="w-full h-full object-contain grayscale invert" />
      </div>
      <div className="absolute bottom-10 right-10 w-32 h-32 opacity-10 pointer-events-none group-hover/hero:opacity-20 transition-opacity duration-1000 rotate-12">
        <img src="/assets/vote.png" alt="Voting Finger" className="w-full h-full object-contain grayscale invert" />
      </div>
    </div>
  );
};

export default HomeHero;
