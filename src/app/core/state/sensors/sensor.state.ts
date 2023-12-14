import { SensorDto } from "@tempradar/modules/sensors/dtos/sensor.dto";
import { TEntityLoadingStatus } from "@tempradar/core/state/loading-status.type";
import { SensorReadingDto } from "@tempradar/modules/sensors/dtos/sensor-reading.dto";

export interface SensorState {
  sensors: SensorDto[];
  loadingErrors: string[];
  loadingStatus: TEntityLoadingStatus;

  readings: {
    [sensorKey: string]: SensorReadingDto[]
  };
  readingLoadingErrors: string[];
  readingLoadingStatus: TEntityLoadingStatus;
}

export const initialSensorState: SensorState = {
  sensors: [],
  loadingStatus: "pending",
  loadingErrors: [],

  readings: {},
  readingLoadingStatus: "pending",
  readingLoadingErrors: [],
};
