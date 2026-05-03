import React, { useState, useEffect } from 'react';
import { Newspaper, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const NewsSection = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch('/api/news');
        const data = await res.json();
        if (data.success) setNews(data.data);
      } catch (err) {
        setNews([
          { title: "Election Commission Prep Underway", description: "Standard polling procedures are being reviewed.", source: "EC Portal" },
          { title: "Voter ID Awareness Week", description: "Check your local center for registration details.", source: "National News" }
        ]);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="glass-card p-6 rounded-3xl mt-8">
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
        <Newspaper className="text-primary" size={24} />
        Daily Election News
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {news.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all group"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                {item.source}
              </span>
              <ExternalLink size={14} className="text-zinc-500 group-hover:text-primary transition-colors" />
            </div>
            <h4 className="font-bold text-sm mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
            <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
