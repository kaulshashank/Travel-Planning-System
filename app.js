//Constants
var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    routes = require("./controllers/routes.js");

//Configs
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
	extended : false
}));
app.use('/', routes);

//App listener
app.listen(3000, function () {
  console.log('Server running on port 3000.')
});
