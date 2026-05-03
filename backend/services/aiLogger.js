const db = require('./firestore');
const { log } = require('./cloudLogger');

/**
 * Log interactions to Firestore and Cloud Logging
 * collection: analytics_logs
 */
exports.logInteraction = async (query, response, sessionId = 'guest', queryType = 'AI_ASK') => {
  const logData = {
    query,
    response,
    sessionId,
    queryType,
    createdAt: new Date().toISOString(),
    platform: 'adhikar-ai-web'
  };

  try {
    // 1. Structured Cloud Logging (MANDATORY)
    log('INFO', `Interaction logged: ${queryType}`, { interaction: logData });

    // 2. Firestore Storage
    if (db && typeof db.collection === 'function') {
      try {
        await db.collection('analytics_logs').add(logData);
      } catch (dbErr) {
        console.warn('[AI-LOGGER] Firestore insert failed:', dbErr.message);
      }
    } else {
      console.log('[AI-LOGGER] Firestore unavailable or mocked, bypassing storage');
    }
    
    return true;
  } catch (err) {
    console.error('[AI-LOGGER] Logging system error:', err.message);
    return true; // Always return true to avoid breaking the main flow
  }
};

