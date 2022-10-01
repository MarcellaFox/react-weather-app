import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import Search from "./Search";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultLocation);

  function handleResponse(response) {
    // Current datetime at search location, in our local timezone.
    const date = new Date();
    // Remove our timezone offset.
    const timezoneOffsetSeconds = date.getTimezoneOffset() * 60;
    const utcTimestampSeconds = date.valueOf() / 1000 + timezoneOffsetSeconds;
    const searchLocationTimestamp =
      (utcTimestampSeconds + response.data.timezone) * 1000;
    const searchLocationDatetimeNow = new Date(searchLocationTimestamp);

    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      name: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      // date: new Date(response.data.dt * 1000),
      date: searchLocationDatetimeNow,
      feelslike: response.data.main.feels_like,
    });

    props.setTime(searchLocationDatetimeNow);
  }

  function search() {
    const apiKey = "e792da8ba7b0fa0b86908b06e6a23c75";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  // setTime(new Date(response.data.dt * 1000));

  // let hour = new Date(time).getHours();
  // console.log(hour);

  // const DayNightBG = hour > 6 && hour < 18 ? "day-bg" : "night-bg";

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <Search onSubmit={handleSubmit} onChange={handleCityChange} />
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
