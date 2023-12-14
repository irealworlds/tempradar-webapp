import { createAction, props } from "@ngrx/store";
import { SensorDto } from "@tempradar/modules/sensors/dtos/sensor.dto";
import { SensorReadingDto } from "@tempradar/modules/sensors/dtos/sensor-reading.dto";

export const loadSensors = createAction("[Sensors Page] Load Sensors");
export const sensorsLoadingSuccess = createAction(
  '[Sensors API] Sensor Loading Successful',
  props<{ sensors: SensorDto[] }>()
);
export const sensorsLoadingFailure = createAction(
  '[Sensors API] Sensor Loading Failed',
  props<{ errors: string[] }>()
);

export const loadSensorReadings = createAction(
  "[Sensor Details Page] Load Sensor Readings",
  props<{ sensorKey: string }>()
);
export const sensorReadingsLoadingSuccess = createAction(
  '[Sensors API] Sensor Readings Loading Successful',
  props<{ sensorKey: string, readings: SensorReadingDto[] }>()
);
export const sensorReadingsLoadingFailure = createAction(
  '[Sensors API] Sensor Readings Loading Failed',
  props<{ errors: string[] }>()
);
