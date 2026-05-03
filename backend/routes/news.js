const express = require('express');
const router = express.Router();

router.get('/news', (req, res) => {
  try {
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

    return res.status(200).json({
      success: true,
      data: newsData
    });
  } catch (err) {
    console.log(err);
    return res.status(200).json({
      success: true,
      fallback: true
    });
  }
});

module.exports = router;
