const express = require('express');
var router = express.Router();
var request = require("request");
var {trainsBtwStations, locateDestination} = require("./middleware/middleware");


//Routes
router.get("/", (req, res) => {
  res.render("index");
});

router.post("/trains", trainsBtwStations, (req, res) => {
  res.render('trains', {data: res.locals.trainsBtwStations});
});

router.post("/plan", locateDestination, (req, res) => {
  //var location = res.locals.destLocation;
  //res.render('step-1', {data: location});
  res.send("OK!1");
});

//STEP 1: Get list of places on the basis of the train's destination
router.post("/step-1", (req, res) => {
  request("https://maps.googleapis.com/maps/api/place/nearbysearch/json?key="+PLACES_API_KEY+"&location="+"&radius=",
    (error, response, data) => {
      res.send("OK!");
    });
});

module.exports = router;
