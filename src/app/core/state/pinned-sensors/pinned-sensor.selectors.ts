import { createSelector } from "@ngrx/store";
import { AppState } from "@tempradar/core/state/app.state";

export const selectAllPinnedSensors = createSelector(
  (state: AppState) => state.pinnedSensors,
  state => state.sensors
);
export const selectPinnedSensorLoadingStatus = createSelector(
  (state: AppState) => state.pinnedSensors,
  state => state.loadingStatus
);
export const selectPinnedSensorLoadingErrors = createSelector(
  (state: AppState) => state.pinnedSensors,
  state => state.loadingErrors
);

export const selectPinnedSensorCreationStatus = createSelector(
  (state: AppState) => state.pinnedSensors,
  state => state.creationStatus
);
export const selectPinnedSensorCreationErrors = createSelector(
  (state: AppState) => state.pinnedSensors,
  state => state.creationErrors
);

export const selectPinnedSensorDeletionStatus = createSelector(
  (state: AppState) => state.pinnedSensors,
  state => state.deletionStatus
);
export const selectPinnedSensorDeletionErrors = createSelector(
  (state: AppState) => state.pinnedSensors,
  state => state.deletionErrors
);
