import { createReducer, on } from "@ngrx/store";
import { initialSensorState } from "@tempradar/core/state/sensors/sensor.state";
import {
  loadSensorReadings,
  loadSensors,
  sensorReadingsLoadingFailure,
  sensorReadingsLoadingSuccess,
  sensorsLoadingFailure,
  sensorsLoadingSuccess
} from "@tempradar/core/state/sensors/sensor.actions";

export const sensorReducer = createReducer(
  // Initial state
  initialSensorState,

  // Trigger the loading status on pinned sensors
  on(loadSensors, (state) => ({
    ...state,
    loadingErrors: [],
    loadingStatus: "loading"
  })),

  // Trigger success status on pinned sensors
  on(sensorsLoadingSuccess, (state, { sensors }) => ({
    ...state,
    sensors,
    loadingErrors: [],
    loadingStatus: "success"
  })),

  // Trigger the failure on pinned sensors
  on(sensorsLoadingFailure, (state, { errors }) => ({
    ...state,
    loadingErrors: errors,
    loadingStatus: "failure"
  })),

  // Trigger the loading status on pinned sensors
  on(loadSensorReadings, (state) => ({
    ...state,
    readingLoadingErrors: [],
    readingLoadingStatus: "loading"
  })),

  // Trigger success status on reading loading
  on(sensorReadingsLoadingSuccess, (state, { sensorKey, readings }) => ({
    ...state,
    readings: {
      ...state.readings,
      [sensorKey]: readings
    },
    readingLoadingErrors: [],
    readingLoadingStatus: "success"
  })),

  // Trigger the failure on reading loading
  on(sensorReadingsLoadingFailure, (state, { errors }) => ({
    ...state,
    readingLoadingErrors: errors,
    readingLoadingStatus: "failure"
  })),
)
