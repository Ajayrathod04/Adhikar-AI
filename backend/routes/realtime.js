const express = require('express');
const router = express.Router();

router.get('/realtime', (req, res) => {
  try {
    const simulatedData = {
      turnout: "68%",
      activeVoters: 1542000,
      regionStats: {
        north: "65%",
        south: "72%",
        east: "61%",
        west: "70%"
      }
    };

    return res.status(200).json({
      success: true,
      data: simulatedData
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
