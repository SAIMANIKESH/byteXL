import React, { useState, useEffect } from "react";
import api from "../api";

const cities = [
  "Hyderabad",
  "Bengaluru",
  "New Delhi",
  "Kolkata",
  "Chennai",
  "Indore",
  "Vijayawada"
];

const WeatherModule = () => {
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  // Fetch weather whenever selectedCity changes
  useEffect(() => {
    const getWeather = async () => {
      setLoading(true);
      setErr("");
      setData(null);
      try {
        const res = await api.get(`/api/weather?city=${encodeURIComponent(selectedCity)}`);
        setData(res.data);
      } catch (error) {
        setErr("Failed to fetch weather data.");
      }
      setLoading(false);
    };

    getWeather();
  }, [selectedCity]);

  return (
    <div className="bg-white/80 rounded-xl p-6 shadow-lg mt-6 w-full max-w-lg text-center mx-auto">
      <h3 className="text-lg font-bold mb-4 text-blue-700">Weather Information</h3>
      <div className="flex flex-col gap-4 items-center">
        <select
          className="border px-4 py-2 rounded font-semibold"
          value={selectedCity}
          onChange={e => setSelectedCity(e.target.value)}
        >
          {cities.map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>
      {loading ? (
        <div className="text-blue-500 mt-4">Loading weather data...</div>
      ) : (
        data && (
          <div className="mt-4 text-lg">
            <div>Location: <b>{data.city}</b></div>
            <div>Temperature: <b>{data.temperature}°C</b></div>
            <div>Condition: <b>{data.condition}</b></div>
          </div>
        )
      )}
      {err && <div className="text-red-500 mt-4">{err}</div>}
    </div>
  );
};

export default WeatherModule;
