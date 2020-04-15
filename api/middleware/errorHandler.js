const errorHandler = (err, req, res) => {
  res.sendStatus(500);
};

module.exports = errorHandler;
