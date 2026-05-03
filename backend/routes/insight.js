const express = require('express');
const router = express.Router();
const { log } = require('../services/cloudLogger');
const { formatResponse } = require('../utils/responseFormatter');

/**
 * POST /api/insight/log
 * Simulated insight logger for user interaction tracking
 */
router.post('/log', (req, res) => {
  const { event, details } = req.body;
  log('INFO', `Insight event: ${event || 'USER_ACTION'}`, { details });
  
  res.json(formatResponse({ status: 'captured' }, true, "Insight logged to Cloud stack"));
});

module.exports = router;
