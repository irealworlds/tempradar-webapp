import { CityWeather } from "@tempradar/modules/cities/city-details/city-temperature-card/city-weather.model";
import { AirQuality } from "@tempradar/modules/cities/city-details/city-air-quality-card/air-quality.model";
import { UsEpaIndex } from "@tempradar/modules/cities/city-details/us-epa-index-card/us-epa-index.model";
import { GbDefraIndex } from "@tempradar/modules/cities/city-details/gb-defra-index-card/gb-defra-index.model";

export interface PinnedCityWeatherDetails extends CityWeather, AirQuality, UsEpaIndex, GbDefraIndex {
}
