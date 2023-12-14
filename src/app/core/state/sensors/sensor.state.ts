import { SensorDto } from "@tempradar/modules/sensors/dtos/sensor.dto";
import { TEntityLoadingStatus } from "@tempradar/core/state/loading-status.type";

export interface SensorState {
  sensors: SensorDto[];
  loadingErrors: string[];
  loadingStatus: TEntityLoadingStatus;
}

export const initialSensorState: SensorState = {
  sensors: [],
  loadingStatus: "pending",
  loadingErrors: []
};
