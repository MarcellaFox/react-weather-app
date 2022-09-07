import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <div className="forecast-icon">
        <WeatherIcon code={props.data.weather[0].icon} />
      </div>
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}º
        </span>
        <span className="WeatherForecast-temperature-max">
          {" "}
          {maxTemperature()}º
        </span>
      </div>
    </div>
  );
}
