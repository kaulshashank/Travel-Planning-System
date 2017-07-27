var express = require("express"),
    app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public')); //Allows us to use "public" folder to store stylesheets and images.

app.get("/", function(req, res) {
  res.render("index");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});