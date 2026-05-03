const express = require('express');
const router = express.Router();
const { formatResponse } = require('../utils/responseFormatter');

/**
 * GET /api/health
 * Simple health check for API availability
 */
router.get('/', (req, res) => {
  res.json(formatResponse({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    service: 'Adhikar AI Core'
  }));
});

module.exports = router;
