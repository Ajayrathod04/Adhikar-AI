const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const dotenv = require('dotenv');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

const electionController = require('./controllers/electionController');
const aiController = require('./controllers/aiController');
const healthRoutes = require('./routes/health');
const insightRoutes = require('./routes/insight');
const analyticsRoutes = require("./routes/analytics");
const newsRoutes = require("./routes/news");
const realtimeRoutes = require("./routes/realtime");
const civicRoutes = require("./routes/civic");
const voterRoutes = require("./routes/voter");

const app = express();

// Security Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rate Limiting
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests, please try later"
}));

// Routes
app.get('/api/timeline', electionController.getTimeline);
app.post('/api/eligibility', electionController.checkEligibility);
app.get('/api/guide', electionController.getVotingGuide);
app.post('/api/ai/chat', aiController.chatWithAI);
app.post('/api/ai/ask', aiController.chatWithAI);
app.use('/api/health', healthRoutes);
app.use('/api/insight', insightRoutes);
app.use("/api", analyticsRoutes);
app.use("/api", newsRoutes);
app.use("/api", realtimeRoutes);
app.use("/api", civicRoutes);
app.use("/api", voterRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'public')));

// SPA Handle: Route all non-api requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Global Error Safety Layer
app.use(errorHandler);

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
