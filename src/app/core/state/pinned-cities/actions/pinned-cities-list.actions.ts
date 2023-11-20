import { createAction, props } from "@ngrx/store";
import { City } from "@tempradar/modules/cities/city.model";

export const loadPinnedCities = createAction("[Pinned Cities Page] Load Pinned Cities");
export const pinnedCitiesLoadingSuccess = createAction(
  '[Pinned Cities API] Pinned City Loading Successful',
  props<{ cities: City[] }>()
);
export const pinnedCitiesLoadingFailure = createAction(
  '[Pinned Cities API] Pinned City Loading Failed',
  props<{ errors: string[] }>()
);

