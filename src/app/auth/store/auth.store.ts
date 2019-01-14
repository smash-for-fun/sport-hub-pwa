import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './login/models';
import { loginReducer } from './login/reducers';

export const authReducers: ActionReducerMap<AuthState> = {
  login: loginReducer
};

const getAuthState = createFeatureSelector<AuthState>('auth');
export const loginSelector = createSelector(
  getAuthState,
  state => state.login
);
