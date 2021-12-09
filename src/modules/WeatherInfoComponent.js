import React from "react";
import styled from "styled-components";

import sunny from "./icons/sunny.svg";
import night from "./icons/night.svg";

import temp from "./icons/temp.svg";
import humidity from "./icons/humidity.svg";
import wind from "./icons/wind.svg";
import pressure from "./icons/pressure.svg";
import day from "./icons/day.svg";
import cloudynight from "./icons/cloudy-night.svg";
import cloudy from "./icons/cloudy.svg";
import perfectday from "./icons/perfect-day.svg";
import rain from "./icons/rain.svg";
import rainnight from "./icons/rain-night.svg";
import strom from "./icons/storm.svg";
import haze from "./icons/haze.svg";

export const WeatherInfoIcons = {
  sunset: temp,
  sunrise: temp,
  humidity: humidity,
  wind: wind,
  pressure: pressure,
};

const WeatherIcons = {
  "01d": sunny,
  "01n": night,
  "02d": day,
  "02n": cloudynight,
  "03d": cloudy,
  "03n": cloudy,
  "04d": perfectday,
  "04n": cloudynight,
  "09d": rain,
  "09n": rainnight,
  "10d": rain,
  "10n": rainnight,
  "11d": strom,
  "11n": strom,
  "13d": haze,
  "13n": haze,
  "50d": haze,
  "50n": haze,
};

const WeatherCondition = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: 30px auto;
`;

const Condition = styled.span`
  margin: 20px auto;
  font-size: 14px;
  & span {
    font-size: 28px;
  }
`;

const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px auto;
`;

const Location = styled.span`
  font-size: 28px;
  font-weight: bold;
`;

const WeatherInfoLabel = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin: 20px 25px 10px;
  text-align: start;
  width: 90%;
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const InfoContainer = styled.div`
  display: flex;

  margin: 5px px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 28px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

function WeatherInfoComponent(props) {
  const { name, value } = props;
  return (
    <InfoContainer>
      <InfoIcon src={WeatherInfoIcons[name]} />
      <InfoLabel>
        {value}
        <span>{name}</span>
      </InfoLabel>
    </InfoContainer>
  );
}

function WeatherComponent(props) {
  const { weather } = props;
  const isDay = weather?.weather[0].icon?.includes("d");
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };
  return (
    <>
      <button
        style={{
          padding: "5px",
          margin: "5px",
          textDecoration: "none",
          backgroundColor: "lightgray",
          color: "black",
        }}
      >
        <a href="https://cenacrharsh.github.io/react-weather-app/">Back</a>
      </button>
      <WeatherCondition>
        <Condition>
          <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span> |{" "}
          {`${weather?.weather[0].description}`}
        </Condition>
        <WeatherIcon src={WeatherIcons[weather?.weather[0].icon]} />
      </WeatherCondition>
      <Location>{`${weather?.name},${weather?.sys?.country}`}</Location>
      <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
      <WeatherInfoContainer>
        <WeatherInfoComponent
          name={isDay ? "sunset" : "sunrise"}
          value={getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}
        />
        <WeatherInfoComponent
          name={"humidity"}
          value={weather?.main?.humidity}
        />
        <WeatherInfoComponent name={"wind"} value={weather?.wind?.speed} />
        <WeatherInfoComponent
          name={"pressure"}
          value={weather?.main?.pressure}
        />
      </WeatherInfoContainer>
    </>
  );
}

export default WeatherComponent;
