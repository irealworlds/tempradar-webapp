import { createAction, props } from "@ngrx/store";
import { SensorDto } from "@tempradar/modules/sensors/dtos/sensor.dto";

export const loadSensors = createAction("[Sensors Page] Load Sensors");
export const sensorsLoadingSuccess = createAction(
  '[Sensors API] Sensor Loading Successful',
  props<{ sensors: SensorDto[] }>()
);
export const sensorsLoadingFailure = createAction(
  '[Sensors API] Sensor Loading Failed',
  props<{ errors: string[] }>()
);
