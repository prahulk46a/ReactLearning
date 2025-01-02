import React, { useEffect, useState } from "react";

const UseEffect_Task7 = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [isFetching, setIsFetching] = useState(true);

  const fetchWeather = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=London&appid=API_KEY"
    )
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch weather");
        return response.json();
      })
      .then((data) => setWeather(data))
      .catch((err) => setError(err.message));
  };

  useEffect(() => {
    if (!isFetching) return;

    fetchWeather();
    const interval = setInterval(fetchWeather, 10000);

    return () => clearInterval(interval);
  }, [isFetching]);

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {weather ? (
        <div>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={() => setIsFetching(!isFetching)}>
        {isFetching ? "Stop Fetching" : "Resume Fetching"}
      </button>
    </div>
  );
};

export default UseEffect_Task7;
