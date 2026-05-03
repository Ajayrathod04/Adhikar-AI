const db = require('./firestore');

/**
 * Log AI interactions for analytics and safety
 */
exports.logInteraction = async (query, response) => {
  const logData = {
    query,
    response,
    timestamp: new Date().toISOString(),
    platform: 'adhikar-ai-web'
  };

  try {
    if (db) {
      await db.collection('ai_logs').add(logData);
      console.log('[AI-LOGGER] Interaction logged to Firestore');
    } else {
      console.log('[AI-LOGGER] Firestore unavailable, falling back to console:', logData);
    }
  } catch (err) {
    console.error('[AI-LOGGER] Logging failed:', err.message);
  }
};
