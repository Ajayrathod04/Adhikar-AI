const express = require('express');
const router = express.Router();
const { formatResponse } = require('../utils/responseFormatter');

let totalRequests = 0;

/**
 * Middleware to count global requests
 */
router.use((req, res, next) => {
  totalRequests++;
  next();
});

/**
 * GET /api/metrics
 * Observability endpoint for system performance.
 */
router.get('/', (req, res) => {
  try {
    const metrics = {
      uptime: process.uptime(),
      memoryUsage: {
        heapUsed: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 100) / 100} MB`,
        rss: `${Math.round(process.memoryUsage().rss / 1024 / 1024 * 100) / 100} MB`
      },
      cpuUsage: process.cpuUsage(),
      totalRequests: totalRequests,
      platform: process.platform,
      timestamp: new Date().toISOString()
    };

    res.json(formatResponse(metrics));
  } catch (err) {
    res.status(500).json(formatResponse(null, false, err.message));
  }
});

module.exports = router;
