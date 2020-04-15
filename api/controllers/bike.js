const mongoose = require("mongoose");
const Bike = mongoose.model("Bike");

exports.bikeUpdate = function(req, res, next) {
  const { _id } = req.body;
  if (!_id || typeof _id !== "string") {
    return next(Error());
  }
  const updatedBike = { ...req.body, takenDate: new Date() };
  Bike.updateOne({ _id }, updatedBike)
    .then(() => {
      res.json(updatedBike);
    })
    .catch(e => next(e));
};

exports.bikeDelete = function(req, res, next) {
  const { _id } = req.body;
  if (!_id || typeof _id !== "string") {
    next();
    return;
  }
  Bike.deleteOne({ _id })
    .then(() => {
      res.json("ok");
    })
    .catch(e => next(e));
};

exports.bikeCreate = function(req, res, next) {
  const bike = new Bike(req.body);

  bike
    .save()
    .then(() => res.json(bike))
    .catch(e => next(e));
};

exports.getBikeList = function(req, res, next) {
  Bike.find({})
    .then(results => res.json(results))
    .catch(e => next(e));
};
