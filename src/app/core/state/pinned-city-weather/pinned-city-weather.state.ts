import { PinnedCityWeatherDetails } from "@tempradar/modules/cities/pinned-city-weather-details.model";
import { TEntityLoadingStatus } from "@tempradar/core/state/loading-status.type";

export interface PinnedCityWeatherState {
  loadedCityId?: string;
  loadedWeatherDetails?: PinnedCityWeatherDetails;
  loadingStatus: TEntityLoadingStatus;
  loadingErrors: string[];
}

export const initialState: PinnedCityWeatherState = {
  loadedCityId: undefined,
  loadedWeatherDetails: undefined,
  loadingStatus: "pending",
  loadingErrors: [],
};
