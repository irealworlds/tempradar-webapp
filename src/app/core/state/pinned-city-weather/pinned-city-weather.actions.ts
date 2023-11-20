import { createAction, props } from "@ngrx/store";
import { PinnedCityWeatherDetails } from "@tempradar/modules/cities/pinned-city-weather-details.model";

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
