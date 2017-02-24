var express = require('express');
var bodyParser = require('body-parser');

var port = 8081;
var rootUrl = 'https://api.darksky.net/forecast';
var API_KEY = '61bbaae2f63f32da32c845cdb2eea9a8';

var app = express();
var server = require('http').createServer(app);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api', function(req, res) {
  console.log('endpoint 1 working');
  res.json("Hello");
});

app.get('/api/forecast', function(req, res) {
  console.log('LATITUDE', req.query.latitude);
  console.log('LONGITUDE', req.query.longitude);
  var lat = req.query.latitude;
  var long = req.query.longitude;
  var requestUrl = rootUrl + '/' + API_KEY + '/' + lat + ',' + long;

  fetch(requestUrl)
    .then(function(data) {
      res.status(200).json(data);
    })
    .catch(function(err){
      console.log(err);
    })
});


server.listen(port);
console.log('Server running');
