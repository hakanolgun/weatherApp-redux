import { useSelector } from "react-redux";
import styles from "./other.module.css";

export default function OtherDays() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const weatherData = useSelector((state) => state.weather.weatherData);

  if (weatherData !== null) {
    const fiveDays = weatherData.slice(1, 6);

    return (
      <div className={styles.otherDaysContainer}>
        {fiveDays.map((day, i) => {
          return (
            <div key={i}>
              <p>{days[new Date(day.dt * 1000).getDay()]}</p>
              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt=""
              />
              <p>{Math.ceil(day.temp.day)} &#176;C</p>
            </div>
          );
        })}
      </div>
    );
  }

  return <div>No Data</div>;
}
