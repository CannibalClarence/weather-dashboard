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
  //ensures the 5-day forecast is removed before displaying the next city's data
  $(".card-deck").empty();

  //gets the weather icon and appends it the page
  var icon = response.current.weather[0].icon;
  var iconImg = $("<img>");
  iconImg.addClass("img-fluid");
  iconImg.attr("src", "https://openweathermap.org/img/wn/" + icon + "@2x.png")
  $("#city").append(iconImg);

  //if statement to update the background color of the UV Index
  var uvi = parseInt(response.current.uvi);
  if (uvi <= 2) {
      $(".color").css({ "background-color": "green", "color": "white" });
  } else if (uvi >= 3 && uvi <= 5) {
      $(".color").css({ "background-color": "yellow", "color": "black" });
  } else if (uvi >= 6 && uvi <= 7) {
      $(".color").css({ "background-color": "orange" });
  } else if (uvi >= 8 && uvi <= 10) {
      $(".color").css({ "background-color": "red", "color": "white" });
  } else if (uvi >= 11) {
      $(".color").css({ "background-color": "violet", "color": "white" });
  }

  //populates the corresponding html IDs with the current weather data
  $("#temp").text("Temperature: " + response.current.temp + "° F");
  $("#humidity").text("Humidity: " + response.current.humidity + "%");
  $("#wind").text("Wind Speed: " + response.current.wind_speed + " MPH");
  $(".color").text(response.current.uvi);

 