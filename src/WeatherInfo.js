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

      <div className="main-info">
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
      <div className="weather-details">
        <ul>
          <li>Humidity {props.data.humidity}%</li>
          <li>Wind {props.data.wind} km/h</li>
          <li>Feels Like {Math.round(props.data.feelslike)}º</li>
        </ul>
      </div>
    </div>
  );
}
