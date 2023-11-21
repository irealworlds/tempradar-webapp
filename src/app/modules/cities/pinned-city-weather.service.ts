import { Injectable } from "@angular/core";
import { EnvironmentConfig } from "@tempradar/core/environment/environment-config.model";
import { HttpClient } from "@angular/common/http";
import { delay, Observable, of } from "rxjs";
import { PinnedCityWeatherDetails } from "@tempradar/modules/cities/pinned-city-weather-details.model";
import {
  TCityWeatherHistory
} from "@tempradar/modules/cities/city-details/city-temperature-history-graph/city-temperature-history.type";
import {
  CityDailyTemperature
} from "@tempradar/modules/cities/city-details/city-temperature-history-graph/city-daily-temperature.model";

@Injectable({
  providedIn: 'root'
})
export class PinnedCityWeatherService {
  /**
   * Constructor for PinnedCityWeatherService.
   */
  constructor(
    private readonly _environment: EnvironmentConfig,
    private readonly _http: HttpClient
  ) { }

  /**
   * Fetches the weather details for a city by its ID.
   *
   * @param {string} cityId - The ID of the city.
   * @return {Observable<PinnedCityWeatherDetails>} - An observable that emits the weather details for the city.
   */
  fetchForCityById(cityId: string): Observable<PinnedCityWeatherDetails> {
    const endpointUri = new URL(`/PinnedCities/${cityId}/Weather`, this._environment.api.baseUri);
    return this._http.get<PinnedCityWeatherDetails>(endpointUri.toString());
  }

  /**
   * Fetches the temperature history for a city by its ID.
   *
   * @param {string} cityId - The ID of the city to fetch temperature history for.
   * @return {Observable<Array<CityDailyTemperature>>} - An observable that emits an array of `CityDailyTemperature` objects representing the temperature history for the city.
   */
  fetchHistoryForCityById(cityId: string): Observable<Array<CityDailyTemperature>> {
    return of<TCityWeatherHistory>([
      { date: '2023-01-01', minimumTemperature: -5, maximumTemperature: 5, averageTemperature: 0 },
      { date: '2023-01-02', minimumTemperature: -4, maximumTemperature: 6, averageTemperature: 1 },
      { date: '2023-01-03', minimumTemperature: -3, maximumTemperature: 7, averageTemperature: 2 },
      { date: '2023-01-04', minimumTemperature: -2, maximumTemperature: 8, averageTemperature: 3 },
      { date: '2023-01-05', minimumTemperature: -1, maximumTemperature: 9, averageTemperature: 4 },
      { date: '2023-01-06', minimumTemperature: 0, maximumTemperature: 10, averageTemperature: 5 },
      { date: '2023-01-07', minimumTemperature: 1, maximumTemperature: 11, averageTemperature: 6 },
    ]).pipe(
      delay(3000)
    );
  }
}
