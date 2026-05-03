import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, ShieldCheck, Heart } from 'lucide-react';
import { useI18n } from '../i18n/i18nContext';

const CivicVisuals = () => {
  const { t } = useI18n();
  
  const visuals = [
    { 
      title: "Ashoka Lion Capital", 
      image: "/images/ashoka_lions.png", 
      desc: "The State Emblem of India, representing power, courage, and confidence." 
    },
    { 
      title: "Parliament House", 
      image: "/images/parliament.png", 
      desc: "Sansad Bhavan - The supreme legislative body of the Republic of India." 
    },
    { 
      title: "Voter Ink Finger", 
      image: "/images/voter_ink.png", 
      desc: "Indelible ink mark - the proud symbol of every citizen's active participation." 
    }
  ];

  return (
    <div className="glass-card p-10 rounded-[48px] mt-12 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 border-primary/20 relative overflow-hidden group">
      {/* Decorative Background */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700" />
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-primary mb-2">
              <ShieldCheck size={18} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">National Symbols</span>
            </div>
            <h3 className="text-4xl font-black tracking-tight">{t('democracy_in_action')}</h3>
            <p className="text-zinc-500 mt-2 text-lg">Visual representations of our democratic strength and heritage.</p>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 rounded-2xl glass border border-white/10 text-zinc-400 font-bold text-sm">
            <Heart size={16} className="text-red-500" fill="currentColor" />
            Proud to be a Citizen
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visuals.map((v, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -10 }}
              className="flex flex-col group/card"
            >
              <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden border border-white/5 shadow-2xl">
                <img 
                  src={v.image} 
                  alt={v.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 opacity-80 group-hover/card:opacity-100"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover/card:opacity-40 transition-opacity" />
                <div className="absolute top-4 left-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10">
                    <Landmark size={20} className="text-white" />
                  </div>
                </div>
              </div>
              <div className="mt-6 px-2">
                <h4 className="text-xl font-bold mb-2 group-hover/card:text-primary transition-colors">{v.title}</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CivicVisuals;
