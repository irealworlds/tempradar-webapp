import { createReducer, on } from "@ngrx/store";
import { initialState } from "@tempradar/core/state/pinned-cities/pinned-city.state";
import {
  loadPinnedCities,
  pinnedCitiesLoadingFailure,
  pinnedCitiesLoadingSuccess
} from "@tempradar/core/state/pinned-cities/actions/pinned-cities-list.actions";
import {
  createPinnedCity,
  pinnedCitiesCreationFailure,
  pinnedCitiesCreationSuccess
} from "@tempradar/core/state/pinned-cities/actions/create-pinned-city.actions";
import {
  deletePinnedCity,
  pinnedCitiesDeletionFailure,
  pinnedCitiesDeletionSuccess,
} from "@tempradar/core/state/pinned-cities/actions/delete-pinned-city.actions";
import {
  loadPinnedCityDetails,
  pinnedCityDetailsLoadingFailure,
  pinnedCityDetailsLoadingSuccess
} from "@tempradar/core/state/pinned-cities/actions/pinned-city-details.actions";

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

  // Set the city deletion state
  on(deletePinnedCity, (state) => ({
    ...state,
    deletingErrors: [],
    deletingStatus: "loading",
  })),

  // Remove the city from the list
  on(pinnedCitiesDeletionSuccess, (state, { id }) => ({
    ...state,
    deletingErrors: [],
    deletingStatus: "success",
    cities: state.cities.filter(c => c.id !== id)
  })),

  // Set the city deletion failure state
  on(pinnedCitiesDeletionFailure, (state, { errors }) => ({
    ...state,
    deletingErrors: errors,
    deletingStatus: "failure",
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
    loadingErrors: errors,
    loadingStatus: "failure"
  })),

  // Trigger the loading status on pinned cities
  on(loadPinnedCityDetails, (state) => ({
    ...state,state,
    detailsLoadingErrors: [],
    detailsLoadingStatus: "loading"
  })),

  // Trigger success status on pinned cities
  on(pinnedCityDetailsLoadingSuccess, (state, { city }) => ({
    ...state,
    cityDetails: city,
    detailsLoadingErrors: [],
    detailsLoadingStatus: "success"
  })),

  // Trigger the failure on pinned cities
  on(pinnedCityDetailsLoadingFailure, (state, { errors }) => ({
    ...state,
    detailsLoadingErrors: errors,
    detailsLoadingStatus: "failure"
  })),
);
