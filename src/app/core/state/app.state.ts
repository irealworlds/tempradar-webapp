import { PinnedCityState } from "@tempradar/core/state/pinned-cities/pinned-city.state";
import { PinnedCityWeatherState } from "@tempradar/core/state/pinned-city-weather/pinned-city-weather.state";
import { SensorState } from "@tempradar/core/state/sensors/sensor.state";
import { PinnedSensorState } from "@tempradar/core/state/pinned-sensors/pinned-sensor.state";

export interface AppState {
  pinnedSensors: PinnedSensorState;
  pinnedCities: PinnedCityState;
  pinnedCityWeather: PinnedCityWeatherState,
  sensors: SensorState,
}
