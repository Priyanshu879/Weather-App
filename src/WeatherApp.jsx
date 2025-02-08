import { useState } from "react";
import InfoBox from "./infoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Mathura",
    feelsLike: 12.96,
    humidity: 60,
    temp: 13.94,
    tempMax: 13.94,
    tempMin: 13.94,
    weather: "clear sky",
  });

  let updatedinfo = (result) => {
    setWeatherInfo(result);
  };

  return (
    <>
      <h2>
        Weather App by <i>Mausam</i>
      </h2>
      <SearchBox updatedinfo= {updatedinfo} />
      <InfoBox info={weatherInfo} />
    </>
  );
}
