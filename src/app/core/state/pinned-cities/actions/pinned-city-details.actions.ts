import { createAction, props } from "@ngrx/store";
import { City } from "@tempradar/modules/cities/city.model";

export const loadPinnedCityDetails = createAction(
  "[Pinned City Details Page] Load Pinned City Details",
  props<{ id: string }>()
);
export const pinnedCityDetailsLoadingSuccess = createAction(
  '[Pinned Cities API] Pinned City Details Loading Successful',
  props<{ city: City }>()
);
export const pinnedCityDetailsLoadingFailure = createAction(
  '[Pinned Cities API] Pinned City Details Loading Failed',
  props<{ errors: string[] }>()
);
