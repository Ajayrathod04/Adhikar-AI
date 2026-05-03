import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Timeline from './pages/Timeline';
import Eligibility from './pages/Eligibility';
import VotingGuide from './pages/VotingGuide';
import AIAssistant from './pages/AIAssistant';
import Landing from './pages/Landing';
import Candidates from './pages/Candidates';
import DailyNews from './pages/DailyNews';
import PollingBooth from './pages/PollingBooth';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/welcome" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/eligibility" element={<Eligibility />} />
          <Route path="/guide" element={<VotingGuide />} />
          <Route path="/ai" element={<AIAssistant />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/news" element={<DailyNews />} />
          <Route path="/booth" element={<PollingBooth />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
