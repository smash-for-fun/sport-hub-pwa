import { ActionReducerMap} from '@ngrx/store';
import {userReducer} from '../user/store/reducers/user.reducer';

export const reducers: ActionReducerMap<any> = {
  user: userReducer
};
