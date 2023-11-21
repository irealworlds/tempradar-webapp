import { createReducer, on } from "@ngrx/store";
import { initialState } from "@tempradar/core/state/pinned-city-weather/pinned-city-weather.state";
import {
  cityWeatherFetchingFailure,
  cityWeatherFetchingSuccess,
  fetchCityWeather,
  fetchWeatherHistory,
  weatherHistoryFetchingFailure,
  weatherHistoryFetchingSuccess
} from "@tempradar/core/state/pinned-city-weather/pinned-city-weather.actions";

export const pinnedCityWeatherReducer = createReducer(
  initialState,

  // Start loading the current weather
  on(fetchCityWeather, (state, { id }) => ({
    ...state,
    loadedCityId: id,
    loadingErrors: [],
    loadingStatus: "loading",
  })),

  // Populate the weather details
  on(cityWeatherFetchingSuccess, (state, { details }) => ({
    ...state,
    loadedWeatherDetails: details,
    loadingErrors: [],
    loadingStatus: "success",
  })),

  // Set the failure status on weather details
  on(cityWeatherFetchingFailure, (state, { errors }) => ({
    ...state,
    loadingErrors: errors,
    loadingStatus: "failure",
  })),

  // Start loading the weather history
  on(fetchWeatherHistory, (state) => ({
    ...state,
    historyLoadingErrors: [],
    historyLoadingStatus: "loading",
  })),

  // Populate the weather history on success
  on(weatherHistoryFetchingSuccess, (state, { history }) => ({
    ...state,
    weatherHistory: history,
    historyLoadingErrors: [],
    historyLoadingStatus: "success",
  })),

  // Set the failure status on weather details
  on(weatherHistoryFetchingFailure, (state, { errors }) => ({
    ...state,
    historyLoadingErrors: errors,
    historyLoadingStatus: "failure",
  })),
)
