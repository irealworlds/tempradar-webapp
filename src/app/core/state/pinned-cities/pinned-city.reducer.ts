import { createReducer, on } from "@ngrx/store";
import { initialState } from "@tempradar/core/state/pinned-cities/pinned-city.state";
import {
  createPinnedCity,
  deletePinnedCity,
  loadPinnedCities,
  pinnedCitiesCreationFailure,
  pinnedCitiesCreationSuccess,
  pinnedCitiesLoadingFailure,
  pinnedCitiesLoadingSuccess
} from "@tempradar/core/state/pinned-cities/pinned-city.actions";

export const pinnedCityReducer = createReducer(
  // Initial state
  initialState,

  // Set the city creation state
  on(createPinnedCity, (state) => ({
    ...state,
    savingErrors: [],
    savingStatus: "loading",
  })),

  // Add the newly pinned city to the list
  on(pinnedCitiesCreationSuccess, (state, { city }) => ({
    ...state,
    savingErrors: [],
    savingStatus: "success",
    cities: [
      city,
      ...state.cities,
    ]
  })),

  // Set the city creation failure state
  on(pinnedCitiesCreationFailure, (state, { errors }) => ({
    ...state,
    savingErrors: errors,
    savingStatus: "failure",
  })),

  // When a pinned city is removed
  on(deletePinnedCity, (state, { id }) => ({
    ...state,
    cities: state.cities.filter(c => c.id !== id)
  })),

  // Trigger the loading status on pinned cities
  on(loadPinnedCities, (state) => ({
    ...state,state,
    loadingErrors: [],
    loadingStatus: "loading"
  })),

  // Trigger success status on pinned cities
  on(pinnedCitiesLoadingSuccess, (state, { cities }) => ({
    ...state,
    cities,
    loadingErrors: [],
    loadingStatus: "success"
  })),

  // Trigger the failure on pinned cities
  on(pinnedCitiesLoadingFailure, (state, { errors }) => ({
    ...state,
    errors,
    loadingStatus: "failure"
  })),
);
