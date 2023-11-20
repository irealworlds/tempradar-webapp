import { City } from "@tempradar/modules/cities/city.model";
import { TEntityLoadingStatus } from "@tempradar/core/state/loading-status.type";

export interface PinnedCityState {
  cities: City[];

  loadingErrors: string[];
  loadingStatus: TEntityLoadingStatus;

  savingErrors: string[];
  savingStatus: TEntityLoadingStatus;
}

export const initialState: PinnedCityState = {
  cities: [],
  loadingErrors: [],
  loadingStatus: "pending",
  savingErrors: [],
  savingStatus: "pending"
};
