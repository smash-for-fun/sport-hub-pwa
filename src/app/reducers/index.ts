import { ActionReducerMap} from '@ngrx/store';
import {userReducer} from '../user/store/reducers/user.reducer';
import { screenReducer } from '../shared/store/screen/reducers/screen.reducer';

export const reducers: ActionReducerMap<any> = {
  user: userReducer,
  screen: screenReducer
};
