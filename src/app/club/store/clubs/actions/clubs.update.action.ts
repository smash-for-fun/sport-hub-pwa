import { ClubModel } from './../../../models/club.model';
import { Action } from '@ngrx/store';
import { ClubActionTypes } from './clubs.actions';

export class ClubUpdateAction implements Action {
  readonly type = ClubActionTypes.UPDATE;

  constructor(
    public uid: string,
    public changes: Partial<ClubModel>) {

  }
}
