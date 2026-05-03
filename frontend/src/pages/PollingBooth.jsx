import React from 'react';
import VoterInfoSection from '../components/VoterInfoSection';
import { MapPin } from 'lucide-react';

const PollingBooth = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20">
          <MapPin size={24} />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white">Polling Booth Information</h2>
          <p className="text-zinc-500">Find your designated voting center and review guidelines.</p>
        </div>
      </div>
      
      <VoterInfoSection />
      
      <div className="glass-card p-10 rounded-[40px] border-secondary/20 mt-8">
        <h4 className="text-xl font-bold mb-6">Important Instructions</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
            <h5 className="font-bold text-sm mb-2 text-primary">Identity Proof</h5>
            <p className="text-xs text-zinc-400">Ensure you have a valid government-issued ID card or Voter ID.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
            <h5 className="font-bold text-sm mb-2 text-secondary">Timing</h5>
            <p className="text-xs text-zinc-400">Polling stations are usually open from 7 AM to 6 PM. Arrive early to avoid queues.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
            <h5 className="font-bold text-sm mb-2 text-accent">Assistance</h5>
            <p className="text-xs text-zinc-400">If you need help or have special requirements, contact the presiding officer at the booth.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PollingBooth;
