import { useState, useEffect } from "react";
import styles from "./home.module.css";
import { useNavigate } from "react-router-dom";

function Home() {
  
  const navigate = useNavigate();
  const api_key = process.env.REACT_APP_WEATHER_API; 
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  function logout() {
    navigate("/login");
  }

  async function fetchWeather() {
    try {
      setLoading(true);
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
      );
      let data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.log("Error fetching:", error);
    } finally {
      setLoading(false);
    }
  }

  // useEffect(() => {
  //   if (city) {
  //     fetchWeather(); // Call fetchWeather when city changes
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [city]); // Include city in the dependency array

  return (
    <div className={styles.App}>
      <button onClick={logout}>Logout</button> 
      <h1>Weather App</h1>
    
      <input
        className={styles.input}
        type="text"
        onChange={(e) => setCity(e.target.value)}
      />
      <button className={styles.button} onClick={fetchWeather}>
        Submit
      </button>
      {loading && <p>Loading ...</p>}
      {weatherData && weatherData.cod === 200 ? (
        <div className={styles.weatherBox}>
          <p>
            Location: {weatherData.name}, {weatherData.sys.country}
          </p>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          <p>Visibility: {weatherData.visibility} meters</p>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt="Weather Icon"
          />
        </div>
      ) : (
        <p>Invalid City</p>
      )}
    </div>
  );
}

export default Home;
