import { Component, OnInit } from "@angular/core";
import { map, take } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "@tempradar/core/state/app.state";
import {
  selectAllPinnedSensors,
  selectPinnedSensorLoadingStatus
} from "@tempradar/core/state/pinned-sensors/pinned-sensor.selectors";
import { loadPinnedSensors } from "@tempradar/core/state/pinned-sensors/pinned-sensor.actions";

@Component({
  selector: 'app-pinned-sensors-list',
  templateUrl: './pinned-sensors-list.component.html'
})
export class PinnedSensorsListComponent implements OnInit {
  sensors$ = this._store.select(selectAllPinnedSensors);
  sensorsLoaded$ = this._store.select(selectPinnedSensorLoadingStatus).pipe(
    map(status => status === "success")
  );

  /**
   * PinnedSensorsListComponent constructor method.
   *
   * @param _store
   */
  constructor(
    private readonly _store: Store<AppState>,
  ) {
  }

  /** @inheritDoc */
  ngOnInit(): void {
    this.sensorsLoaded$.pipe(take(1)).subscribe(loaded => {
      if (!loaded) {
        this._store.dispatch(loadPinnedSensors());
      }
    });
  }
}
