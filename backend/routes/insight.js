const express = require('express');
const router = express.Router();

// Simulated insight logger
router.post('/log', (req, res) => {
  const { event, details } = req.body;
  console.log(`[Insight Log] ${new Date().toISOString()} - ${event}:`, details);
  
  // Always succeed even if optional processing fails
  res.json({ 
    status: 'success', 
    message: 'Insight captured',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
