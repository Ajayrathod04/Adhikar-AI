import { useState, useEffect } from 'react';

export const useRealtime = () => {
  const [stats, setStats] = useState({
    awarenessScore: 75,
    participationTrend: 12
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate slight fluctuations in real-time scores
      setStats(prev => ({
        awarenessScore: Math.min(100, Math.max(0, prev.awarenessScore + (Math.random() > 0.5 ? 1 : -1))),
        participationTrend: prev.participationTrend + (Math.random() > 0.8 ? 1 : 0)
      }));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return stats;
};
