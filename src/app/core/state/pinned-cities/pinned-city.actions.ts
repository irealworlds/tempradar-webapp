import { createAction, props } from "@ngrx/store";
import { City } from "@tempradar/modules/cities/city.model";
import { CityCreateRequest } from "@tempradar/modules/cities/city-create/city-create.request";


export const loadPinnedCities = createAction("[] Load Pinned Cities");
export const pinnedCitiesLoadingSuccess = createAction(
  '[Pinned Cities API] Pinned City Loading Successful',
  props<{ cities: City[] }>()
);
export const pinnedCitiesLoadingFailure = createAction(
  '[Pinned Cities API] Pinned City Loading Failed',
  props<{ errors: string[] }>()
);

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

export const deletePinnedCity = createAction(
  '[] Delete Pinned City',
  props<{ id: string }>()
);
