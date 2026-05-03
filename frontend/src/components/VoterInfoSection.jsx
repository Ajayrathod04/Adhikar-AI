import React, { useState, useEffect } from 'react';
import { MapPin, Info, CheckSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const VoterInfoSection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchVoterInfo = async () => {
      try {
        const res = await fetch('/api/voter-info');
        const json = await res.json();
        if (json.success) setData(json.data);
      } catch (err) {
        setData({
          pollingBooth: { location: "Local Community Center", boothNumber: "101A", timing: "8 AM - 5 PM" },
          voterGuidelines: ["Carry your Voter ID", "Confirm booth number", "Check list early"]
        });
      }
    };
    fetchVoterInfo();
  }, []);

  if (!data) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div className="glass-card p-6 rounded-3xl">
        <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-secondary">
          <MapPin size={20} />
          Your Polling Booth
        </h3>
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
            <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mb-1">Location</p>
            <p className="text-sm font-semibold">{data.pollingBooth.location}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mb-1">Booth #</p>
              <p className="text-sm font-semibold">{data.pollingBooth.boothNumber}</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mb-1">Timing</p>
              <p className="text-sm font-semibold">{data.pollingBooth.timing}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-card p-6 rounded-3xl">
        <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-primary">
          <Info size={20} />
          Voter Guidelines
        </h3>
        <div className="space-y-3">
          {data.voterGuidelines.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5"
            >
              <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <CheckSquare size={14} />
              </div>
              <span className="text-xs font-medium text-zinc-300">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VoterInfoSection;
