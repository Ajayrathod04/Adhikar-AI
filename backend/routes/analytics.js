const express = require('express');
const router = express.Router();
const { log } = require('../services/cloudLogger');
const { insertAnalytics } = require('../services/bigquery');
const { logInteraction } = require('../services/aiLogger');
const { formatResponse } = require('../utils/responseFormatter');

/**
 * POST /api/log
 * Analytics endpoint for tracking AI interactions and user events
 */
router.post('/', async (req, res) => {
  const { query, response, eventType } = req.body;
  
  try {
    // Cloud Logging (Enterprise Signal)
    log(`Analytics event: ${eventType || 'AI_QUERY'}`, 'INFO', { query });

    // BigQuery (Data Warehouse Signal)
    insertAnalytics({ query, response, eventType: eventType || 'AI_QUERY' });

    // AI Logger (Firestore)
    logInteraction(query || eventType, response || 'EVENT_LOGGED')
      .catch(err => console.error('[ANALYTICS] Background log failed:', err.message));

    res.json(formatResponse({ status: 'queued' }, true, "Event captured by Google Cloud stack"));
  } catch (err) {
    // Fail-safe: Always return success for analytics to prevent frontend breakage
    res.json(formatResponse({ status: 'ignored' }, true, "Analytics processed with fail-safe"));
  }
});

module.exports = router;
