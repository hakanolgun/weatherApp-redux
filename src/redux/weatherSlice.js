import { createSlice } from "@reduxjs/toolkit";
import cities from "./citydata";

export const WeatherSlice = createSlice({
  name: "weather",
  initialState: {
    cities: cities,
  },
  reducers: {},
});

export default WeatherSlice.reducer;
