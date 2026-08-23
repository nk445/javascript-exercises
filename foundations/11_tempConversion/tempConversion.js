const convertToCelsius = function(temp_f) {
  temp_c = (temp_f - 32) * (5/9);
  temp_c = Math.round(temp_c * 10) / 10;
  return temp_c;
};

const convertToFahrenheit = function(temp_c) {
  temp_f = (temp_c * (9/5)) + 32;
  temp_f = Math.round(temp_f * 10) / 10;
  return temp_f;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
