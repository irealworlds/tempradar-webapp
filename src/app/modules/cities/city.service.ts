import { Injectable } from "@angular/core";
import { EnvironmentConfig } from "@tempradar/core/environment/environment-config.model";
import { HttpClient } from "@angular/common/http";
import { CityCreateRequest } from "@tempradar/modules/cities/city-create/city-create.request";
import { City } from "@tempradar/modules/cities/city.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CityService {
  /**
   * Constructor for MyClass.
   *
   * @param {EnvironmentConfig} _environment - The environment config object.
   * @param {HttpClient} _http - The HttpClient object.
   */
  constructor(
    private readonly _environment: EnvironmentConfig,
    private readonly _http: HttpClient
  ) { }

  /**
   * Creates a new city.
   *
   * @param {CityCreateRequest} data The data needed to create the city.
   */
  create(data: CityCreateRequest): Observable<City> {
    const endpointUri = new URL("/PinnedCities", this._environment.api.baseUri);
    return this._http.post<City>(endpointUri.toString(), data);
  }
}
