import {
  ClubAddedAction,
  ClubCreateAction,
  ClubCreateFailedAction,
  ClubCreateSuccessAction,
  ClubDeleteAction,
  ClubDeleteFailedAction,
  ClubDeleteSuccessAction,
  ClubModifiedAction,
  ClubQueryAction,
  ClubRemovedAction,
  ClubUpdateAction,
  ClubUpdateFailedAction,
  ClubUpdateSuccessAction,
  ClubSelectSuccessAction,
  ClubSelectAction
} from '../actions';


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
  | ClubQueryAction
  | ClubAddedAction
  | ClubModifiedAction
  | ClubRemovedAction
  | ClubUpdateAction
  | ClubUpdateSuccessAction
  | ClubUpdateFailedAction
  | ClubCreateAction
  | ClubCreateSuccessAction
  | ClubCreateFailedAction
  | ClubDeleteAction
  | ClubDeleteSuccessAction
  | ClubDeleteFailedAction
  | ClubSelectAction
  | ClubSelectSuccessAction;
