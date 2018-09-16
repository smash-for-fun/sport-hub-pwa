import { Action } from '@ngrx/store';
import { PreferencesActionTypes } from './preferences.actions';

export class PreferencesSetAction implements Action {
  readonly type = PreferencesActionTypes.SetPreferences;
}
