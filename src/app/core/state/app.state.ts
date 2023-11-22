import { PinnedCityState } from "@tempradar/core/state/pinned-cities/pinned-city.state";
import { PinnedCityWeatherState } from "@tempradar/core/state/pinned-city-weather/pinned-city-weather.state";

export interface AppState {
  pinnedCities: PinnedCityState;
  pinnedCityWeather: PinnedCityWeatherState,
}
