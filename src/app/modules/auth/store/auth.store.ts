import * as fromLogin from './login';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface AuthState {
  login: fromLogin.LoginState;
}

export const reducers: ActionReducerMap<AuthState> = {
  login: fromLogin.reducer
};


const getAuthState = createFeatureSelector<AuthState>('auth');
export const loginSelector = createSelector(getAuthState, state => state.login);
