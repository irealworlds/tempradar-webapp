import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { loadPinnedCities } from "@tempradar/core/state/pinned-cities/actions/pinned-cities-list.actions";
import {
  selectAllPinnedCities,
  selectAllPinnedCitiesLoadingStatus
} from "@tempradar/core/state/pinned-cities/pinned-city.selectors";
import { AppState } from "@tempradar/core/state/app.state";
import { map } from "rxjs";

@Component({
  selector: 'app-pinned-sources',
  templateUrl: './pinned-sources.component.html'
})
export class PinnedSourcesComponent implements OnInit {
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
    this._store.dispatch(loadPinnedCities());
  }
}
