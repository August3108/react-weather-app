import styled from "styled-components";
import CityComponent from "./modules/CityComponent";
import React, { useState } from "react";
import WeatherComponent from "./modules/WeatherInfoComponent";
import axios from "axios";

const API_KEY = "c20e17cb7d6f16b05a5ecdf5d087ddb9";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #5555;
  border-radius: 4px;
  width: 300px;
  background: white;
  font-family: Monserrat;
`;
const AppLabel = styled.div`
  color: black;
  font-size: 18px;
  font-weight: bold;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response =
      await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}
   `);

    console.log(response.data);

    updateWeather(response.data);
  };

  return (
    <Container>
      <AppLabel>React weather app</AppLabel>

      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
