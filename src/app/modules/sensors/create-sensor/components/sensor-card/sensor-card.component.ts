import { Component, Input } from "@angular/core";
import { SensorDto } from "@tempradar/modules/sensors/dtos/sensor.dto";
import { CreatePinnedSensorDto } from "@tempradar/modules/sensors/dtos/create-pinned-sensor.dto";
import { ToastNotification, ToastService, ToastType } from "@irealworlds/toast-notifications";
import { Store } from "@ngrx/store";
import { AppState } from "@tempradar/core/state/app.state";
import { createPinnedSensor, deletePinnedSensor } from "@tempradar/core/state/pinned-sensors/pinned-sensor.actions";
import {
  selectAllPinnedSensors,
  selectPinnedSensorCreationStatus,
  selectPinnedSensorDeletionStatus
} from "@tempradar/core/state/pinned-sensors/pinned-sensor.selectors";
import { filter, firstValueFrom } from "rxjs";

@Component({
  selector: 'app-sensor-card',
  templateUrl: './sensor-card.component.html'
})
export class SensorCardComponent {
  @Input() sensor?: SensorDto;
  @Input() pinned = false;

  pinning = false;

  private readonly _creationStatus$ = this._store.select(selectPinnedSensorCreationStatus);
  private readonly _deletionStatus$ = this._store.select(selectPinnedSensorDeletionStatus);
  private readonly _pinnedSensors$ = this._store.select(selectAllPinnedSensors);

  /**
   * SensorCardComponent constructor method.
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
   * Send a request to pin this sensor to the current account.
   */
  async pinSensor() {
    if (!this.sensor) {
      throw new Error("No sensor set on this component.");
    }

    if (this.pinning) {
      throw new Error("Already updating this sensor's pin status.");
    }

    const creationData = new CreatePinnedSensorDto({
      sensorId: this.sensor.resourceIdentifier,
      name: this.sensor.name,
    })

    this.pinning = true;
    this._store.dispatch(createPinnedSensor({ creationData }));

    const status = await firstValueFrom(this._creationStatus$.pipe(
      filter(status => status === "success" || status === "failure")
    ));

    // Display a toast notification
    switch (status) {
      case "success": {
        this._toastService.showToast(new ToastNotification({
          title: $localize `Sensor pinned`,
          message: $localize `This sensor has been pinned to your account!`,
          type: ToastType.Success
        }));
        break;
      }
      case "failure": {
        this._toastService.showToast(new ToastNotification({
          title: $localize `An error has occurred`,
          message: $localize `The sensor could not be pinned to your account. Please try again!`,
          type: ToastType.Error
        }));
      }
    }

    // Disable the loading state
    this.pinning = false;
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

    const pinningId = await this._getSensorPinningId();

    if (!pinningId) {
      throw new Error("Could not find the id of this sensor's pinning.");
    }

    this.pinning = true;
    this._store.dispatch(deletePinnedSensor({ id: pinningId }));

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

  /**
   * Get the pinning id for the current sensor (if it exists).
   *
   * @private
   */
  private async _getSensorPinningId(): Promise<string | undefined> {
    if (!this.sensor) {
      throw new Error("No sensor set on this component.");
    }
    const sensors = await firstValueFrom(this._pinnedSensors$);
    return sensors.find(s => s.sensorId === this.sensor!.resourceIdentifier)?.id;
  }
}
