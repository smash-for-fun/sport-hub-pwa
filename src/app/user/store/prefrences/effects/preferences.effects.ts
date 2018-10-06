import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { PreferencesActionTypes } from '../actions';

@Injectable()
export class PreferencesEffects {

  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(PreferencesActionTypes.SetPreferences));

  constructor(private actions$: Actions) {}
}
