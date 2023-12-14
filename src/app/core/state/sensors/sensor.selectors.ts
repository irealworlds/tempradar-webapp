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

export const selectSensorReadings = (sensorKey: string) => createSelector(
  (state: AppState) => state.sensors,
  state => {
    if (sensorKey in state.readings) {
      return state.readings[sensorKey];
    } else {
      return [];
    }
  }
);
export const selectLatestSensorReading = (sensorKey: string) => createSelector(
  selectSensorReadings(sensorKey),
  readings =>
    readings
      // .sort((a, z) => new Date(z.createdAt).getTime() - new Date(a.createdAt).getTime())
      .at(0)
);
export const selectSensorReadingLoadingStatus = createSelector(
  (state: AppState) => state.sensors,
  state => state.readingLoadingStatus
);
export const selectSensorReadingLoadingErrors = createSelector(
  (state: AppState) => state.sensors,
  state => state.readingLoadingErrors
);
