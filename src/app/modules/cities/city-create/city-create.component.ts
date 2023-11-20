import { Component, effect, OnDestroy, OnInit, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { Router, RouterLink } from "@angular/router";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { CityCreateRequest } from "@tempradar/modules/cities/city-create/city-create.request";
import { ToastNotification, ToastService, ToastType } from "@irealworlds/toast-notifications";
import { filter, firstValueFrom, Subject } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "@tempradar/core/state/app.state";
import { createPinnedCity } from "@tempradar/core/state/pinned-cities/pinned-city.actions";
import { selectPinnedCityCreationStatus } from "@tempradar/core/state/pinned-cities/pinned-city.selectors";

@Component({
  selector: 'app-city-create',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, RouterLink, MatProgressSpinnerModule],
  templateUrl: './city-create.component.html'
})
export class CityCreateComponent implements OnInit, OnDestroy {
  cityForm = new FormGroup({
    name: new FormControl<string>('', { nonNullable: true }),
    latitude: new FormControl<number>(0, { nonNullable: true, validators: [ Validators.required ] }),
    longitude: new FormControl<number>(0, { nonNullable: true, validators: [ Validators.required ] }),
  })

  saving = signal(false);

  private readonly _unsubscribeAll = new Subject<void>();

  /**
   * Creates an instance of the constructor.
   *
   * @param _store
   * @param {_toastService} _toastService - The ToastService instance.
   * @param _router
   * @constructor
   */
  constructor(
    private readonly _store: Store<AppState>,
    private readonly _toastService: ToastService,
    private readonly _router: Router,
  ) {
    effect(() => {
      if (this.saving()) {
        this.cityForm.disable();
      } else {
        this.cityForm.enable();
      }
    })
  }

  /** @inheritDoc */
  ngOnInit(): void {
    this._store.select(selectPinnedCityCreationStatus).subscribe(status => {
      if (status === "loading") {
        this.saving.set(true);
      } else {
        this.saving.set(false);
      }
    });
  }

  /** @inheritDoc */
  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  /**
   * Saves the city to the server.
   *
   * @returns {void}
   * @throws {Error} If already saving a city.
   */
  async saveCity(): Promise<void> {
    if (this.saving()) {
      throw new Error("Already saving a city");
    }

    this.cityForm.markAllAsTouched();

    if (this.cityForm.valid) {
      const data = new CityCreateRequest(this.cityForm.value);
      this._store.dispatch(createPinnedCity({ data }));

      const result = await firstValueFrom(
        this._store.select(selectPinnedCityCreationStatus)
          .pipe(
            filter(status => ["success", "failure"].includes(status))
          )
      );
      console.debug(result);
      switch (result) {
        case "success": {
          this._toastService.showToast(new ToastNotification({
            title: $localize `City pinned`,
            message: $localize `You have pinned this location successfully!`,
            type: ToastType.Success
          }));

          await this._router.navigate(["/"]);

          break;
        }
        case "failure": {
          this._toastService.showToast(new ToastNotification({
            title: $localize `An error has occurred`,
            message: $localize `The location could not be pinned to your account. Please try again!`,
            type: ToastType.Error
          }));
          break;
        }
      }
    }
  }
}
