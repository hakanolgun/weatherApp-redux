import OtherDays from "../otherDays/OtherDays";
import Select from "../select/Select";
import Today from "../today/Today";
import styles from "./weathercontainer.module.css";

export default function WeatherContainer() {
  return (
    <div className={styles.weatherContainer}>
      <Select />
      <Today />
      <OtherDays />
    </div>
  );
}
