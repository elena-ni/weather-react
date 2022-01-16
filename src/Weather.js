import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("null");
  let [weather, setWeather] = useState({});
  let [received, setReceived] = useState(false);

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter your city..."
        onChange={updateCity}
      />
      <input type="submit" value="search" />
    </form>
  );

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "d8c1bd48cd032053d67d5b8779cfce9c";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function displayWeather(response) {
    setReceived(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      visibility: response.data.visibility
    });
  }

  if (received) {
    return (
      <div>
        {form}
        <h2>{city}</h2>
        <ul>
          <li>Temp: {Math.round(weather.temperature)}°C</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Visibility: {weather.visibility}m</li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
