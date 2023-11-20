import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { loadPinnedCities } from "@tempradar/core/state/pinned-cities/pinned-city.actions";
import { selectAllPinnedCities } from "@tempradar/core/state/pinned-cities/pinned-city.selectors";
import { AppState } from "@tempradar/core/state/app.state";

@Component({
  selector: 'app-pinned-sources',
  templateUrl: './pinned-sources.component.html'
})
export class PinnedSourcesComponent implements OnInit {
  cities$ = this._store.select(selectAllPinnedCities);

  constructor(
    private readonly _store: Store<AppState>,
  ) {
  }

  /** @inheritDoc */
  ngOnInit(): void {
    this._store.dispatch(loadPinnedCities());
  }
}
