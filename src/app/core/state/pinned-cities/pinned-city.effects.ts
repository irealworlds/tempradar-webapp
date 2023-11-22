import { Injectable } from "@angular/core";
import { CityService } from "@tempradar/modules/cities/city.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import {
  loadPinnedCities,
  pinnedCitiesLoadingFailure,
  pinnedCitiesLoadingSuccess,
} from "@tempradar/core/state/pinned-cities/actions/pinned-cities-list.actions";
import { HttpErrorResponse } from "@angular/common/http";
import {
  createPinnedCity,
  pinnedCitiesCreationFailure,
  pinnedCitiesCreationSuccess
} from "@tempradar/core/state/pinned-cities/actions/create-pinned-city.actions";
import {
  deletePinnedCity,
  pinnedCitiesDeletionFailure,
  pinnedCitiesDeletionSuccess,
} from "@tempradar/core/state/pinned-cities/actions/delete-pinned-city.actions";
import {
  loadPinnedCityDetails,
  pinnedCityDetailsLoadingFailure,
  pinnedCityDetailsLoadingSuccess
} from "@tempradar/core/state/pinned-cities/actions/pinned-city-details.actions";

@Injectable()
export class PinnedCityEffects {
  constructor(
    private readonly _actions$: Actions,
    private readonly _cityService: CityService,
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

  // Run this code when a loadPinnedCities action is dispatched
  loadCityDetails$ = createEffect(() =>
    this._actions$.pipe(
      ofType(loadPinnedCityDetails),
      switchMap((action) =>
        this._cityService.fetchById(action.id).pipe(
          map(city => pinnedCityDetailsLoadingSuccess({ city })),
          catchError((error: HttpErrorResponse) => of(pinnedCityDetailsLoadingFailure({ errors: [ error.message ] })))
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
          catchError((error: HttpErrorResponse) => of(pinnedCitiesCreationFailure({errors: [error.message]})))
        )
      )
    )
  );

  // Run this code when a loadPinnedCities action is dispatched
  deleteCity$ = createEffect(() =>
    this._actions$.pipe(
      ofType(deletePinnedCity),
      switchMap((action) =>
        this._cityService.deleteById(action.id).pipe(
          map(() => pinnedCitiesDeletionSuccess({ id: action.id })),
          catchError((error: HttpErrorResponse) => of(pinnedCitiesDeletionFailure({ errors: [ error.message ] })))
        )
      )
    )
  );
}
