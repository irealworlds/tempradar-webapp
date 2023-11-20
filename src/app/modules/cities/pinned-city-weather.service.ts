import { Injectable } from "@angular/core";
import { EnvironmentConfig } from "@tempradar/core/environment/environment-config.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PinnedCityWeatherDetails } from "@tempradar/modules/cities/pinned-city-weather-details.model";

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
}
