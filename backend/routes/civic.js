const express = require('express');
const router = express.Router();

router.get('/civic-assets', (req, res) => {
  try {
    const civicData = {
      nationalSymbols: [
        { name: "Ashoka Lion Capital", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Ashoka_Chakra.svg/1200px-Ashoka_Chakra.svg.png" },
        { name: "Parliament of India", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Parliament_of_India.jpg/1200px-Parliament_of_India.jpg" }
      ],
      electionAssets: [
        { name: "Polling Booth", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Polling_booth.jpg/1200px-Polling_booth.jpg" },
        { name: "Voting Machine", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Electronic_Voting_Machine_India.jpg/1200px-Electronic_Voting_Machine_India.jpg" }
      ]
    };

    return res.status(200).json({
      success: true,
      data: civicData
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
