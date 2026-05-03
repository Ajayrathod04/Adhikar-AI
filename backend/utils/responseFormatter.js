/**
 * Standardized response formatter for all API endpoints
 */
exports.formatResponse = (data, success = true, message = "") => {
  return {
    success,
    timestamp: new Date().toISOString(),
    message,
    data
  };
};
