import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "@tempradar/core/state/app.state";
import {
  selectLatestSensorReading,
  selectSensorReadingLoadingStatus,
  selectSensorReadings
} from "@tempradar/core/state/sensors/sensor.selectors";
import { ActivatedRoute } from "@angular/router";
import { loadSensorReadings } from "@tempradar/core/state/sensors/sensor.actions";
import { map, Observable } from "rxjs";
import { SensorHistoricalTemperatureDto } from "@tempradar/modules/sensors/dtos/sensor-historical-temperature.dto";
import { SensorHistoricalHumidityDto } from "@tempradar/modules/sensors/dtos/sensor-historical-humidity.dto";

@Component({
  templateUrl: './sensor-details.component.html',
})
export class SensorDetailsComponent implements OnInit {
  readings$ = this._store.select(selectSensorReadings(this.sensorKey));
  readingLoadingStatus$ = this._store.select(selectSensorReadingLoadingStatus);
  latestReading$ = this._store.select(selectLatestSensorReading(this.sensorKey));

  get historicalTemperatures$(): Observable<SensorHistoricalTemperatureDto[]> {
    return this.readings$.pipe(
      map(readings => readings.map(reading => ({
        temperature: reading.temperature,
        recordedAt: new Date(reading.createdAt)
      } as SensorHistoricalTemperatureDto)))
    );
  }
  get historicalHumidities$(): Observable<SensorHistoricalHumidityDto[]> {
    return this.readings$.pipe(
      map(readings => readings.map(reading => ({
        humidity: reading.humidity,
        recordedAt: new Date(reading.createdAt)
      } as SensorHistoricalHumidityDto)))
    );
  }

  get sensorKey(): string {
    return this._activatedRoute.snapshot.paramMap.get("sensorKey")!;
  }

  get preloading$(): Observable<boolean> {
    return this.readingLoadingStatus$.pipe(
      map(status => status === "loading" || status === "pending")
    );
  }

  constructor(
    private readonly _store: Store<AppState>,
    private readonly _activatedRoute: ActivatedRoute
  ) {
  }

  /** @inheritDoc */
  ngOnInit() {
    this._store.dispatch(loadSensorReadings({
      sensorKey: this.sensorKey
    }));
  }
}
