import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "@tempradar/core/state/app.state";
import { selectAllSensors, selectSensorLoadingStatus } from "@tempradar/core/state/sensors/sensor.selectors";
import { loadSensors } from "@tempradar/core/state/sensors/sensor.actions";
import {
  selectAllPinnedSensors,
  selectPinnedSensorLoadingStatus
} from "@tempradar/core/state/pinned-sensors/pinned-sensor.selectors";
import { combineLatest, map, take } from "rxjs";
import { loadPinnedSensors } from "@tempradar/core/state/pinned-sensors/pinned-sensor.actions";

@Component({
  selector: 'app-create-sensor',
  templateUrl: './create-sensor.component.html',
})
export class CreateSensorComponent implements OnInit {
  sensors$ = this._store.select(selectAllSensors);
  sensorsLoadingStatus$ = this._store.select(selectSensorLoadingStatus);

  pinnedSensors$ = this._store.select(selectAllPinnedSensors);
  pinnedSensorLoadingStatus$ = this._store.select(selectPinnedSensorLoadingStatus);

  loadingFinished$ = combineLatest([
    this.sensorsLoadingStatus$,
    this.pinnedSensorLoadingStatus$
  ]).pipe(map(([sensorStatus, pinnedSensorStatus]) => sensorStatus === "success" && pinnedSensorStatus === "success"));

  pinnedSensorIds$ = this.pinnedSensors$.pipe(
    map(sensors =>
      Array.from(new Set(sensors.map(sensor => sensor.sensorId)))
    )
  );

  constructor(
    private readonly _store: Store<AppState>
  ) {
  }

  /** @inheritDoc */
  ngOnInit() {
    // Load all sensors
    this._store.dispatch(loadSensors());

    // If pinned sensors have not been loaded, load them now
    this.pinnedSensorLoadingStatus$.pipe(take(1)).subscribe(status => {
      if (status === "pending") {
        this._store.dispatch(loadPinnedSensors());
      }
    });
  }
}
