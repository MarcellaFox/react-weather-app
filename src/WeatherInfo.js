import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.name}</h1>
      <div className="main-icon">
        <WeatherIcon code={props.data.icon} />
      </div>

      <WeatherTemperature celsius={props.data.temperature} />
      <ul>
        <li className="text-capitalize">{props.data.description}</li>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
      </ul>
      <div className="weather-details">
        <ul>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind} km/h</li>
        </ul>
      </div>
    </div>
  );
}
