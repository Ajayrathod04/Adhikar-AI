import React from 'react';
import HomeHero from '../components/HomeHero';
import CivicVisuals from '../components/CivicVisuals';
import NewsSection from '../components/NewsSection';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-12 min-h-screen"
    >
      <HomeHero />
      <CivicVisuals />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-20">
        <NewsSection />
        <div className="bg-white/5 backdrop-blur-md p-8 rounded-[40px] flex flex-col justify-center text-center border border-white/10 shadow-xl">
          <h3 className="text-3xl font-black mb-4 text-white">Your Voice Matters</h3>
          <p className="text-zinc-500 mb-8 text-lg font-medium">
            Join millions of citizens in shaping the future of the nation. 
            Stay informed, stay ready, and cast your vote.
          </p>
          <button className="bg-white text-black font-black py-5 rounded-2xl hover:bg-zinc-200 transition-all shadow-2xl shadow-white/10">
            Verify Registration Status
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
