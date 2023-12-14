import { createReducer, on } from "@ngrx/store";
import { initialPinnedSensorState } from "@tempradar/core/state/pinned-sensors/pinned-sensor.state";
import {
  createPinnedSensor,
  deletePinnedSensor,
  loadPinnedSensors,
  pinnedSensorCreationFailure,
  pinnedSensorCreationSuccess,
  pinnedSensorDeletionFailure,
  pinnedSensorDeletionSuccess,
  pinnedSensorsLoadingFailure,
  pinnedSensorsLoadingSuccess
} from "@tempradar/core/state/pinned-sensors/pinned-sensor.actions";

export const pinnedSensorReducer = createReducer(
  // Initial state
  initialPinnedSensorState,

  // Trigger the loading status on pinned sensors
  on(loadPinnedSensors, (state) => ({
    ...state,
    loadingErrors: [],
    loadingStatus: "loading"
  })),

  // Trigger success status on pinned sensors
  on(pinnedSensorsLoadingSuccess, (state, { sensors }) => ({
    ...state,
    sensors,
    loadingErrors: [],
    loadingStatus: "success"
  })),

  // Trigger the failure on pinned sensors
  on(pinnedSensorsLoadingFailure, (state, { errors }) => ({
    ...state,
    loadingErrors: errors,
    loadingStatus: "failure"
  })),

  // Trigger the loading status when a new pinned sensor creation is requested
  on(createPinnedSensor, (state) => ({
    ...state,
    creationErrors: [],
    creationStatus: "loading"
  })),

  // Trigger success status when a new pinned sensor is created
  on(pinnedSensorCreationSuccess, (state, { sensor }) => ({
    ...state,
    sensors: [sensor, ...state.sensors],
    creationErrors: [],
    creationStatus: "success"
  })),

  // Trigger the failure on pinned sensors
  on(pinnedSensorCreationFailure, (state, { errors }) => ({
    ...state,
    creationErrors: errors,
    creationStatus: "failure"
  })),

  // Trigger the loading status when a new pinned sensor deletion is requested
  on(deletePinnedSensor, (state) => ({
    ...state,
    deletionErrors: [],
    deletionStatus: "loading"
  })),

  // Trigger success status when a pinned sensor is deleted
  on(pinnedSensorDeletionSuccess, (state, { id }) => ({
    ...state,
    sensors: state.sensors.filter(s => s.id !== id),
    deletionErrors: [],
    deletionStatus: "success"
  })),

  // Trigger the failure on pinned sensors
  on(pinnedSensorDeletionFailure, (state, { errors }) => ({
    ...state,
    deletionErrors: errors,
    deletionStatus: "failure"
  })),
)
