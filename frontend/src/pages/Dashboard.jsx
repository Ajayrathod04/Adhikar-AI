import React from 'react';
import { motion } from 'framer-motion';
import { useRealtime } from '../hooks/useRealtime';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { CheckCircle, Clock, MapPin, ArrowRight, Zap, Users } from 'lucide-react';

const data = [
  { name: '2019', score: 67 },
  { name: '2020', score: 62 },
  { name: '2021', score: 65 },
  { name: '2022', score: 69 },
  { name: '2023', score: 72 },
  { name: '2024', score: 85 },
];

const participationData = [
  { name: 'Phase 1', value: 66 },
  { name: 'Phase 2', value: 71 },
  { name: 'Phase 3', value: 68 },
  { name: 'Phase 4', value: 74 },
  { name: 'Phase 5', value: 69 },
];

const StatCard = ({ title, value, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="glass-card p-6 rounded-3xl"
  >
    <div className="flex items-start justify-between">
      <div>
        <p className="text-zinc-500 text-sm mb-1 font-medium">{title}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
      </div>
      <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-primary">
        <Icon size={20} />
      </div>
    </div>
  </motion.div>
);

const Dashboard = () => {
  const { awarenessScore } = useRealtime();
  
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
        <p className="text-zinc-500">Your election readiness dashboard. All systems are go.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Voter Readiness" value={`${awarenessScore}%`} icon={CheckCircle} delay={0.1} />
        <StatCard title="Next Election" value="May 07, 2024" icon={Clock} delay={0.2} />
        <StatCard title="Days Remaining" value="12 Days" icon={Zap} delay={0.3} />
        <StatCard title="Polling Center" value="Dist 04, Mumbai" icon={MapPin} delay={0.4} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Real-time Awareness Chart */}
        <div className="lg:col-span-2 glass-card p-6 rounded-3xl">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            Awareness Score Trend
            <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-full">+12% from last year</span>
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="name" stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#121212', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  itemStyle={{ color: '#8b5cf6' }}
                />
                <Area type="monotone" dataKey="score" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorScore)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="glass-card p-6 rounded-3xl space-y-6">
          <h3 className="text-lg font-bold">Quick Actions</h3>
          <div className="space-y-3">
            {[
              { label: 'Check Registration', color: 'primary' },
              { label: 'Find Polling Booth', color: 'secondary' },
              { label: 'Download Voter ID', color: 'primary' },
              { label: 'Request Postal Ballot', color: 'accent' },
            ].map((action, i) => (
              <button
                key={i}
                className="w-full flex items-center justify-between p-4 rounded-2xl glass hover:bg-white/10 transition-all group"
              >
                <span className="font-medium text-sm">{action.label}</span>
                <ArrowRight size={16} className="text-zinc-500 group-hover:translate-x-1 transition-transform" />
              </button>
            ))}
          </div>

          <div className="p-6 rounded-2xl glass border border-white/5 group hover:border-primary/50 transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Users size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm">Know Your Candidate</h4>
                <p className="text-[10px] text-zinc-500">Unbiased stats & ratings</p>
              </div>
            </div>
            <Link to="/candidates">
              <button className="w-full py-3 bg-white/5 hover:bg-white/10 rounded-xl text-xs font-bold transition-all border border-white/5">
                View Lists
              </button>
            </Link>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-neon flex flex-col items-center text-center">
            <h4 className="font-bold mb-1">Check My Readiness</h4>
            <p className="text-[10px] text-white/80 mb-4">Complete your profile to get a 100% score</p>
            <button className="bg-white text-black text-xs font-bold px-6 py-2 rounded-full hover:shadow-xl transition-shadow">
              Start Evaluation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
