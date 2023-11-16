import { Component, effect, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { RouterLink } from "@angular/router";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { CityCreateRequest } from "@tempradar/modules/cities/city-create/city-create.request";
import { CityService } from "@tempradar/modules/cities/city.service";
import { ToastNotification, ToastService, ToastType } from "@irealworlds/toast-notifications";
import { finalize } from "rxjs";

@Component({
  selector: 'app-city-create',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, RouterLink, MatProgressSpinnerModule],
  templateUrl: './city-create.component.html'
})
export class CityCreateComponent {
  cityForm = new FormGroup({
    name: new FormControl<string>('', { nonNullable: true }),
    latitude: new FormControl<number>(0, { nonNullable: true, validators: [ Validators.required ] }),
    longitude: new FormControl<number>(0, { nonNullable: true, validators: [ Validators.required ] }),
  })

  saving = signal(false);

  /**
   * Creates an instance of the constructor.
   *
   * @param {_cityService} _cityService - The CityService instance.
   * @param {_toastService} _toastService - The ToastService instance.
   *
   * @constructor
   */
  constructor(
    private readonly _cityService: CityService,
    private readonly _toastService: ToastService,
  ) {
    effect(() => {
      if (this.saving()) {
        this.cityForm.disable();
      } else {
        this.cityForm.enable();
      }
    })
  }

  /**
   * Saves the city to the server.
   *
   * @returns {void}
   * @throws {Error} If already saving a city.
   */
  saveCity(): void {
    if (this.saving()) {
      throw new Error("Already saving a city");
    }

    this.cityForm.markAllAsTouched();

    if (this.cityForm.valid) {
      const data = new CityCreateRequest(this.cityForm.value);

      this.saving.set(true);
      this._cityService.create(data).pipe(
        finalize(() => {
          this.saving.set(false);
        })
      ).subscribe({
        next: () => {
          this._toastService.showToast(new ToastNotification({
            title: $localize `City pinned`,
            message: $localize `You have pinned this location successfully!`,
            type: ToastType.Success
          }));
        },
        error: () => {
          this._toastService.showToast(new ToastNotification({
            title: $localize `An error has occurred`,
            message: $localize `The location could not be pinned to your account. Please try again!`,
            type: ToastType.Error
          }));
        }
      })
    }
  }
}
