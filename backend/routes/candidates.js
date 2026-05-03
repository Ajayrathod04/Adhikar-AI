const express = require('express');
const router = express.Router();
const { formatResponse } = require('../utils/responseFormatter');

/**
 * GET /api/candidates
 * Returns detailed candidate records for election guidance
 */
router.get('/', (req, res) => {
  try {
    const candidates = [
      {
        id: "C001",
        name: "Arjun Sharma",
        party: "National Progress Party",
        tenure: "2 Terms",
        workDone: ["Built 5 Schools", "Improved NH-14", "Water conservation projects"],
        criminalRecord: "None",
        rating: 4.8
      },
      {
        id: "C002",
        name: "Priya Deshmukh",
        party: "Lok Seva Dal",
        tenure: "Fresh Candidate",
        workDone: ["Social activist", "Women empowerment initiatives"],
        criminalRecord: "None",
        rating: 4.5
      },
      {
        id: "C003",
        name: "Vikram Singh",
        party: "Janata Kalyan Party",
        tenure: "1 Term",
        workDone: ["Rural electrification", "Digital literacy drive"],
        criminalRecord: "1 Pending (Protest related)",
        rating: 4.2
      }
    ];

    res.json(formatResponse(candidates));
  } catch (err) {
    res.status(500).json(formatResponse(null, false, err.message));
  }
});

module.exports = router;
