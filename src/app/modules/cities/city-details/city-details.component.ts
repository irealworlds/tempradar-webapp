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
import { ColorSchemeService } from "@tempradar/core/color-scheme/color-scheme.service";
import { toObservable } from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html'
})
export class CityDetailsComponent implements OnInit, OnDestroy {
  city$ = this._store.select(selectPinnedCityDetails);

  deleting$ = this._store.select(selectPinnedCityDeletionStatus).pipe(map(s => s === "loading"));

  chartOptions = {
    animationEnabled: true,
    theme: "dark1",
    toolTip: {
      shared: true
    },
    data: [
      {
        type: "column",
        name: "Maximum Temperature",
        showInLegend: true,
        yValueFormatString: "#.## ºC",
        dataPoints: [
          { y: 450 },
          { y: 414},
          { y: 520 },
          { y: 460 },
          { y: 450 },
          { y: 500 },
          { y: 480 },
          { y: 480 },
          { y: 410 },
          { y: 500 },
          { y: 480 },
          { y: 510 }
        ]
      }, {
        type: "column",
        name: "Minimum Temperature",
        showInLegend: true,
        yValueFormatString: "#.## ºC",
        dataPoints: [
          { y: 450-100 },
          { y: 414-100 },
          { y: 520-100 },
          { y: 460-100 },
          { y: 450-100 },
          { y: 500-100 },
          { y: 480-100 },
          { y: 480-100 },
          { y: 410-100 },
          { y: 500-100 },
          { y: 480-100 },
          { y: 510-100 }
        ]
      }, {
        type: "line",
        indexLabelFontSize: 16,
        name: "Average Temperature",
        showInLegend: true,
        yValueFormatString: "#.## ºC",
        dataPoints: [
          { y: 450 },
          { y: 414 },
          { y: 520 },
          { y: 460 },
          { y: 450 },
          { y: 500 },
          { y: 480 },
          { y: 480 },
          { y: 410 },
          { y: 500 },
          { y: 480 },
          { y: 510 }
        ]
      }
    ]
  };

  private readonly _unsubscribeAll = new Subject<void>();

  constructor(
    private readonly _store: Store<AppState>,
    private readonly _toastService: ToastService,
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _colorSchemeService: ColorSchemeService,
  ) {
  }

  /** @inheritDoc */
  ngOnInit(): void {
    this._store.dispatch(loadPinnedCityDetails({ id: this._activatedRoute.snapshot.paramMap.get('cityKey')! }));
    toObservable(this._colorSchemeService.systemPreference).pipe(
      takeUntil(this._unsubscribeAll)
    ).subscribe(preference => {
      this.chartOptions.theme = this._colorSchemeService.systemPreference() === "dark" ? "dark2" : "light2";
    })
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
}
