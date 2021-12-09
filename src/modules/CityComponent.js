import React from "react";
import styled from "styled-components";

import perfectDay from "./icons/perfect-day.svg";

const WeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`;

const ChooseCityLabel = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
  margin: 10px auto;
`;

const SearchBox = styled.span`
  display: flex;
  flex-direction: row;
  border: black solid 1px;
  color: black;
  font-size: 18px;
  margin: 10px auto;
  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-weight: bold;
  }

  & button {
    padding: 10px;
    font-size: 14px;
    color: white;
    background-color: black;
    border: none;
    outline: none;
    font-weight: bold;
    cursor: pointer;
  }
`;
const CityComponent = (props) => {
  const { updateCity, fetchWeather } = props;
  return (
    <>
      <WeatherLogo src={perfectDay} />
      <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
      <SearchBox onClick={fetchWeather}>
        <input
          placeholder="City"
          onChange={(e) => updateCity(e.target.value)}
        />
        <button type={"submit"}>Search</button>
      </SearchBox>
    </>
  );
};

export default CityComponent;
