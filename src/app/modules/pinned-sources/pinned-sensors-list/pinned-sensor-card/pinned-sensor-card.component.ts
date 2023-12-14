import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PinnedSensorDto } from "@tempradar/modules/sensors/dtos/pinned-sensor.dto";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { RouterLink } from "@angular/router";
import {
  selectAllPinnedSensors,
  selectPinnedSensorDeletionStatus
} from "@tempradar/core/state/pinned-sensors/pinned-sensor.selectors";
import { Store } from "@ngrx/store";
import { AppState } from "@tempradar/core/state/app.state";
import { ToastNotification, ToastService, ToastType } from "@irealworlds/toast-notifications";
import { deletePinnedSensor } from "@tempradar/core/state/pinned-sensors/pinned-sensor.actions";
import { filter, firstValueFrom } from "rxjs";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@Component({
  selector: 'app-pinned-sensor-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatDividerModule, MatIconModule, RouterLink, MatProgressSpinnerModule],
  templateUrl: './pinned-sensor-card.component.html'
})
export class PinnedSensorCardComponent {
  @Input() sensor?: PinnedSensorDto;

  pinning = false;

  private readonly _deletionStatus$ = this._store.select(selectPinnedSensorDeletionStatus);
  private readonly _pinnedSensors$ = this._store.select(selectAllPinnedSensors);

  /**
   * PinnedSensorCardComponent constructor method.
   *
   * @param _store
   * @param _toastService
   */
  constructor(
    private readonly _store: Store<AppState>,
    private readonly _toastService: ToastService
  ) {
  }

  /**
   * Unpin the current sensor from the user's account.
   */
  async unpinSensor() {
    if (!this.sensor) {
      throw new Error("No sensor set on this component.");
    }

    if (this.pinning) {
      throw new Error("Already updating this sensor's pin status.");
    }
    this.pinning = true;
    this._store.dispatch(deletePinnedSensor({ id: this.sensor.id }));

    const status = await firstValueFrom(this._deletionStatus$.pipe(
      filter(status => status === "success" || status === "failure")
    ));

    // Display a toast notification
    switch (status) {
      case "success": {
        this._toastService.showToast(new ToastNotification({
          title: $localize `Sensor unpinned`,
          message: $localize `This sensor has been unpinned from your account!`,
          type: ToastType.Success
        }));
        break;
      }
      case "failure": {
        this._toastService.showToast(new ToastNotification({
          title: $localize `An error has occurred`,
          message: $localize `The sensor could not be unpinned from your account. Please try again!`,
          type: ToastType.Error
        }));
      }
    }

    // Disable the loading state
    this.pinning = false;
  }
}
