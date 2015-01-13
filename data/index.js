/*
 * /assets/js/data.js is a dynamically generated file
 * All website content is described in the data folder
 * and is populated into data.js.
 * This allows the content of the website to be changed independently of the rendering.
 */

var fs = require("fs"),
  path = require("path");

module.exports = function() {
  var data = {};
  fs.readdirSync(__dirname).forEach(function(file) {
    if(file.indexOf(".json", file.length - 5) !== -1) {
      var fileData = JSON.parse(fs.readFileSync(path.join(__dirname, file)));
      data[file.substring(0, file.length - 5)] = fileData;
    }
  });
  return data;
};