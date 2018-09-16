import * as fromLogin from './login';
import { ActionReducerMap, createFeatureSelector, createSelector, select, Store } from '@ngrx/store';
import * as fromAuth from './index';
import { Injectable } from '@angular/core';

export interface AuthState {
  login: fromLogin.LoginState;
}

export const reducers: ActionReducerMap<AuthState> = {
  login: fromLogin.reducer
};





const getAuthState = createFeatureSelector<AuthState>('auth');
export const loginSelector = createSelector(getAuthState, state => state.login);
