import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Brisbane" />
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
          <a href="https://jolly-pothos-9c9aab.netlify.app/">Netlify</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
