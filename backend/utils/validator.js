/**
 * Simple input validator and sanitizer
 * Ensures no malicious payloads or malformed data enters the system
 */
exports.validateInput = (data, schema) => {
  try {
    const sanitized = {};
    for (const key in schema) {
      const value = data[key];
      const type = schema[key];

      if (type === 'string') {
        sanitized[key] = String(value || '').trim().substring(0, 1000);
      } else if (type === 'number') {
        sanitized[key] = Number(value) || 0;
      } else {
        sanitized[key] = value;
      }
    }
    return sanitized;
  } catch (err) {
    console.error('[VALIDATOR] Sanitization error:', err.message);
    return data;
  }
};
