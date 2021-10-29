import { createSlice } from "@reduxjs/toolkit";
import cities from "./citydata";

export const WeatherSlice = createSlice({
  name: "weather",
  initialState: {
    cities: cities,
    selectedCity: {
      plaka: 55,
      name: "SAMSUN",
      lat: 41.292782,
      long: 36.33128,
      northeast_lat: 41.344134,
      northeast_long: 36.381205,
      southwest_lat: 41.235002,
      southwest_long: 36.249519,
    },
    isLoading: false,
    weatherData: null,
  },
  reducers: {
    selectCity: (state, action) => {
      for (let i = 0; i < state.cities.length; i++) {
        if (action.payload === state.cities[i].name) {
          state.selectedCity = state.cities[i];
        }
      }
    },
    changeData: (state, action) => {
      state.weatherData = action.payload;
    },
  },
  extraReducers: {},
});

export const { selectCity, changeData } = WeatherSlice.actions;
export default WeatherSlice.reducer;
