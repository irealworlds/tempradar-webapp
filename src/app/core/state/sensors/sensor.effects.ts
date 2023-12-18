import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { SensorService } from "@tempradar/modules/sensors/services/sensor.service";
import { catchError, map, of, switchMap } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import {
  loadSensorReadings,
  loadSensors,
  sensorReadingsLoadingFailure,
  sensorReadingsLoadingSuccess,
  sensorsLoadingFailure,
  sensorsLoadingSuccess
} from "@tempradar/core/state/sensors/sensor.actions";
import { PaginationOptions } from "@tempradar/core/pagination/pagination-options.model";

@Injectable()
export class SensorEffects {
  constructor(
    private readonly _actions$: Actions,
    private readonly _sensorService: SensorService,
  ) {
  }

  // Run this code when a loadSensors action is dispatched
  loadSensors$ = createEffect(() =>
    this._actions$.pipe(
      ofType(loadSensors),
      switchMap(() =>
        this._sensorService.fetchAll().pipe(
          map(sensors => sensorsLoadingSuccess({ sensors: sensors.items })),
          catchError((error: HttpErrorResponse) => of(sensorsLoadingFailure({ errors: [ error.message ] })))
        )
      )
    )
  );

  // Load a sensor's readings
  loadSensorReadings$ = createEffect(() =>
    this._actions$.pipe(
      ofType(loadSensorReadings),
      switchMap(({ sensorKey }) =>
        this._sensorService.fetchReadings(sensorKey, new PaginationOptions({
          limit: 100
        })).pipe(
          map(response => sensorReadingsLoadingSuccess({ sensorKey, readings: response.items })),
          catchError((error: HttpErrorResponse) => of(sensorReadingsLoadingFailure({ errors: [ error.message ] })))
        )
      )
    )
  );
}
