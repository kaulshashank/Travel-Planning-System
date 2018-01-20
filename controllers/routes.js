const express = require('express');
var router = express.Router();
var request = require("request");
var {trainsBtwStations, locateDestination, findPlaces} = require("./middleware/middleware");


//Routes
router.get("/", (req, res) => {
  res.render("index");
});

router.post("/trains", trainsBtwStations);

router.post("/plan", locateDestination);

//STEP 1: Get list of places on the basis of the train's destination
router.post("/step-1", findPlaces);

//StEP 2: Give more details about selected places.
router.post("/step-2", (req, res) => {
  res.send("OK!");
});

module.exports = router;
