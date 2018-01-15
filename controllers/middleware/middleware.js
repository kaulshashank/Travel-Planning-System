var request = require("request");
var config = require("../config.js");

const RAIL_API_KEY = 'vdp6bcelc6';
const PLACES_API_KEY = "AIzaSyDVzedj2k1efF3baRoCWPhjJDr2mah4vWM";

let trainsBtwStations = (req, res, next) => {
  request('https://api.railwayapi.com/v2/between/source/'+req.body.origin_code+'/dest/'+req.body.dest_code+'/date/'+req.body.depart_date+'-'+req.body.depart_month+'-'+req.body.depart_year+'/apikey/'+RAIL_API_KEY+'/',
    (error, response, data) => {
        //console.log("MiddleWARE?!@#")
        //console.log(data);
        res.locals.trainsBtwStations = JSON.parse(data);
        next();
    }
  );
}

let locateDestination = (req, res, next) => {
  request("https://api.railwayapi.com/v2/name-to-code/station/12007/apikey/"+RAIL_API_KEY+"/",
    (error, response, data) => {
      dat = JSON.parse(data);
      //var location = [dat.stations[0].lat, dat.stations[0].lng];
      console.log("MiddleWARE?!@#")
      console.log(dat);
      //res.locals.destLocation = location;
      next();
    });
}

module.exports = {
	trainsBtwStations,
  locateDestination
};
