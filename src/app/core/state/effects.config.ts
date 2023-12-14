import { PinnedCityEffects } from "@tempradar/core/state/pinned-cities/pinned-city.effects";
import { PinnedCityWeatherEffects } from "@tempradar/core/state/pinned-city-weather/pinned-city-weather.effects";
import { SensorEffects } from "@tempradar/core/state/sensors/sensor.effects";
import { PinnedSensorEffects } from "@tempradar/core/state/pinned-sensors/pinned-sensor.effects";

export const effectsConfig = [
  PinnedCityEffects,
  PinnedCityWeatherEffects,
  SensorEffects,
  PinnedSensorEffects,
];
