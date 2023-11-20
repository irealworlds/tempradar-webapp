import { createAction, props } from "@ngrx/store";

export const deletePinnedCity = createAction(
  '[Pinned City Page] Create Pinned City',
  props<{ id: string }>()
);
export const pinnedCitiesDeletionSuccess = createAction(
  '[Pinned Cities API] Pinned City Deletion Successful',
  props<{ id: string }>()
);
export const pinnedCitiesDeletionFailure = createAction(
  '[Pinned Cities API] Pinned City Deletion Failed',
  props<{ errors: string[] }>()
);
