const express = require('express');
const router = express.Router();
const { formatResponse } = require('../utils/responseFormatter');

/**
 * GET /api/civic/assets
 * Returns national and election symbols for UI display
 */
router.get('/assets', (req, res) => {
  try {
    const civicData = {
      nationalSymbols: [
        { name: "Ashoka Lion Capital", image: "/assets/lion.png" },
        { name: "Parliament of India", image: "/assets/parliament.png" }
      ],
      electionAssets: [
        { name: "Voter Ink Finger", image: "/assets/vote.png" },
        { name: "Electronic Voting Machine", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Electronic_Voting_Machine_India.jpg/1200px-Electronic_Voting_Machine_India.jpg" }
      ]
    };

    return res.json(formatResponse(civicData));
  } catch (err) {
    console.error('[CIVIC-ROUTE] Error:', err.message);
    return res.json(formatResponse({ fallback: true }, true, "Standard civic assets loaded"));
  }
});

module.exports = router;
