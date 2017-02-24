var express = require('express');
var axios = require('axios');
var bodyParser = require('body-parser');

var port = 8081;
var rootUrl = 'https://api.darksky.net/forecast';
var API_KEY = '61bbaae2f63f32da32c845cdb2eea9a8';

var app = express();
var server = require('http').createServer(app);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Bypassing CORS issue
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api', function(req, res) {
  res.json("Hello");
});

app.get('/api/forecast', function(req, res) {
  console.log('LATITUDE', req.query.latitude);
  console.log('LONGITUDE', req.query.longitude);
  var lat = req.query.latitude;
  var long = req.query.longitude;
  var requestUrl = rootUrl + '/' + API_KEY + '/' + lat + ',' + long;
  console.log(requestUrl);

  axios.get(requestUrl)
       .then(function(data) {
         res.json(data.data);
       })
       .catch(function(error) {
         console.log(error);
       })

});


server.listen(port);
console.log('Server running');
