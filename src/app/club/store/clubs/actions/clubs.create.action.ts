import { ClubModel } from './../../../models/club.model';
import { Action } from '@ngrx/store';
import { ClubActionTypes } from './clubs.actions';

export class ClubCreateAction implements Action {
  readonly type = ClubActionTypes.CREATE;

  constructor(public payload: ClubModel) {

  }
}
