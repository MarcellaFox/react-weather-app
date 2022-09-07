import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Weather from "./Weather";
import axios from "axios";

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?`;

export default function App() {
  const apiKey = "e792da8ba7b0fa0b86908b06e6a23c75";
  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lon = position.coords.longitude;
      const lat = position.coords.latitude;
      console.log("position.coords =", position.coords);

      const url = `${apiUrl}lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
      axios.get(url).then((response) => {
        setLocation(response.data.name);
      });
    });
  }, []);

  return (
    <div className="App">
      <div className="container">
        {location === null ? (
          <div>loading current location ... </div>
        ) : (
          <Weather defaultLocation={location} />
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
