import { ScreenActions, ScreenActionTypes } from '../actions';

export interface ScreenState {
  mobile: boolean;
  tablet: boolean;
  desktop: boolean;
}

export const initialState: ScreenState = {
  mobile: false,
  tablet: false,
  desktop: false,
};

export function screenReducer(state = initialState, action: ScreenActions): ScreenState {
  switch (action.type) {

    case ScreenActionTypes.SetScreen:
      return {
        ...action.payload
      };


    default:
      return state;
  }
}

