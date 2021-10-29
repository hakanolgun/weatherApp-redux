import { useSelector } from "react-redux";

export default function Select() {
  const cities = useSelector((state) => state.weather.cities);

  console.log(cities);

  return (
    <div>
      <select name="" id="">
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
