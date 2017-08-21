const getWeather = require('./openWeather');

getWeather(function(str){
  const tempFar = Math.round(str.main.temp * 9/5 - 459.67);
  console.log(`Temperature in Farenheit: ${tempFar}`);
})
