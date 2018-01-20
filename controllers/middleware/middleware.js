var request = require("request");
var config = require("../config.js");

const RAIL_API_KEY = 'vdp6bcelc6';
const PLACES_API_KEY = "AIzaSyBenaurVtR1_PhFyVi-q51pQEoxxqp5_OM";

let trainsBtwStations = (req, res, next) => {
  request('https://api.railwayapi.com/v2/between/source/'+req.body.origin_code+'/dest/'+req.body.dest_code+'/date/'+req.body.depart_date+'-'+req.body.depart_month+'-'+req.body.depart_year+'/apikey/'+RAIL_API_KEY+'/',
    (error, response, data) => {
        if(error) {
          console.log(error);
          console.log(data);
          console.log(response);
          return;
        }
        var dat = JSON.parse(data);
        res.render('trains', {dat});
    }
  );
}

let locateDestination = (req, res, next) => {
  request("https://api.railwayapi.com/v2/code-to-name/code/"+req.body.selected_train+"/apikey/"+RAIL_API_KEY+"/",
    (error, response, data) => {
      dat = JSON.parse(data);
      if(error) {
        console.log(error);
        return;
      }
      var location = [dat.stations[0].lat, dat.stations[0].lng];
      request("https://maps.googleapis.com/maps/api/geocode/json?latlng="+location+"&sensor=true&language=en&key="+PLACES_API_KEY,
        (err, response, resource) => {
          var abc = JSON.parse(resource);
          var city_name = abc.results[0].address_components[abc.results[0].address_components.length - 4].long_name; //third last component is generally the name of the state
          res.render('step-1', {city_name});
      });

    });
}

let findPlaces = (req, res, next) => {
  if(req.body.site_seeing == 'true') {
    request("https://maps.googleapis.com/maps/api/place/textsearch/json?language=en&key="+PLACES_API_KEY+"&query="+req.body.location+"+places+of+interest",
      (error, response, data) => {
        if(error) {
          res.send(error);
        }
        var dat = JSON.parse(data);
        res.render("step-2", {dat});
      });
  } else {
      res.send("Business mode under development.")
  }
}

module.exports = {
	trainsBtwStations,
  locateDestination,
  findPlaces
};
