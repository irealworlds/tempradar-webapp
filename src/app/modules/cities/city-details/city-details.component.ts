import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "@tempradar/core/state/app.state";
import {
  selectPinnedCityDeletionStatus,
  selectPinnedCityDetails
} from "@tempradar/core/state/pinned-cities/pinned-city.selectors";
import { filter, firstValueFrom, map, Subject, takeUntil } from "rxjs";
import { ToastNotification, ToastService, ToastType } from "@irealworlds/toast-notifications";
import { ActivatedRoute, Router } from "@angular/router";
import { deletePinnedCity } from "@tempradar/core/state/pinned-cities/actions/delete-pinned-city.actions";
import { loadPinnedCityDetails } from "@tempradar/core/state/pinned-cities/actions/pinned-city-details.actions";
import {
  fetchCityWeather,
  fetchWeatherHistory
} from "@tempradar/core/state/pinned-city-weather/pinned-city-weather.actions";
import {
  selectLoadedCityWeatherDetails,
  selectWeatherHistory
} from "@tempradar/core/state/pinned-city-weather/pinned-city-weather.selectors";

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html'
})
export class CityDetailsComponent implements OnInit, OnDestroy {
  city$ = this._store.select(selectPinnedCityDetails);
  weather$ = this._store.select(selectLoadedCityWeatherDetails);
  temperatureHistory$ = this._store.select(selectWeatherHistory);

  deleting$ = this._store.select(selectPinnedCityDeletionStatus).pipe(map(s => s === "loading"));

  private readonly _unsubscribeAll = new Subject<void>();

  constructor(
    private readonly _store: Store<AppState>,
    private readonly _toastService: ToastService,
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
  ) {
  }

  /** @inheritDoc */
  ngOnInit(): void {
    this._store.dispatch(loadPinnedCityDetails({ id: this._activatedRoute.snapshot.paramMap.get('cityKey')! }));

    this.city$.pipe(
      takeUntil(this._unsubscribeAll)
    ).subscribe(city => {
      if (city?.id) {
        this._store.dispatch(fetchCityWeather({ id: city.id }))
        this._store.dispatch(fetchWeatherHistory({ id: city.id }))
      }
    });
  }

  /** @inheritDoc */
  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  /**
   * Deletes a city from the component.
   * Throws an error if the city is not set on the component.
   * Dispatches a delete pinned city action to the store.
   * Waits for the deletion status from the store and displays a toast notification based on the status.
   * Navigates to the home page on successful deletion.
   * Displays an error toast notification on failure.
   * @return {Promise<void>} A promise that resolves when the city is deleted.
   * @throws {Error} If the city is not set on the component.
   */
  async deleteCity(): Promise<void> {
    const city = await firstValueFrom(this.city$);

    if (!city?.id) {
      throw new Error("City not set on component.");
    }

    this._store.dispatch(deletePinnedCity({ id: city.id }));

    const status = await firstValueFrom(this._store.select(selectPinnedCityDeletionStatus).pipe(
      filter(status => ["success", "failure"].includes(status))
    ));

    console.debug(status);

    switch (status) {
      case "success": {
        this._toastService.showToast(new ToastNotification({
          title: $localize `City unpinned`,
          message: $localize `This city has been unpinned from your account!`,
          type: ToastType.Success
        }));
        await this._router.navigate(['/']);
        break;
      }
      default: {
        this._toastService.showToast(new ToastNotification({
          title: $localize `An error has occurred`,
          message: $localize `The city could not be unpinned from your account. Please try again!`,
          type: ToastType.Error
        }));
      }
    }
  }

  /**
   * Refreshes the weather data for the current city.
   *
   * @return {Promise<void>} A Promise that resolves when the weather data is refreshed.
   * @throws {Error} If the city is not set on the component.
   */
  async refreshWeatherData(): Promise<void> {
    const city = await firstValueFrom(this.city$);

    if (!city?.id) {
      throw new Error("City not set on component");
    }

    this._store.dispatch(fetchCityWeather({ id: city.id }));
  }
}
