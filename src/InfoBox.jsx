import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function InfoBox({ info }) {
  let imgUrl =
    "data:image/jpeg;base64,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";

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={imgUrl} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{" "}
          {info.humidity > 80 ? (
            <ThunderstormIcon />
          ) : info.humidity > 15 ? (
            <WbSunnyIcon />
          ) : (
            <AcUnitIcon />
          )}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary" }}
          component={"span"}
        >
          <p>Temprature = {info.temp}&deg;C </p>
          <p>Max. Temprature = {info.tempMax}&deg;C</p>
          <p>Min. Temprature = {info.tempMin}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>
            The Weather can be <i>{info.weather}</i> and feels like{" "}
            {info.feelsLike}
            &deg;C
          </p>
        </Typography>
      </CardContent>
    </Card>
  );
}
