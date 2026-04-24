import React, { useState, useEffect } from 'react';
import { apiSafe } from '../services/apiSafe';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight, BookOpen, Info } from 'lucide-react';

const VotingGuide = () => {
  const [steps, setSteps] = useState([]);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const fetchGuide = async () => {
      try {
        const data = await apiSafe.get('/guide');
        setSteps(data.data);
      } catch (error) {
        console.error('Error fetching guide:', error);
      }
    };
    fetchGuide();
  }, []);

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
      <div className="md:col-span-4 space-y-4">
        <h2 className="text-3xl font-bold mb-6">Voting Guide</h2>
        <div className="space-y-2">
          {steps.map((step, idx) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(idx)}
              className={`w-full flex items-center gap-3 p-4 rounded-2xl transition-all border ${
                activeStep === idx 
                  ? 'bg-primary/20 border-primary shadow-[0_0_20px_-10px_rgba(139,92,246,0.5)]' 
                  : 'bg-white/5 border-white/5 hover:bg-white/10'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                activeStep === idx ? 'bg-primary text-white' : 'bg-white/10 text-zinc-500'
              }`}>
                {idx + 1}
              </div>
              <span className={`font-semibold ${activeStep === idx ? 'text-white' : 'text-zinc-500'}`}>
                {step.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="md:col-span-8">
        {steps[activeStep] && (
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-10 rounded-[40px] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 text-primary opacity-5">
              <BookOpen size={120} />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Info size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">Step Details</span>
              </div>
              <h3 className="text-4xl font-bold mb-6">{steps[activeStep].title}</h3>
              <p className="text-lg text-zinc-400 leading-relaxed mb-10">
                {steps[activeStep].content}
              </p>

              <div className="space-y-6">
                <h4 className="font-bold flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-primary" />
                  Documents Required
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {steps[activeStep].docs.map((doc, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 glass rounded-2xl border border-white/5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm font-medium">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-between items-center relative z-10">
               <button 
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                className="px-6 py-2 rounded-full glass hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm font-semibold"
              >
                Previous Step
              </button>
              <button 
                onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                disabled={activeStep === steps.length - 1}
                className="px-8 py-2 rounded-full bg-primary hover:bg-primary/80 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm font-bold flex items-center gap-2"
              >
                Next Step <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default VotingGuide;
