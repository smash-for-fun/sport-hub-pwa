import { Action } from '@ngrx/store';
import { ClubActionTypes } from './clubs.actions';

export class ClubQueryAction implements Action {
  readonly type = ClubActionTypes.QUERY;

  query: string;
  constructor(payload: { query: string }) {
    this.query = payload.query;
  }
}
