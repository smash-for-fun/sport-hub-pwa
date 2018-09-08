import { Action } from '@ngrx/store';
import { ScreenActionTypes } from './screen.actions';
import { ScreenState } from '../reducers';

const MOBILE_MAX_WIDTH = 425;  // Adjust as needed
const TABLET_MAX_WIDTH = 1024; // Adjust as needed

export class SetScreen implements Action {
  readonly type = ScreenActionTypes.SetScreen;

  payload: Readonly<ScreenState>;

  public constructor(width: number) {
    const mobile = width <= MOBILE_MAX_WIDTH;
    const tablet = width <= TABLET_MAX_WIDTH && width > MOBILE_MAX_WIDTH;
    this.payload = {
      mobile,
      tablet,
      desktop: !mobile && !tablet,
    };
  }
}
