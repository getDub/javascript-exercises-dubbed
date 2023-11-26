const convertToCelsius = function(tempF) {
  let convTemp =  (tempF - 32) * 5/9 ;
  let celsius = Math.round(convTemp * 10) / 10;
  return celsius;
};

const convertToFahrenheit = function(tempC) {
  let convTemp = (tempC * 9/5 + 32);
  let fahren = Math.round(convTemp * 10)/10;
  return fahren;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
