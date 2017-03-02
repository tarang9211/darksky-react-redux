var express = require('express');
var axios = require('axios');
var _ = require('lodash');
var bodyParser = require('body-parser');
var config = require('./config');

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

app.use(express.static(__dirname));

app.get('/', function(req, res) {
  res.sendFile('index.html');
})

//This is a test endpoint. Can delete.
app.get('/api', function(req, res) {
  res.json("Hello");
});

//This endpoint fetches data from the Dark Sky API.
app.get('/api/forecast', function(req, res) {
  var lat   = req.query.latitude;
  var long  = req.query.longitude;
  var requestUrl = config.rootUrl + '/' + config.API_KEY + '/' + lat + ',' + long;

  axios.get(requestUrl)
       .then(function(data) {
         res.status(200).json(data.data);
       })
       .catch(function(error) {
         console.log(error);
       })

});

//This endpoint is used to get the city, country based on the lat, long.
app.get('/api/location', function(req, res) {
  var lat   = req.query.latitude;
  var long  = req.query.longitude;

  var requestUrl = config.geocodeUrl + 'latlng=' + lat + ',' + long;

  axios.get(requestUrl)
       .then(function(data) {
         var results = data.data.results[0].address_components;
         var state = '';
         var country = '';
         results.forEach(function(item) {
           //check if the types property exists
           if (item['types']) {

             //extract the state and country values
             if (_.isEqual(item['types'], ['administrative_area_level_1', 'political'])) {
               state = item['long_name'];
             }

             if (_.isEqual(item['types'], [ 'country', 'political'])) {
               country = item['long_name'];
             }
           }
         });
         res.status(200).json({ state: state, country: country });
       })
       .catch(function(error) {
         console.log(error);
       });
});

server.listen(process.env.PORT || config.port);
console.log('Server running');
