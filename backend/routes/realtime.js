const express = require('express');
const router = express.Router();
const { logInfo, logError } = require('../utils/logger');

let cache = null;
let lastFetch = 0;
const CACHE_DURATION = 30 * 1000;

router.get('/realtime', (req, res) => {
  try {
    const now = Date.now();
    if (cache && (now - lastFetch < CACHE_DURATION)) {
      logInfo('Returning cached realtime data');
      return res.status(200).json({ success: true, data: cache, cached: true });
    }

    const simulatedData = {
      turnout: "68%",
      activeVoters: 1542000,
      regionStats: {
        north: "65%",
        south: "72%",
        east: "61%",
        west: "70%"
      }
    };

    cache = simulatedData;
    lastFetch = now;
    logInfo('Generated fresh realtime data');

    return res.status(200).json({
      success: true,
      data: simulatedData
    });
  } catch (err) {
    logError('Error in realtime route', err);
    return res.status(200).json({
      success: true,
      fallback: true
    });
  }
});

module.exports = router;
