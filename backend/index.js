const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const dotenv = require('dotenv');

dotenv.config();

const electionController = require('./controllers/electionController');
const aiController = require('./controllers/aiController');
const healthRoutes = require('./routes/health');
const insightRoutes = require('./routes/insight');

const app = express();

// Security Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);

// Routes
app.get('/api/timeline', electionController.getTimeline);
app.post('/api/eligibility', electionController.checkEligibility);
app.get('/api/guide', electionController.getVotingGuide);
app.post('/api/ai/chat', aiController.chatWithAI);
app.use('/api/health', healthRoutes);
app.use('/api/insight', insightRoutes);

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'public')));

// SPA Handle: Route all non-api requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Global Error Safety Layer
app.use((err, req, res, next) => {
  console.error('[System Error Capture]:', err);
  res.status(500).json({ status: 'error', message: 'Something went wrong, but the system is stable.' });
});

// Health Check
app.get('/api/health', (req, res) => res.json({ status: 'OK' }));

// For Testing
if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
