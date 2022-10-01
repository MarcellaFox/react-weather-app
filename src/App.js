import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Weather from "./Weather";
import axios from "axios";

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?`;

export default function App() {
  const apiKey = "e792da8ba7b0fa0b86908b06e6a23c75";
  const [location, setLocation] = useState(null);
  const [time, setTime] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lon = position.coords.longitude;
      const lat = position.coords.latitude;

      const url = `${apiUrl}lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
      axios.get(url).then((response) => {
        setLocation(response.data.name);
        setTime(new Date(response.data.dt * 1000));
      });
    });
  }, []);

  let hour = new Date(time).getHours();
  const DayNightBG = hour > 6 && hour < 18 ? "day-bg" : "night-bg";

  return (
    <div className={`App ${DayNightBG}`}>
      <div className="container weather-container">
        {location === null ? (
          <div>loading current location ... </div>
        ) : (
          <Weather defaultLocation={location} setTime={setTime} />
        )}

        <footer>
          This project was coded by Marcella Fox. It is{" "}
          <a
            href="https://github.com/MarcellaFox/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://jolly-pothos-9c9aab.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
