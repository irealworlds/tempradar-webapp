import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { PinnedSensorService } from "@tempradar/modules/sensors/services/pinned-sensor.service";
import {
  createPinnedSensor,
  deletePinnedSensor,
  loadPinnedSensors,
  pinnedSensorCreationFailure,
  pinnedSensorCreationSuccess,
  pinnedSensorDeletionFailure,
  pinnedSensorDeletionSuccess,
  pinnedSensorsLoadingFailure,
  pinnedSensorsLoadingSuccess
} from "@tempradar/core/state/pinned-sensors/pinned-sensor.actions";

@Injectable()
export class PinnedSensorEffects {
  /**
   * PinnedSensorEffects constructor method.
   *
   * @param _actions$
   * @param _pinnedSensorService
   */
  constructor(
    private readonly _actions$: Actions,
    private readonly _pinnedSensorService: PinnedSensorService,
  ) {
  }

  // Fetch the pinned sensors when loading is requested
  loadSensors$ = createEffect(() =>
    this._actions$.pipe(
      ofType(loadPinnedSensors),
      switchMap(() =>
        this._pinnedSensorService.fetchAll().pipe(
          map(sensors => pinnedSensorsLoadingSuccess({ sensors })),
          catchError((error: HttpErrorResponse) => of(pinnedSensorsLoadingFailure({ errors: [ error.message ] })))
        )
      )
    )
  );

  // Create a new pinned sensor
  createSensor$ = createEffect(() =>
    this._actions$.pipe(
      ofType(createPinnedSensor),
      switchMap(({ creationData }) =>
        this._pinnedSensorService.create(creationData).pipe(
          map(sensor => pinnedSensorCreationSuccess({ sensor })),
          catchError((error: HttpErrorResponse) => of(pinnedSensorCreationFailure({ errors: [ error.message ] })))
        )
      )
    )
  );

  // Unpin a sensor
  deleteSensor$ = createEffect(() =>
    this._actions$.pipe(
      ofType(deletePinnedSensor),
      switchMap(({ id }) =>
        this._pinnedSensorService.deleteById(id).pipe(
          map(() => pinnedSensorDeletionSuccess({ id })),
          catchError((error: HttpErrorResponse) => of(pinnedSensorDeletionFailure({ errors: [ error.message ] })))
        )
      )
    )
  );
}
