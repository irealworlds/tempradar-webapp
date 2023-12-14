import { Injectable } from "@angular/core";
import { EnvironmentConfig } from "@tempradar/core/environment/environment-config.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PaginationOptions } from "@tempradar/core/pagination/pagination-options.model";
import { PaginatedResult } from "@tempradar/core/pagination/paginated-result.model";
import { PinnedSensorDto } from "@tempradar/modules/sensors/dtos/pinned-sensor.dto";
import { CreatePinnedSensorDto } from "@tempradar/modules/sensors/dtos/create-pinned-sensor.dto";

@Injectable({
  providedIn: 'root'
})
export class PinnedSensorService {
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
   * Fetch all sensors from the API.
   */
  fetchAll(): Observable<PinnedSensorDto[]>;
  /**
   * Fetch all sensors from the API, applying pagination.
   * @param pagination
   */
  fetchAll(pagination: PaginationOptions): Observable<PaginatedResult<PinnedSensorDto>>;
  fetchAll(pagination?: PaginationOptions): Observable<PinnedSensorDto[]> | Observable<PaginatedResult<PinnedSensorDto>> {
    if (pagination) {
      const endpointUri = new URL("/PinnedSensors/Paginated", this._environment.api.baseUri);
      endpointUri.searchParams.append('skip', pagination.skip.toString());
      endpointUri.searchParams.append('limit', pagination.limit.toString());
      return this._http.get<PaginatedResult<PinnedSensorDto>>(endpointUri.toString());
    } else {
      const endpointUri = new URL("/PinnedSensors", this._environment.api.baseUri);
      return this._http.get<PinnedSensorDto[]>(endpointUri.toString());
    }
  }

  /**
   * Fetches a sensor by its ID.
   *
   * @param {string} id - The ID of the sensor to fetch.
   * @returns {Promise<PinnedSensorDto>} - A promise that resolves with the fetched sensor object.
   */
  fetchById(id: string): Observable<PinnedSensorDto> {
    const endpointUri = new URL(`/PinnedSensors/${id}`, this._environment.api.baseUri);
    return this._http.get<PinnedSensorDto>(endpointUri.toString());
  }

  /**
   * Creates a new sensor.
   *
   * @param {CreatePinnedSensorDto} data The data needed to create the sensor.
   */
  create(data: CreatePinnedSensorDto): Observable<PinnedSensorDto> {
    const endpointUri = new URL("/PinnedSensors", this._environment.api.baseUri);
    return this._http.post<PinnedSensorDto>(endpointUri.toString(), data);
  }

  /**
   * Deletes a sensor by its ID.
   *
   * @param {string} id - The ID of the sensor to be deleted.
   * @return {Observable<PinnedSensorDto>} - An Observable that emits the deleted sensor.
   */
  deleteById(id: string): Observable<PinnedSensorDto> {
    const endpointUri = new URL(`/PinnedSensors/${id}`, this._environment.api.baseUri);
    return this._http.delete<PinnedSensorDto>(endpointUri.toString());
  }
}
