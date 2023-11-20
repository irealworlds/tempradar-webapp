import { createSelector } from "@ngrx/store";
import { AppState } from "@tempradar/core/state/app.state";

export const selectAllPinnedCities = createSelector(
  (state: AppState) => state.pinnedCities,
  state => state.cities,
);
export const selectAllPinnedCitiesLoadingStatus = createSelector(
  (state: AppState) => state.pinnedCities,
  state => state.loadingStatus,
);

export const selectPinnedCityDetails = createSelector(
  (state: AppState) => state.pinnedCities,
  state => state.cityDetails,
);

export const selectPinnedCityCreationStatus = createSelector(
  (state: AppState) => state.pinnedCities,
  state => state.savingStatus,
);

export const selectPinnedCityDeletionStatus = createSelector(
  (state: AppState) => state.pinnedCities,
  state => state.deletingStatus,
);
