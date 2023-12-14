import { Component, OnInit } from "@angular/core";
import {
  selectAllPinnedCities,
  selectAllPinnedCitiesLoadingStatus
} from "@tempradar/core/state/pinned-cities/pinned-city.selectors";
import { map, take } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "@tempradar/core/state/app.state";
import { loadPinnedCities } from "@tempradar/core/state/pinned-cities/actions/pinned-cities-list.actions";

@Component({
  selector: 'app-pinned-cities-list',
  templateUrl: './pinned-cities-list.component.html'
})
export class PinnedCitiesListComponent implements OnInit {
  cities$ = this._store.select(selectAllPinnedCities);
  citiesLoaded$ = this._store.select(selectAllPinnedCitiesLoadingStatus).pipe(
    map(status => status === "success")
  );

  constructor(
    private readonly _store: Store<AppState>,
  ) {
  }

  /** @inheritDoc */
  ngOnInit(): void {
    this.citiesLoaded$.pipe(take(1)).subscribe(loaded => {
      if (!loaded) {
        this._store.dispatch(loadPinnedCities());
      }
    });
  }
}
