const http = require('http');
const city = process.argv[2];
const command = city;

const appid = '9ded821abd12d0dfc1e16de8cec2ac15';

function getWeather(fn) {

  var callback = function(response) {
    let str = '';

    response.on('data', function(chunk) {
      str += chunk;
    })

    response.on('end', function() {
      fn(JSON.parse(str))
    })
  }

  http.request(`http://api.openweathermap.org/data/2.5/weather?q=${command}&mode=json&appid=${appid}`, callback).end();
};

module.exports = getWeather
