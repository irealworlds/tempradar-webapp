import { Injectable } from "@angular/core";
import { EnvironmentConfig } from "@tempradar/core/environment/environment-config.model";
import { HttpClient } from "@angular/common/http";
import { CityCreateRequest } from "@tempradar/modules/cities/city-create/city-create.request";
import { City } from "@tempradar/modules/cities/city.model";
import { Observable } from "rxjs";
import { PaginationOptions } from "@tempradar/core/pagination/pagination-options.model";
import { PaginatedResult } from "@tempradar/core/pagination/paginated-result.model";

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
   * Fetch all cities from the API.
   */
  fetchAll(): Observable<City[]>;
  /**
   * Fetch all cities from the API, applying pagination.
   * @param pagination
   */
  fetchAll(pagination: PaginationOptions): Observable<PaginatedResult<City>>;
  fetchAll(pagination?: PaginationOptions): Observable<City[]> | Observable<PaginatedResult<City>> {
    const endpointUri = new URL("/PinnedCities", this._environment.api.baseUri);

    if (pagination) {
      endpointUri.searchParams.append('skip', pagination.skip.toString());
      endpointUri.searchParams.append('limit', pagination.limit.toString());
      return this._http.get<PaginatedResult<City>>(endpointUri.toString());
    } else {
      return this._http.get<City[]>(endpointUri.toString());
    }
  }

  /**
   * Fetches a city by its ID.
   *
   * @param {string} id - The ID of the city to fetch.
   * @returns {Promise<City>} - A promise that resolves with the fetched city object.
   */
  fetchById(id: string): Observable<City> {
    const endpointUri = new URL(`/PinnedCities/${id}`, this._environment.api.baseUri);
    return this._http.get<City>(endpointUri.toString());
  }

  /**
   * Creates a new city.
   *
   * @param {CityCreateRequest} data The data needed to create the city.
   */
  create(data: CityCreateRequest): Observable<City> {
    const endpointUri = new URL("/PinnedCities", this._environment.api.baseUri);
    return this._http.post<City>(endpointUri.toString(), data);
  }

  /**
   * Deletes a City by its ID.
   *
   * @param {string} id - The ID of the City to be deleted.
   * @return {Observable<City>} - An Observable that emits the deleted City.
   */
  deleteById(id: string): Observable<City> {
    const endpointUri = new URL(`/PinnedCities/${id}`, this._environment.api.baseUri);
    return this._http.delete<City>(endpointUri.toString());
  }
}
