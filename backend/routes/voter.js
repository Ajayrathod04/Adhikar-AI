const express = require('express');
const router = express.Router();

const { formatResponse } = require('../utils/responseFormatter');

router.get('/', (req, res) => {
  try {
    const voterData = {
      pollingBooth: {
        location: "Sample Area",
        boothNumber: 101,
        timing: "7 AM - 6 PM"
      },
      voterGuidelines: [
        "Carry valid ID",
        "Follow queue rules",
        "Maintain discipline"
      ],
      voterListSample: [
        { name: "Voter 1", id: "XXXX1234" },
        { name: "Voter 2", id: "XXXX5678" }
      ]
    };

    return res.json(formatResponse(voterData));
  } catch (err) {
    console.error('[VOTER-ROUTE] Error:', err.message);
    return res.json(formatResponse({ fallback: true }, true, "Using local voter guide"));
  }
});


module.exports = router;
