import { CityWeather } from "@tempradar/modules/cities/city-details/city-temperature-card/city-weather.model";
import { AirQuality } from "@tempradar/modules/cities/city-details/city-air-quality-card/air-quality.model";

export interface PinnedCityWeatherDetails extends CityWeather, AirQuality {
  usEpaIndex: number;
  gbDefraIndex: number;
}
