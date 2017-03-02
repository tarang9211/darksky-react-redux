/**
* Global configuration file to store important urls and API_KEYS.
* Ideally, the API_KEY would not be provided and a user would have to obtain   * their own key.
* For ease of use, I am checking my personal API_KEY for Dark Sky.
*/
var config = {
  rootUrl: 'https://api.darksky.net/forecast',
  API_KEY: '61bbaae2f63f32da32c845cdb2eea9a8',
  port: 8080,
  geocodeUrl: 'http://maps.googleapis.com/maps/api/geocode/json?',
}

module.exports = config;
