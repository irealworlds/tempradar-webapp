import { createAction, props } from "@ngrx/store";
import { PinnedCityWeatherDetails } from "@tempradar/modules/cities/pinned-city-weather-details.model";
import {
  TCityWeatherHistory
} from "@tempradar/modules/cities/city-details/city-temperature-history-graph/city-temperature-history.type";

export const fetchCityWeather = createAction(
  "[Pinned City Details Page] Fetch City Weather",
  props<{ id: string }>()
);
export const cityWeatherFetchingSuccess = createAction(
  "[Pinned City Weather API] Fetch City Weather Success",
  props<{ details: PinnedCityWeatherDetails }>()
);
export const cityWeatherFetchingFailure = createAction(
  "[Pinned City Weather API] Fetch City Weather Failure",
  props<{ errors: string[] }>()
);


export const fetchWeatherHistory = createAction(
  "[Pinned City Details Page] Fetch City Weather History",
  props<{ id: string }>()
);
export const weatherHistoryFetchingSuccess = createAction(
  "[Pinned City Weather API] Fetch City Weather History Success",
  props<{ history: TCityWeatherHistory }>()
);
export const weatherHistoryFetchingFailure = createAction(
  "[Pinned City Weather API] Fetch City Weather History Failure",
  props<{ errors: string[] }>()
);
