import { Injectable } from "@angular/core";
import { EnvironmentConfig } from "@tempradar/core/environment/environment-config.model";
import { HttpClient } from "@angular/common/http";
import { PaginationOptions } from "@tempradar/core/pagination/pagination-options.model";
import { Observable } from "rxjs";
import { PaginatedResult } from "@tempradar/core/pagination/paginated-result.model";
import { SensorDto } from "@tempradar/modules/sensors/dtos/sensor.dto";

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  /**
   * Constructor for SensorService.
   */
  constructor(
    private readonly _environment: EnvironmentConfig,
    private readonly _http: HttpClient
  ) { }

  /**
   * Fetches all sensors from the API.
   *
   * @param {PaginationOptions} pagination - The pagination options.
   * @returns {Observable<PaginatedResult<SensorDto>>} - An observable that emits the paginated result of sensors.
   */
  fetchAll(pagination = new PaginationOptions()): Observable<PaginatedResult<SensorDto>> {
    const endpointUri = new URL("/Sensors", this._environment.api.baseUri);
    endpointUri.searchParams.append('skip', pagination.skip.toString());
    endpointUri.searchParams.append('limit', pagination.limit.toString());
    return this._http.get<PaginatedResult<SensorDto>>(endpointUri.toString());
  }
}
