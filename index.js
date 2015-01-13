var path = require("path");
var express = require("express");
var app = express();

var data = require("./data")();

app.engine(".html", require("ejs").__express);
app.set("views", path.join(__dirname, "app/views"));
app.set("view engine", "html");

app.use("/assets", express.static("app/assets"));
app.use("/lib", express.static("bower_components"));
app.use("/depnunkei", express.static("depnunkei"));

app.get("/", function(req, res) {
  res.render("index", {data: data});
});

var port = 8080;
var ipaddr = null;

var server = app.listen(port, ipaddr, function() {
  console.log("Listening on port %d", server.address().port);
});