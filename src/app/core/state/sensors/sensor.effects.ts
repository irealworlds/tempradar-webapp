import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { SensorService } from "@tempradar/modules/sensors/services/sensor.service";
import { catchError, map, of, switchMap } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import {
  loadSensors,
  sensorsLoadingFailure,
  sensorsLoadingSuccess
} from "@tempradar/core/state/sensors/sensor.actions";

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
}
