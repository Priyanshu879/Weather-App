import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { getWeatherInfo } from "./WeatherInfo";
import Error from "./Error";

export default function SearchBox({ updatedinfo }) {
  let [city, setCity] = useState("");
  let [err, setErr] = useState(false);

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      let result = await getWeatherInfo(city);
      updatedinfo(result);
    } catch (err) {
      setErr(true)
    }
    
  };
  return (
    <div style={{ marginBottom: 20 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
      {err && <Error/>}
    </div>
  );
}
