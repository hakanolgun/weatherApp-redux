import { configureStore } from "@reduxjs/toolkit";
import WeatherProvider from "./weatherSlice";

export const store = configureStore({
  reducer: {
    weather: WeatherProvider,
  },
});
