import { TEntityLoadingStatus } from "@tempradar/core/state/loading-status.type";
import { PinnedSensorDto } from "@tempradar/modules/sensors/dtos/pinned-sensor.dto";

export interface PinnedSensorState {
  sensors: PinnedSensorDto[];
  loadingErrors: string[];
  loadingStatus: TEntityLoadingStatus;

  creationErrors: string[];
  creationStatus: TEntityLoadingStatus;

  deletionErrors: string[];
  deletionStatus: TEntityLoadingStatus;
}

export const initialPinnedSensorState: PinnedSensorState = {
  sensors: [],
  loadingStatus: "pending",
  loadingErrors: [],

  creationStatus: "pending",
  creationErrors: [],

  deletionStatus: "pending",
  deletionErrors: [],
}
