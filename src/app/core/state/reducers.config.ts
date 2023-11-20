import { pinnedCityReducer } from "@tempradar/core/state/pinned-cities/pinned-city.reducer";
import { pinnedCityWeatherReducer } from "@tempradar/core/state/pinned-city-weather/pinned-city-weather.reducer";

export const reducersConfig = {
  pinnedCities: pinnedCityReducer,
  pinnedCityWeather: pinnedCityWeatherReducer,
};
