import { useSelector, useDispatch } from "react-redux";
import { selectCity } from "../../redux/weatherSlice";

export default function Select() {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.weather.cities);
  const selectedCity = useSelector((state) => state.weather.selectedCity);



  return (
    <div>
      <select
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
