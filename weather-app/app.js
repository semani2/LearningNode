const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=4944%20Summit%20arbor%20drive%20raleigh',
  json: true
}, (error, response, body) => {
  console.log(body);
});
