import React from 'react';
import NewsSection from '../components/NewsSection';

const DailyNews = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-bold mb-2 text-white">Daily Election News</h2>
        <p className="text-zinc-500">Stay updated with the latest happenings in the democratic process.</p>
      </div>
      <NewsSection />
      <div className="glass-card p-8 rounded-3xl mt-8 border-primary/20">
        <h4 className="text-lg font-bold mb-4">Why News Matters</h4>
        <p className="text-zinc-400 text-sm leading-relaxed">
          Access to reliable information is the cornerstone of a healthy democracy. By staying informed, you can make better decisions and understand the impact of various policies and candidate actions.
        </p>
      </div>
    </div>
  );
};

export default DailyNews;
