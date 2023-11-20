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
