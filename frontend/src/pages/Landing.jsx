import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Calendar, ListChecks, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="space-y-0 -m-8 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-black via-[#1a0b2e] to-black text-white px-6">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/30 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[140px]" 
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8 text-xs font-bold tracking-widest uppercase text-primary">
            <Sparkles size={14} />
            The Future of Civic Awareness
          </div>
          <h1 className="text-5xl md:text-8xl font-black leading-tight tracking-tighter">
            Understand Your Vote.<br />
            <span className="text-transparent bg-clip-text bg-gradient-neon filter drop-shadow-[0_0_20px_rgba(139,92,246,0.5)]">
              Use Your Right.
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Adhikar AI simplifies the entire election journey — from eligibility to voting day — 
            using a <span className="text-white font-semibold">reliable system</span> powered by smart insights.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
            <Link to="/eligibility">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-primary text-white rounded-2xl font-bold text-lg flex items-center gap-2 overflow-hidden shadow-[0_0_40px_-5px_rgba(139,92,246,0.6)]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <Shield size={20} className="relative z-10" />
                <span className="relative z-10">Check My Eligibility</span>
              </motion.button>
            </Link>
            
            <Link to="/timeline">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white/10 rounded-2xl font-bold text-lg hover:bg-white/5 hover:border-white/20 transition-all flex items-center gap-2"
              >
                <Calendar size={20} />
                Explore Timeline
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </motion.div>
      </section>

      {/* Feature Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">We simplify elections to 3 steps</h2>
            <p className="text-zinc-500 mb-16">Clear, concise, and absolutely reliable.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { title: 'Check Eligibility', desc: 'Know instantly if you can vote', icon: Shield, delay: 0.1 },
              { title: 'Track Timeline', desc: 'Never miss registration or voting dates', icon: Calendar, delay: 0.2 },
              { title: 'Follow Steps', desc: 'Simple guide from registration to voting', icon: ListChecks, delay: 0.3 }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: step.delay }}
                whileHover={{ y: -10 }}
                className="group p-10 bg-white/[0.02] border border-white/5 rounded-[40px] hover:bg-white/[0.04] hover:border-primary/30 transition-all duration-500 relative"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 mx-auto">
                  <step.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">{step.desc}</p>
                
                {/* Decorative element */}
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-primary/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-secondary/5" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass-card p-16 rounded-[48px] border-white/10"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
              Built for <span className="text-primary italic">reliability</span>.<br /> 
              Enhanced with intelligence.
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed">
              Works <span className="text-white font-bold">even without AI</span>. Adhikar AI is designed to be deterministic at its core. 
              The artificial intelligence only enhances your experience — it never controls it.
            </p>
            <div className="mt-10 flex justify-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Stability Guaranteed</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-32 text-center">
        <h3 className="text-3xl font-bold mb-10">Ready to take the first step?</h3>
        <Link to="/dashboard">
          <button className="px-10 py-4 glass-card border-primary/30 hover:bg-white/5 rounded-2xl font-bold text-lg flex items-center gap-3 mx-auto transition-all group">
            Go to Dashboard <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Landing;
