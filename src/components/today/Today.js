import styles from "./today.module.css";
import { useSelector } from "react-redux";

export default function Today() {
  const weatherData = useSelector((state) => state.weather.weatherData);

  if (weatherData !== null) {
    const todayData = weatherData[0];
    return (
      <div className={styles.todayContainer}>
        <div className={styles.leftInfoContainer}>
          <img
            src={`https://openweathermap.org/img/wn/${todayData.weather[0].icon}@2x.png`}
            alt=""
          />
          <p>{todayData.weather[0].main}</p>
        </div>
        <div className={styles.todayTemp}>
          {Math.ceil(todayData.temp.day)} &#176;C
        </div>
        <div className={styles.rightInfoContainer}>
          <p>Wind: {todayData.wind_speed} kmph</p>
          <p>Precip: {todayData.rain} mm</p>
          <p>Pressure: {todayData.pressure} mb</p>
        </div>
      </div>
    );
  }
  return <div className={styles.todayContainer}>No data</div>;
}
