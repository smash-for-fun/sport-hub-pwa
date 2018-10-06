import { Action } from '@ngrx/store';
import { ClubActionTypes } from './clubs.actions';

export class ClubSelectAction implements Action {
  readonly type = ClubActionTypes.SELECT;

  uid: string | number;

  constructor(payload: { uid: string | number }) {
    this.uid = payload.uid;
  }
}
