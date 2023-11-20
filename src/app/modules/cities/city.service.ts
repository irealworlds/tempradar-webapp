import { Injectable } from "@angular/core";
import { EnvironmentConfig } from "@tempradar/core/environment/environment-config.model";
import { HttpClient } from "@angular/common/http";
import { CityCreateRequest } from "@tempradar/modules/cities/city-create/city-create.request";
import { City } from "@tempradar/modules/cities/city.model";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { PaginationOptions } from "@tempradar/core/pagination/pagination-options.model";
import { PaginatedResult } from "@tempradar/core/pagination/paginated-result.model";

@Injectable({
  providedIn: 'root'
})
export class CityService {
  /**
   * Represents a BehaviorSubject that emits an array of City objects.
   *
   * @type {BehaviorSubject<City[]>}
   */
  private readonly _citiesListSubject = new BehaviorSubject<City[]>([]);

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
   * Returns an Observable that emits an array of City objects.
   *
   * @return {Observable<City[]>} Observable that emits an array of City objects.
   */
  get all$(): Observable<City[]> {
    return this._citiesListSubject.asObservable();
  }

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
      return this._http.get<PaginatedResult<City>>(endpointUri.toString()).pipe(
        tap(result => {
          const cities = result.items;
          this._citiesListSubject.next(cities);
        })
      );
    } else {
      return this._http.get<City[]>(endpointUri.toString()).pipe(
        tap(cities => {
          this._citiesListSubject.next(cities);
        })
      );
    }
  }

  /**
   * Creates a new city.
   *
   * @param {CityCreateRequest} data The data needed to create the city.
   */
  create(data: CityCreateRequest): Observable<City> {
    const endpointUri = new URL("/PinnedCities", this._environment.api.baseUri);
    return this._http.post<City>(endpointUri.toString(), data).pipe(
      tap(city => {
        const cities = this._citiesListSubject.getValue();
        cities.unshift(city);
        this._citiesListSubject.next(cities);
      })
    );
  }
}
