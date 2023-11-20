import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PinnedCityWeatherService } from "@tempradar/modules/cities/pinned-city-weather.service";
import {
  cityWeatherFetchingFailure,
  cityWeatherFetchingSuccess,
  fetchCityWeather
} from "@tempradar/core/state/pinned-city-weather/pinned-city-weather.actions";
import { catchError, map, of, switchMap } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class PinnedCityWeatherEffects {
  constructor(
    private readonly _actions$: Actions,
    private readonly _weatherService: PinnedCityWeatherService,
  ) {
  }

  // Fetch the weather details from the API
  fetchWeatherDetails$ = createEffect(() =>
    this._actions$.pipe(
      ofType(fetchCityWeather),
      switchMap(action => this._weatherService.fetchForCityById(action.id).pipe(
        map(details => cityWeatherFetchingSuccess({ details })),
        catchError((error: HttpErrorResponse) => of(cityWeatherFetchingFailure({ errors: [error.message] })))
      ))
    )
  );
}
