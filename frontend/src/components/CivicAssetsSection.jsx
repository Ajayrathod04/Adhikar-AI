import React, { useState, useEffect } from 'react';
import { Landmark, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const CivicAssetsSection = () => {
  const [assets, setAssets] = useState(null);

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const res = await fetch('/api/civic-assets');
        const json = await res.json();
        if (json.success) setAssets(json.data);
      } catch (err) {
        setAssets({
          nationalSymbols: [
            { name: "Ashoka Lion Capital", image: "/images/ashoka_lions.png" },
            { name: "Parliament", image: "/images/parliament.png" }
          ],
          electionAssets: [
            { name: "Voter Ink Finger", image: "/images/voter_ink.png" }
          ]
        });
      }
    };
    fetchAssets();
  }, []);

  if (!assets) return null;

  return (
    <div className="glass-card p-6 rounded-[40px] mt-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold flex items-center gap-3">
            <Landmark className="text-primary" size={28} />
            Civic Awareness Panel
          </h3>
          <p className="text-zinc-500 text-sm mt-1">Understanding our national democratic symbols</p>
        </div>
        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shadow-[0_0_15px_-5px_rgba(139,92,246,0.5)]">
          <ShieldCheck size={24} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...assets.nationalSymbols, ...assets.electionAssets].map((asset, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="group relative rounded-3xl overflow-hidden aspect-[4/3] glass border border-white/10"
          >
            <img 
              src={asset.image} 
              alt={asset.name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-100" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 w-full">
              <p className="text-white font-bold text-sm tracking-wide">{asset.name}</p>
              <div className="w-full h-1 bg-primary/30 rounded-full mt-2 overflow-hidden">
                <div className="w-1/2 h-full bg-primary" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CivicAssetsSection;
