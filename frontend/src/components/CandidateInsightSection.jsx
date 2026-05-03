import React from 'react';
import { User, Award, ShieldAlert, Clock, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const CandidateInsightSection = () => {
  const sampleCandidate = {
    name: "Vikram Singh",
    party: "National Welfare Front",
    workDone: "Developed 15+ community parks, improved rural electrification.",
    criminalRecord: "None",
    tenure: "12 Years",
    rating: 4.8
  };

  return (
    <div className="glass-card p-6 rounded-3xl mt-8">
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
        <Star className="text-yellow-500" size={24} fill="currentColor" />
        Know Your Candidate
      </h3>
      
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-32 h-32 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary border border-white/5 shrink-0">
          <User size={48} />
        </div>
        
        <div className="flex-1 space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-2xl font-bold">{sampleCandidate.name}</h4>
              <p className="text-primary font-bold text-sm tracking-wide uppercase">{sampleCandidate.party}</p>
            </div>
            <div className="px-3 py-1 glass rounded-xl text-yellow-500 font-bold flex items-center gap-1">
              <Star size={16} fill="currentColor" />
              {sampleCandidate.rating}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <div className="flex items-center gap-2 text-zinc-500 text-[10px] font-black uppercase mb-2">
                <Award size={14} className="text-secondary" />
                Work Done
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">{sampleCandidate.workDone}</p>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex justify-between items-center">
                <div>
                  <p className="text-zinc-500 text-[10px] font-black uppercase mb-1">Criminal Record</p>
                  <p className="text-sm font-bold text-green-500">{sampleCandidate.criminalRecord}</p>
                </div>
                <ShieldAlert size={20} className="text-green-500 opacity-20" />
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex justify-between items-center">
                <div>
                  <p className="text-zinc-500 text-[10px] font-black uppercase mb-1">Years Active</p>
                  <p className="text-sm font-bold">{sampleCandidate.tenure}</p>
                </div>
                <Clock size={20} className="text-primary opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateInsightSection;
