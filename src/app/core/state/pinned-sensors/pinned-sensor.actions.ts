import { createAction, props } from "@ngrx/store";
import { PinnedSensorDto } from "@tempradar/modules/sensors/dtos/pinned-sensor.dto";
import { CreatePinnedSensorDto } from "@tempradar/modules/sensors/dtos/create-pinned-sensor.dto";

export const loadPinnedSensors = createAction("[Pinned Sensors Page] Load Pinned Sensors");
export const pinnedSensorsLoadingSuccess = createAction(
  '[Sensors API] Pinned Sensor Loading Successful',
  props<{ sensors: PinnedSensorDto[] }>()
);
export const pinnedSensorsLoadingFailure = createAction(
  '[Sensors API] Pinned Sensor Loading Failed',
  props<{ errors: string[] }>()
);

export const createPinnedSensor = createAction(
  "[Sensor Card] Create pinned sensor",
  props<{ creationData: CreatePinnedSensorDto }>()
);
export const pinnedSensorCreationSuccess = createAction(
  '[Sensors API] Pinned Sensor Creation Successful',
  props<{ sensor: PinnedSensorDto }>()
);
export const pinnedSensorCreationFailure = createAction(
  '[Sensors API] Pinned Sensor Creation Failed',
  props<{ errors: string[] }>()
);

export const deletePinnedSensor = createAction(
  "[Sensor Card] Delete a pinned sensor",
  props<{ id: string }>()
);
export const pinnedSensorDeletionSuccess = createAction(
  '[Sensors API] Pinned Sensor Deletion Successful',
  props<{ id: string }>()
);
export const pinnedSensorDeletionFailure = createAction(
  '[Sensors API] Pinned Sensor Deletion Failed',
  props<{ errors: string[] }>()
);
