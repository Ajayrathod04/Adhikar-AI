const logInfo = (message) => {
  console.log(`[INFO] ${new Date().toISOString()}: ${message}`);
};

const logError = (message, error) => {
  console.error(`[ERROR] ${new Date().toISOString()}: ${message}`, error);
};

module.exports = { logInfo, logError };
