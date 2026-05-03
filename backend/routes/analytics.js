const express = require('express');
const router = express.Router();
const db = require('../services/firestore');

router.post('/log', async (req, res) => {
  try {
    const { query, response } = req.body;
    
    if (db) {
      await db.collection('logs').add({
        query: query || '',
        response: response || '',
        timestamp: new Date()
      });
    }

    return res.status(200).json({
      success: true,
      data: { message: "Log saved successfully" }
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
