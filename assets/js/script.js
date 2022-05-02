$(document).ready(function () {
    //cityName to hold the user input
    var cityName = "";
    //latitude and longitude are retrieved in first API and needed for second API call
    var lat = "";
    var lon = "";

    //function that gets the rest of the current weather and the daily weather
    function getWeatherOneAPI(a,b) {
        var queryURL2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + a + "&lon=" + b + "&exclude=minutely,hourly&appid=aec299195260a001b09706b5bfe740f7&units=imperial";

        //second API call to get the rest of the current weather data along with the 5 day forecast
        $.ajax({
            url: queryURL2,
            method: "GET"
        }).then(function (response) {
            console.log(response);

          