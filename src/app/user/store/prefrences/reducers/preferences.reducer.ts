import { Action } from '@ngrx/store';
import { PreferencesActions } from '../actions/preferences.actions';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

export interface PreferencesState {
  somethingAwesome: boolean;
}

export const initialState: PreferencesState = {
  somethingAwesome: false
};

export function reducer(state = initialState, action: PreferencesActions): PreferencesState {
  switch (action.type) {
    default:
      return state;
  }
}
