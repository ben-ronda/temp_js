exports.toFarenheit = function(kelvin) {
  var farenheit = ((1.8*(kelvin-273))+32);
  return farenheit;
}

exports.toCelsius = function(kelvin){
  var celsius = (kelvin-273.15);
  return celsius;
}
