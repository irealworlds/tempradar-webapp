import { Injectable } from "@angular/core";
import { EnvironmentConfig } from "@tempradar/core/environment/environment-config.model";
import { HttpClient } from "@angular/common/http";
import { PaginationOptions } from "@tempradar/core/pagination/pagination-options.model";
import { Observable } from "rxjs";
import { PaginatedResult } from "@tempradar/core/pagination/paginated-result.model";
import { SensorDto } from "@tempradar/modules/sensors/dtos/sensor.dto";
import { SensorReadingDto } from "@tempradar/modules/sensors/dtos/sensor-reading.dto";
import { SensorAirQualityLevel } from "@tempradar/modules/sensors/enums/sensor-air-quality-level.enum";

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

  /**
   * Fetch readings for a sensor from the API.
   *
   * @param sensorKey
   * @param pagination
   */
  fetchReadings(sensorKey: string, pagination = new PaginationOptions()): Observable<PaginatedResult<SensorReadingDto>> {
    const endpointUri = new URL(`/Sensors/${sensorKey}/Readings`, this._environment.api.baseUri);
    endpointUri.searchParams.append('skip', pagination.skip.toString());
    endpointUri.searchParams.append('limit', pagination.limit.toString());
    return this._http.get<PaginatedResult<SensorReadingDto>>(endpointUri.toString());
  }

  /**
   * Converts a sensor reading quality value to an air quality level.
   *
   * @param {number} readingQuality - The sensor reading quality value to be converted.
   * @returns {SensorAirQualityLevel} - The corresponding air quality level.
   */
  getAirQualityLevelFromReading(readingQuality: number): SensorAirQualityLevel {
    if (readingQuality < 60) {
      return SensorAirQualityLevel.Clear;
    } else if (readingQuality < 100) {
      return SensorAirQualityLevel.Good;
    } else if (readingQuality < 300) {
      return SensorAirQualityLevel.Okay;
    } else {
      return SensorAirQualityLevel.Poor;
    }
  }
}
