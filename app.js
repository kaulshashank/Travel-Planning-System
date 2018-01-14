//Constants
var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    request = require("request");

let RAIL_API_KEY = "vdp6bcelc6";
let PLACES_API_KEY = "AIzaSyDVzedj2k1efF3baRoCWPhjJDr2mah4vWM"

//Configs
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public')); //Allows us to use "public" folder to store stylesheets and images.
app.use(bodyParser.urlencoded({
	extended : false
}));

//Routes
app.get("/", function(req, res) {
  res.render("index");
});

app.post("/trains", function(req, res) {
  //res.send(req.body);
  req.locals.trainsInput = req.body;
  request('https://api.railwayapi.com/v2/between/source/'+req.body.origin_code+'/dest/'+req.body.dest_code+'/date/'+req.body.depart_date+'-'+req.body.depart_month+'-'+req.body.depart_year+'/apikey/'+RAIL_API_KEY+'/',
    function(error, response, data) {
        var dat = JSON.parse(data);
        req.locals.trainsResponse = dat;
        res.render('trains', {data: dat});
    }
  );
});

app.post("/hotels", function(req, res) {
  request('https://api.railwayapi.com/v2/check-seat/train/'+req.body.selected_train+'/source/'+req.locals.trainsInput.origin_code+'/dest/'+req.locals.trainsInput.dest_code+'/date/'+req.locals.trainsInput.depart_date+'-'+req.locals.trainsInput.depart_month+'-'+req.locals.trainsInput.depart_year+'/pref/3A/quota/GN/apikey/'+RAIL_API_KEY+'/',
    function(error, response, data) {
        
    }
  );
  res.render('hotels');
});

app.get("/plan", function(req, res) {
  res.render('page1');
});

app.post("/places", function(req, res) {
  request("https://maps.googleapis.com/maps/api/place/nearbysearch/json?key="+PLACES_API_KEY+"&location="++"&radius=",
    function(error, response, data) {

    });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
