require("./api/models/bike");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const bikeRoutes = require("./api/routes/bike");

const port = process.env.PORT || 5000;

const errorHandler = require("./api/middleware/errorHandler");

const app = express();
mongoose.connect(
  "mongodb+srv://bicycleRent:D7XhIT4qAfmYKU1R@bicyclerent-8pj8f.mongodb.net/bikesRent?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.connection.on("error", err => {
  throw Error(err);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/bike", bikeRoutes);

app.use(errorHandler);

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`);
});
