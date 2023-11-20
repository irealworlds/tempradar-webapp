import { createSelector } from "@ngrx/store";
import { AppState } from "@tempradar/core/state/app.state";

export const selectAllPinnedCities = createSelector(
  (state: AppState) => state.pinnedCities,
  state => state.cities,
);

export const selectPinnedCityCreationStatus = createSelector(
  (state: AppState) => state.pinnedCities,
  state => state.savingStatus,
);
