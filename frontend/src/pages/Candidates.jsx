import React, { useState } from 'react';
import candidateData from '../data/candidates.json';
import { User, Award, MapPin, AlertCircle, Star, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const Candidates = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filtered = candidateData.candidates.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-bold mb-2">Candidate Intelligence</h2>
        <p className="text-zinc-500">Unbiased data about political candidates in your region.</p>
      </div>

      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={20} />
        <input 
          type="text" 
          placeholder="Search by name or city..."
          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-primary/50 transition-all font-medium"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filtered.map((candidate, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={candidate.id} 
            className="glass-card p-6 rounded-3xl group hover:border-primary/30 transition-all"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary border border-white/5">
                <User size={32} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold">{candidate.name}</h3>
                  <div className="flex items-center gap-1 text-yellow-500 px-2 py-1 glass rounded-lg text-xs font-bold">
                    <Star size={12} fill="currentColor" />
                    {candidate.rating}
                  </div>
                </div>
                <p className="text-primary font-bold text-sm tracking-wide uppercase">{candidate.party}</p>
                <div className="flex items-center gap-1 text-zinc-500 text-xs mt-1">
                  <MapPin size={12} />
                  {candidate.location}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-2 text-zinc-400 text-xs font-bold uppercase mb-2">
                  <Award size={14} className="text-secondary" />
                  Key Work Done
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">{candidate.workDone}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className={`p-4 rounded-2xl border ${candidate.criminalRecord === 'No' ? 'bg-green-500/5 border-green-500/20' : 'bg-red-500/5 border-red-500/20'}`}>
                  <div className="text-[10px] text-zinc-500 font-black uppercase mb-1">Criminal Record</div>
                  <div className={`text-sm font-bold flex items-center gap-2 ${candidate.criminalRecord === 'No' ? 'text-green-500' : 'text-red-500'}`}>
                    {candidate.criminalRecord === 'Yes' && <AlertCircle size={14} />}
                    {candidate.criminalRecord}
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="text-[10px] text-zinc-500 font-black uppercase mb-1">Tenure</div>
                  <div className="text-sm font-bold">{candidate.tenure}</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Candidates;
