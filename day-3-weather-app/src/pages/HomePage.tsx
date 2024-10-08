// src/pages/HomePage.tsx
import React, { useState } from "react";
import useWeather from "../hooks/useWeather";
import WeatherDisplay from "../components/WeatherDisplay";

const HomePage: React.FC = () => {
  const [city, setCity] = useState("");
  const { fetchWeather } = useWeather();

  const handleSearch = () => {
    if (city.trim() !== "") {
      fetchWeather(city);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="mb-8 text-4xl font-bold">Weather App</h1>
      <div className="mb-6">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="p-2 mr-2 border border-gray-300 rounded-lg"
        />
        <button
          onClick={handleSearch}
          className="p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Search
        </button>
      </div>
      <WeatherDisplay />
    </div>
  );
};

export default HomePage;
