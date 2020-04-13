const errorHandler = (err, req, res) => {
  res.status(500).send(err);
};

module.exports = errorHandler;
