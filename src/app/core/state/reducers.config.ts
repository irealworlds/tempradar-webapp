import { pinnedCityReducer } from "@tempradar/core/state/pinned-cities/pinned-city.reducer";
import { pinnedCityWeatherReducer } from "@tempradar/core/state/pinned-city-weather/pinned-city-weather.reducer";
import { sensorReducer } from "@tempradar/core/state/sensors/sensor.reducer";
import { pinnedSensorReducer } from "@tempradar/core/state/pinned-sensors/pinned-sensor.reducer";

export const reducersConfig = {
  pinnedCities: pinnedCityReducer,
  pinnedCityWeather: pinnedCityWeatherReducer,
  sensors: sensorReducer,
  pinnedSensors: pinnedSensorReducer,
};
