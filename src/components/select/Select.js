import styles from "./select.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCity, changeData } from "../../redux/weatherSlice";

export default function Select() {
  const API_key = process.env.REACT_APP_API_KEY;
  const dispatch = useDispatch();

  const cities = useSelector((state) => state.weather.cities);
  const selectedCity = useSelector((state) => state.weather.selectedCity);

  useEffect(() => {
    async function deneme(lat, long, API_key) {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&exclude=current,minutely,hourly,alerts&appid=${API_key}`
      );
      const sonuc = await res.json();
      dispatch(changeData(sonuc.daily));
      return await sonuc.daily;
    }
    deneme(selectedCity.lat, selectedCity.long, API_key);
  }, [selectedCity, API_key, dispatch]);

  return (
    <div>
      <select 
        className={styles.select}
        value={selectedCity.name}
        onChange={(e) => dispatch(selectCity(e.target.value))}
      >
        {cities.map((city, i) => {
          return (
            <option key={i} value={city.name}>
              {city.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
