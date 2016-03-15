var apiKey = require('./../.env').apiKey;
var toFarenheit = require('./../js/temperature.js').toFarenheit;


$(document).ready(function(){
  $('#weatherLocation').click(function(){
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response)
    {
      var temper = response.main.temp
      $('.showWeather').text("The temperature in " + city + " is " + toFarenheit(temper) + " Kelvin");
    }).fail(function(error){
      $('.showWeather').text(error.message);
    });
  });
});
