import { City } from "@tempradar/modules/cities/city.model";
import { TEntityLoadingStatus } from "@tempradar/core/state/loading-status.type";

export interface PinnedCityState {
  cities: City[];
  cityDetails?: City;

  loadingErrors: string[];
  loadingStatus: TEntityLoadingStatus;

  detailsLoadingErrors: string[];
  detailsLoadingStatus: TEntityLoadingStatus;

  savingErrors: string[];
  savingStatus: TEntityLoadingStatus;

  deletingErrors: string[];
  deletingStatus: TEntityLoadingStatus;
}

export const initialState: PinnedCityState = {
  cities: [],
  loadingErrors: [],
  loadingStatus: "pending",
  detailsLoadingErrors: [],
  detailsLoadingStatus: "pending",
  savingErrors: [],
  savingStatus: "pending",
  deletingErrors: [],
  deletingStatus: "pending",
};
