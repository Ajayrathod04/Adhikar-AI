const express = require('express');
const router = express.Router();
const { logInfo, logError } = require('../utils/logger');
const { formatResponse } = require('../utils/responseFormatter');

let cache = null;
let lastFetch = 0;
const CACHE_DURATION = 60 * 1000;

router.get('/', (req, res) => {
  try {
    const now = Date.now();
    if (cache && (now - lastFetch < CACHE_DURATION)) {
      logInfo('Returning cached news data');
      return res.json(formatResponse(cache, true));
    }

    const newsData = [
      {
        title: "Election Commission Announces Polling Dates",
        description: "The official dates for the upcoming general elections have been released by the EC.",
        date: new Date().toISOString(),
        source: "Official EC Portal"
      },
      {
        title: "Voter Registration Drive Extended",
        description: "Citizens now have an extra week to register themselves on the electoral roll.",
        date: new Date(Date.now() - 86400000).toISOString(),
        source: "National News"
      }
    ];

    cache = newsData;
    lastFetch = now;
    logInfo('Fetched fresh news data');

    return res.json(formatResponse(newsData));
  } catch (err) {
    logError('Error in news route', err);
    return res.status(500).json(formatResponse(null, false, err.message));
  }
});

module.exports = router;
