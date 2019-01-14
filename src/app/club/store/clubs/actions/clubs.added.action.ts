import { ClubModel } from './../../../models/club.model';
import { Action } from '@ngrx/store';
import { ClubActionTypes } from './clubs.actions';


export class ClubAddedAction implements Action {
  readonly type = ClubActionTypes.ADDED;

  constructor(public payload: ClubModel) {

  }
}
