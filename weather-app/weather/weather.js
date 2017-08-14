const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/3756bb2ac1f28ef8449f1c48a80962f3/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if(error) {
      callback('Unable to connect to the weather overlords.');
    }
    else if(response.statusCode === 400) {
      callback('Unable to fetch weather data');
    }
    else if(response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature,
        summary: body.currently.summary
      });
    }
  });
};

module.exports = {
  getWeather
};
