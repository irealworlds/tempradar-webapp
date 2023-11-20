import { Injectable } from "@angular/core";
import { CityService } from "@tempradar/modules/cities/city.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import {
  createPinnedCity,
  loadPinnedCities,
  pinnedCitiesCreationFailure,
  pinnedCitiesCreationSuccess,
  pinnedCitiesLoadingFailure,
  pinnedCitiesLoadingSuccess
} from "@tempradar/core/state/pinned-cities/pinned-city.actions";
import { HttpErrorResponse } from "@angular/common/http";
import { ToastService } from "@irealworlds/toast-notifications";

@Injectable()
export class PinnedCityEffects {
  constructor(
    private readonly _actions$: Actions,
    private readonly _cityService: CityService,
    private readonly _toastService: ToastService,
  ) {
  }

  // Run this code when a loadPinnedCities action is dispatched
  loadCities$ = createEffect(() =>
    this._actions$.pipe(
      ofType(loadPinnedCities),
      switchMap(() =>
        this._cityService.fetchAll().pipe(
          map(cities => pinnedCitiesLoadingSuccess({ cities })),
          catchError((error: HttpErrorResponse) => of(pinnedCitiesLoadingFailure({ errors: [ error.message ] })))
        )
      )
    )
  );

  // Save a newly created city to the API
  createCity$ = createEffect(() =>
    this._actions$.pipe(
      ofType(createPinnedCity),
      switchMap(action =>
        this._cityService.create(action.data).pipe(
          map(city => pinnedCitiesCreationSuccess({ city })),
          catchError((error: HttpErrorResponse) => of(pinnedCitiesCreationFailure({ errors: [ error.message ] })))
        )
      )
    )
  );
}
