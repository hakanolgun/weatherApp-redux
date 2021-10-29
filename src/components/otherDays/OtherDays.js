import { useSelector } from "react-redux";
import styles from "./other.module.css";

export default function OtherDays() {
  const weatherData = useSelector((state) => state.weather.weatherData);

  if (weatherData !== null) {
    const fiveDays = weatherData.slice(1, 6);
    console.log(fiveDays);
    return (
      <div className={styles.otherDaysContainer}>
        {fiveDays.map((day, i) => {
          return (
            <div key={i}>
              <p></p>
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
