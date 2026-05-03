/**
 * Enhanced Logger Middleware
 * Integrates with Cloud Logging for structured visibility.
 */
const { log } = require('../services/cloudLogger');

module.exports = (req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    const severity = res.statusCode >= 400 ? 'ERROR' : 'INFO';
    
    const metadata = {
      httpRequest: {
        requestMethod: req.method,
        requestUrl: req.originalUrl,
        status: res.statusCode,
        remoteIp: req.ip,
        userAgent: req.get('user-agent'),
        latency: `${duration / 1000}s`
      },
      responseTime: duration
    };

    log(severity, `${req.method} ${req.originalUrl} ${res.statusCode} (${duration}ms)`, metadata);
  });

  next();
};
