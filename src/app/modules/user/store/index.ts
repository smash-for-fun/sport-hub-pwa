export * from './base';
import * as fromBase from './base';

import { ActionReducerMap } from '@ngrx/store';

export interface UserState {
  base: fromBase.BaseState;
}

export const reducers: ActionReducerMap<UserState> = {
  base: fromBase.userReducer
};
