const express = require("express");
const router = express.Router();
const bikeController = require("../controllers/bike");

router.get("/", bikeController.getBikeList);
router.post("/", bikeController.bikeCreate);
router.put("/", bikeController.bikeUpdate);
router.delete("/", bikeController.bikeDelete);

module.exports = router;
