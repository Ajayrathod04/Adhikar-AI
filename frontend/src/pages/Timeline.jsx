import React, { useState, useEffect } from 'react';
import { apiSafe } from '../services/apiSafe';
import { motion } from 'framer-motion';
import { MapPin, Search, Calendar, ChevronRight } from 'lucide-react';

const Timeline = () => {
  const [location, setLocation] = useState('');
  const [elections, setElections] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTimeline = async (loc = '') => {
    setLoading(true);
    try {
      const data = await apiSafe.get(`/timeline${loc ? `?location=${loc}` : ''}`);
      setElections(data.data);
    } catch (error) {
      console.error('Error fetching timeline:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTimeline();
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-2">Election Timeline</h2>
        <p className="text-zinc-500">Stay informed about upcoming milestones in your region.</p>
      </div>

      {/* Search Bar */}
      <div className="relative group">
        <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-primary transition-colors" size={20} />
        <input
          type="text"
          placeholder="Search by state (e.g. Maharashtra, Delhi)..."
          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-16 pr-6 focus:outline-none focus:border-primary/50 transition-all text-lg"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && fetchTimeline(location)}
        />
        <button 
          onClick={() => fetchTimeline(location)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/80 text-white p-2 rounded-xl transition-colors"
        >
          <Search size={20} />
        </button>
      </div>

      <div className="space-y-6">
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-32 glass rounded-3xl animate-pulse" />
            ))}
          </div>
        ) : elections.length > 0 ? (
          elections.map((election, idx) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={election.id}
              className="glass-card p-8 rounded-3xl group hover:border-primary/30 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{election.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs bg-white/5 text-zinc-400 px-2 py-0.5 rounded-full">{election.type}</span>
                      <span className="text-[10px] text-zinc-500 uppercase tracking-widest">{election.locations.join(', ')}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-500 uppercase font-bold mb-1">Registration By</span>
                    <span className="font-semibold text-sm">{election.dates.registration_deadline}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-primary uppercase font-bold mb-1">Voting Day</span>
                    <span className="font-bold text-sm text-primary">{election.dates.voting_day}</span>
                  </div>
                  <div className="flex flex-col hidden md:flex">
                    <span className="text-[10px] text-zinc-500 uppercase font-bold mb-1">Results</span>
                    <span className="font-semibold text-sm">{election.dates.results_day}</span>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button className="p-2 rounded-full glass hover:bg-primary hover:text-white transition-all">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center glass rounded-3xl">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 text-zinc-600">
              <Search size={32} />
            </div>
            <h4 className="text-xl font-bold">No Elections Found</h4>
            <p className="text-zinc-500">Try searching for a state like "Maharashtra" or "Delhi".</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;
