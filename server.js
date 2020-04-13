require("./api/models/bike");
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const errorHandler = require("./api/middleware/errorHandler");
const bikeRoutes = require("./api/routes/bike");

const NODE_PORT = process.env.NODE_PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

const app = express();
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on("error", err => {
  throw Error(err);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/bike", bikeRoutes);

app.use(errorHandler);

app.listen(NODE_PORT, function() {
  console.log(`Rental app is listening on port ${NODE_PORT}!`);
});
