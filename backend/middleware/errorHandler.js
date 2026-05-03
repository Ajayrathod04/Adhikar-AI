const { formatResponse } = require('../utils/responseFormatter');

/**
 * Global error handling middleware
 */
module.exports = (err, req, res, next) => {
  console.error(`[ERROR] ${new Date().toISOString()}:`, err.stack);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json(formatResponse(null, false, message));
};
