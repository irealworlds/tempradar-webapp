import { PinnedCityWeatherDetails } from "@tempradar/modules/cities/pinned-city-weather-details.model";
import { TEntityLoadingStatus } from "@tempradar/core/state/loading-status.type";
import {
  TCityWeatherHistory
} from "@tempradar/modules/cities/city-details/city-temperature-history-graph/city-temperature-history.type";

export interface PinnedCityWeatherState {
  loadedCityId?: string;
  loadedWeatherDetails?: PinnedCityWeatherDetails;
  loadingStatus: TEntityLoadingStatus;
  loadingErrors: string[];

  weatherHistory: TCityWeatherHistory;
  historyLoadingStatus: TEntityLoadingStatus;
  historyLoadingErrors: string[];
}

export const initialState: PinnedCityWeatherState = {
  loadedCityId: undefined,
  loadedWeatherDetails: undefined,
  loadingStatus: "pending",
  loadingErrors: [],

  weatherHistory: [],
  historyLoadingStatus: "pending",
  historyLoadingErrors: [],
};
