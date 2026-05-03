const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const compression = require('compression');
const dotenv = require('dotenv');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

const requestLogger = require('./middleware/logger');
const electionController = require('./controllers/electionController');
const aiController = require('./controllers/aiController');
const healthRoutes = require('./routes/health');
const insightRoutes = require('./routes/insight');
const pollingRoutes = require("./routes/polling");
const newsRoutes = require("./routes/news");
const realtimeRoutes = require("./routes/realtime");
const analyticsRoutes = require("./routes/analytics");
const metricsRoutes = require("./routes/metrics");
const candidatesRoutes = require("./routes/candidates");
const voterRoutes = require("./routes/voter");
const civicRoutes = require("./routes/civic");

const app = express();

// Performance & Observability
app.use(compression());
app.use(requestLogger);

// Security Middleware (STRICT)
app.use(helmet({
  contentSecurityPolicy: false, // Allow inline styles for demo/hackathon ease
}));
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Rate Limiting (FAIL-SAFE)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: "Too many requests, please try again later."
});
app.use("/api/", limiter);

// Routes
app.get('/api/timeline', electionController.getTimeline);
app.post('/api/eligibility', electionController.checkEligibility);
app.get('/api/guide', electionController.getVotingGuide);
app.post('/api/ai/chat', aiController.chatWithAI);
app.post('/api/ai/ask', aiController.chatWithAI);
app.use('/api/health', healthRoutes);
app.use('/api/insight', insightRoutes);
app.use("/api/log", analyticsRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/realtime", realtimeRoutes);
app.use("/api/voter-info", voterRoutes);
app.use("/api/polling-booths", pollingRoutes);
app.use("/api/metrics", metricsRoutes);
app.use("/api/candidates", candidatesRoutes);
app.use("/api/civic", civicRoutes);


app.get("/health", (req, res) => {
  res.status(200).json({ 
    status: "ok", 
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'public')));

// SPA Handle: Route all non-api requests to index.html
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api/')) {
    return next();
  }
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 404 Handler for API
app.use('/api/*', (req, res) => {
  res.status(404).json(formatResponse(null, false, `Endpoint ${req.originalUrl} not found`));
});

// Global Error Safety Layer
app.use(errorHandler);

// API Health Check
app.get('/api/health', (req, res) => res.json({ status: 'OK', uptime: process.uptime() }));

// For Testing
if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
