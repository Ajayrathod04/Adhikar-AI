const { log } = require('../services/cloudLogger');

const logInfo = (message, metadata = {}) => {
  log('INFO', message, metadata);
};

const logError = (message, error = {}) => {
  log('ERROR', message, { error: error.message || error, stack: error.stack });
};

module.exports = { logInfo, logError };
