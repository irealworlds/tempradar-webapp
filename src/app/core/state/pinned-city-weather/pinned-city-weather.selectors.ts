import { createSelector } from "@ngrx/store";
import { AppState } from "@tempradar/core/state/app.state";

export const selectLoadedCityId = createSelector(
  (state: AppState) => state.pinnedCityWeather,
  state => state.loadedCityId
);
export const selectLoadedCityWeatherDetails = createSelector(
  (state: AppState) => state.pinnedCityWeather,
  state => state.loadedWeatherDetails
);
export const selectCityWeatherLoadingStatus = createSelector(
  (state: AppState) => state.pinnedCityWeather,
  state => state.loadingStatus
);

export const selectWeatherHistory = createSelector(
  (state: AppState) => state.pinnedCityWeather,
  state => state.weatherHistory
);
export const selectHistoryLoadingStatus = createSelector(
  (state: AppState) => state.pinnedCityWeather,
  state => state.historyLoadingStatus
);
