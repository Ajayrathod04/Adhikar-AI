const express = require('express');
const router = express.Router();
const { logInteraction } = require('../services/aiLogger');
const { formatResponse } = require('../utils/responseFormatter');

/**
 * POST /api/log
 * Analytics endpoint for tracking AI interactions and user events
 */
router.post('/', async (req, res) => {
  const { query, response, eventType } = req.body;
  
  try {
    // Isolated logging attempt - never breaks response
    logInteraction(query || eventType, response || 'EVENT_LOGGED')
      .catch(err => console.error('[ANALYTICS] Background log failed:', err.message));

    res.json(formatResponse({ status: 'queued' }, true, "Event logged successfully"));
  } catch (err) {
    // Fail-safe: Always return success for analytics to prevent frontend breakage
    res.json(formatResponse({ status: 'ignored' }, true, "Analytics processed with fail-safe"));
  }
});

module.exports = router;
