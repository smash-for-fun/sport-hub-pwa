import { PreferencesActions } from '../actions';


export interface PreferencesState {
  somethingAwesome: boolean;
}

export const initialPreferencesState: PreferencesState = {
  somethingAwesome: false
};

export function preferencesReducer(
  state = initialPreferencesState,
  action: PreferencesActions
): PreferencesState {
  switch (action.type) {
    default:
      return state;
  }
}
