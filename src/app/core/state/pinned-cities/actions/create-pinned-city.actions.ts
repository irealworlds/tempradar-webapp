import { createAction, props } from "@ngrx/store";
import { CityCreateRequest } from "@tempradar/modules/cities/city-create/city-create.request";
import { City } from "@tempradar/modules/cities/city.model";

export const createPinnedCity = createAction(
  '[Create Pinned City Page] Create Pinned City',
  props<{ data: CityCreateRequest }>()
);
export const pinnedCitiesCreationSuccess = createAction(
  '[Pinned Cities API] Pinned City Creation Successful',
  props<{ city: City }>()
);
export const pinnedCitiesCreationFailure = createAction(
  '[Pinned Cities API] Pinned City Creation Failed',
  props<{ errors: string[] }>()
);
