import React, { useState } from 'react';
import { apiSafe } from '../services/apiSafe';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Info, Check, X, AlertTriangle } from 'lucide-react';

const Eligibility = () => {
  const [formData, setFormData] = useState({
    age: '',
    citizenship: 'Indian',
    documents: []
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const docList = ['Aadhar Card', 'Address Proof', 'Birth Certificate', 'Passport'];

  const toggleDoc = (doc) => {
    setFormData(prev => ({
      ...prev,
      documents: prev.documents.includes(doc)
        ? prev.documents.filter(d => d !== doc)
        : [...prev.documents, doc]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await apiSafe.post('/eligibility', formData);
      setResult(data);
    } catch (error) {
      console.error('Check error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-2">Eligibility Checker</h2>
        <p className="text-zinc-500">Quickly verify your status for the upcoming elections.</p>
      </div>

      <div className="glass-card p-8 rounded-3xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-400">Your Age</label>
              <input
                type="number"
                placeholder="Ex: 21"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:border-primary/50 outline-none transition-all"
                value={formData.age}
                onChange={(e) => setFormData({...formData, age: e.target.value})}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-400">Citizenship</label>
              <select
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:border-primary/50 outline-none transition-all"
                value={formData.citizenship}
                onChange={(e) => setFormData({...formData, citizenship: e.target.value})}
              >
                <option value="Indian" className="bg-zinc-900">Indian</option>
                <option value="Other" className="bg-zinc-900">Other</option>
              </select>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-semibold text-zinc-400">Documents You Possess</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {docList.map(doc => (
                <button
                  key={doc}
                  type="button"
                  onClick={() => toggleDoc(doc)}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                    formData.documents.includes(doc)
                      ? 'bg-primary/20 border-primary text-primary'
                      : 'bg-white/5 border-white/5 hover:border-white/20'
                  }`}
                >
                  <span className="text-sm font-medium">{doc}</span>
                  {formData.documents.includes(doc) ? <Check size={16} /> : <div className="w-4 h-4 rounded border border-zinc-600" />}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-gradient-neon rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-primary/20 transition-all flex items-center justify-center gap-2"
          >
            {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <ShieldCheck size={24} />}
            Check Eligibility
          </button>
        </form>
      </div>

      <AnimatePresence mode="wait">
        {result && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`p-8 rounded-3xl border ${
              result.isEligible ? 'bg-green-500/10 border-green-500/30' : 'bg-red-500/10 border-red-500/30'
            }`}
          >
            <div className="flex items-start gap-6">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                result.isEligible ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'
              }`}>
                {result.isEligible ? <Check size={32} /> : <X size={32} />}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  {result.isEligible ? 'You are Eligible!' : 'Action Required'}
                </h3>
                <p className={result.isEligible ? 'text-green-500/80' : 'text-red-500/80'}>
                  {result.isEligible 
                    ? 'Congratulations! You meet all legal requirements to cast your vote.' 
                    : 'Currently, you do not meet all criteria or are missing essential documents.'}
                </p>

                {!result.isEligible && (
                  <div className="mt-6 space-y-3">
                    <h4 className="text-sm font-bold uppercase tracking-wider opacity-60">Missing Requirements</h4>
                    <ul className="space-y-2">
                      {result.missingRequirements.map((req, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <AlertTriangle size={14} className="text-red-500" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            {result.isEligible && (
              <div className="mt-8 pt-8 border-t border-white/5 flex justify-end">
                <button className="flex items-center gap-2 text-green-500 font-bold group">
                  Proceed to Next Step <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ChevronRight = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export default Eligibility;
