import { ActionReducerMap } from '@ngrx/store';
import * as fromScreen from './screen';

export * from './screen';


export interface SharedState {
  screen: fromScreen.ScreenState;
}

export const reducers: ActionReducerMap<SharedState> = {
  screen: fromScreen.screenReducer
};
