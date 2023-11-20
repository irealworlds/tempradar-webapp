import { createReducer, on } from "@ngrx/store";
import { initialState } from "@tempradar/core/state/pinned-city-weather/pinned-city-weather.state";
import {
  cityWeatherFetchingFailure,
  cityWeatherFetchingSuccess,
  fetchCityWeather
} from "@tempradar/core/state/pinned-city-weather/pinned-city-weather.actions";

export const pinnedCityWeatherReducer = createReducer(
  initialState,

  // Set the loading status
  on(fetchCityWeather, (state, { id }) => ({
    ...state,
    loadedCityId: id,
    loadingErrors: [],
    loadingStatus: "loading",
  })),

  // Set the loading status
  on(cityWeatherFetchingSuccess, (state, { details }) => ({
    ...state,
    loadedWeatherDetails: details,
    loadingErrors: [],
    loadingStatus: "success",
  })),

  // Set the loading status
  on(cityWeatherFetchingFailure, (state, { errors }) => ({
    ...state,
    loadingErrors: errors,
    loadingStatus: "failure",
  })),
)
