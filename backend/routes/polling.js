const express = require('express');
const router = express.Router();
const { formatResponse } = require('../utils/responseFormatter');

/**
 * GET /api/polling-booths
 * Returns localized polling booth information
 */
router.get('/', (req, res) => {
  try {
    const booths = [
      { id: 1, name: "Public School Sector 4", location: "District A, Mumbai", voters: 1250, status: "Open", queue: "Low" },
      { id: 2, name: "Community Hall 12", location: "District B, Delhi", voters: 980, status: "Open", queue: "Moderate" },
      { id: 3, name: "Primary Health Center", location: "District C, Pune", voters: 2100, status: "Busy", queue: "High" },
      { id: 4, name: "Zilla Parishad School", location: "Rural Sector 1, Nagpur", voters: 750, status: "Open", queue: "Minimal" }
    ];

    res.json(formatResponse(booths));
  } catch (err) {
    res.status(500).json(formatResponse(null, false, err.message));
  }
});

module.exports = router;
