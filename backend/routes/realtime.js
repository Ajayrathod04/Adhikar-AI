const express = require('express');
const router = express.Router();
const { formatResponse } = require('../utils/responseFormatter');

let cache = null;
let lastFetch = 0;
const CACHE_DURATION = 30 * 1000;

/**
 * GET /api/realtime
 * Provides real-time voter turnout and participation statistics
 */
router.get('/', (req, res) => {
  try {
    const now = Date.now();
    if (cache && (now - lastFetch < CACHE_DURATION)) {
      return res.json(formatResponse(cache, true));
    }

    const simulatedData = {
      turnout: "68%",
      activeVoters: 1542000,
      regionStats: {
        north: "65%",
        south: "72%",
        east: "61%",
        west: "70%"
      },
      lastUpdate: new Date().toISOString()
    };

    cache = simulatedData;
    lastFetch = now;

    res.json(formatResponse(simulatedData));
  } catch (err) {
    console.error('[REALTIME] Error:', err.message);
    res.status(500).json(formatResponse(null, false, err.message));
  }
});

module.exports = router;
