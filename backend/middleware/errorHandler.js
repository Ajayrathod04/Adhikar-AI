const errorHandler = (err, req, res, next) => {
  console.error('[Global Error]:', err);
  res.status(500).json({
    success: false,
    message: "Too many requests, please try later",
    fallback: true
  });
};

module.exports = errorHandler;
