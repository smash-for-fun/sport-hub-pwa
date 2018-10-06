import { ClubAddedAction } from './clubs.added.action';
import { ClubModifiedAction } from './clubs.modified.action';
import { ClubRemovedAction } from './clubs.removed.action';
import { ClubQueryAction } from './clubs.query.action';
import { ClubUpdateAction } from './clubs.update.action';
import { ClubUpdateSuccessAction } from './clubs.update-success.action';
import { ClubCreateAction } from './clubs.create.action';
import { ClubUpdateFailedAction } from './clubs.update-failed.action';
import { ClubCreateSuccessAction } from './clubs.create-success.action';
import { ClubCreateFailedAction } from './clubs.create-failed.action';
import { ClubDeleteAction } from './clubs.delete.action';
import { ClubDeleteSuccessAction } from './clubs.delete-success.action';
import { ClubDeleteFailedAction } from './clubs.delete-failed.action';
import { ClubSelectAction } from './clubs.select.action';
import { ClubSelectSuccessAction } from './clubs.select-success.action';

export enum ClubActionTypes {
  // Firestore actions
  ADDED = '[Club] added',
  MODIFIED = '[Club] modified',
  REMOVED = '[Club] removed',

  // App actions
  QUERY = '[Club] query clubs',
  UPDATE = '[Club] update',
  UPDATE_SUCCESS = '[Club] update success',
  UPDATE_FAILED = '[Club] update failed',
  CREATE = '[Club] create',
  CREATE_SUCCESS = '[Club] create success',
  CREATE_FAILED = '[Club] create failed',
  DELETE = '[Club] delete',
  DELETE_SUCCESS = '[Club] delete success',
  DELETE_FAILED = '[Club] delete failed',
  SELECT = '[Club] select',
  SELECT_SUCCESS = '[Club] select success'
}

export type ClubActions =
  ClubQueryAction |
  ClubAddedAction |
  ClubModifiedAction |
  ClubRemovedAction |
  ClubUpdateAction |
  ClubUpdateSuccessAction |
  ClubUpdateFailedAction |
  ClubCreateAction |
  ClubCreateSuccessAction |
  ClubCreateFailedAction |
  ClubDeleteAction |
  ClubDeleteSuccessAction |
  ClubDeleteFailedAction |
  ClubSelectAction |
  ClubSelectSuccessAction ;
