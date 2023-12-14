import { createSelector } from "@ngrx/store";
import { AppState } from "@tempradar/core/state/app.state";

export const selectAllSensors = createSelector(
  (state: AppState) => state.sensors,
  state => state.sensors
);
export const selectSensorLoadingStatus = createSelector(
  (state: AppState) => state.sensors,
  state => state.loadingStatus
);
export const selectSensorLoadingErrors = createSelector(
  (state: AppState) => state.sensors,
  state => state.loadingErrors
);
