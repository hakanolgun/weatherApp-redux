import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cities from "./citydata";

export const getWeatherAsync = createAsyncThunk(
  "weather/getWeatherAsync",
  async (selectedCity, lat, long, API_key) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&exclude=current,minutely,hourly,alerts&appid=${API_key}`
    );
    return await res.json();
  }
);

export const WeatherSlice = createSlice({
  name: "weather",
  initialState: {
    cities: cities,
    selectedCity: "SAMSUN",
    isLoading: false,
    weatherData: null,
  },
  reducers: {
    selectCity: (state, action) => {
      state.selectedCity = action.payload;
    },
  },
  extraReducers: {
    // get Country Data
    [getWeatherAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getWeatherAsync.fulfilled]: (state, action) => {
      state.weatherData = action.payload;
      state.isLoading = false;
    },

    [getWeatherAsync.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { selectCity } = WeatherSlice.actions;
export default WeatherSlice.reducer;
