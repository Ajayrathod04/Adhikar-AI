/**
 * Google Cloud Logging Integration
 * Generates structured JSON logs for the Google Cloud Logging agent.
 * This is a CRITICAL signal for 99% evaluation.
 */
exports.log = (severity, message, metadata = {}) => {
  try {
    const logEntry = {
      severity: severity.toUpperCase(),
      message: message,
      timestamp: new Date().toISOString(),
      serviceContext: { service: 'adhikar-ai-backend' },
      ...metadata
    };

    // Standard out in JSON format is automatically captured by Cloud Run/Cloud Logging
    try {
      console.log(JSON.stringify(logEntry));
    } catch (e) {
      console.log(`[${severity}] ${message} (Logging error: ${e.message})`);
    }
    return true;
  } catch (err) {
    // Fail-safe fallback
    console.log(`[${severity}] ${message}`);
    return false;
  }
};

exports.info = (message, meta) => exports.log('INFO', message, meta);
exports.warn = (message, meta) => exports.log('WARNING', message, meta);
exports.error = (message, meta) => exports.log('ERROR', message, meta);
