const express = require('express');
const router = express.Router();

router.get('/voter-info', (req, res) => {
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

    return res.status(200).json({
      success: true,
      data: voterData
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
