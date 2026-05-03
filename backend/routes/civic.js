const express = require('express');
const router = express.Router();

router.get('/civic-assets', (req, res) => {
  try {
    const civicData = {
      nationalSymbols: [
        { name: "Ashoka Lion Capital", image: "/images/ashoka_lions.png" },
        { name: "Parliament of India", image: "/images/parliament.png" }
      ],
      electionAssets: [
        { name: "Voter Ink Finger", image: "/images/voter_ink.png" },
        { name: "Electronic Voting Machine", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Electronic_Voting_Machine_India.jpg/1200px-Electronic_Voting_Machine_India.jpg" }
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
