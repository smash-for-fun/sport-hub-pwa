import {
  UserAddedAction,
  UserCreateAction,
  UserCreateFailedAction,
  UserCreateSuccessAction,
  UserDeleteAction,
  UserDeleteFailedAction,
  UserDeleteSuccessAction,
  UserModifiedAction,
  UserQueryAction,
  UserRemovedAction,
  UserSelectAction,
  UserSelectSuccessAction,
  UserUpdateAction,
  UserUpdateFailedAction,
  UserUpdateSuccessAction
} from '../actions';

export enum UserListActionTypes {
  // Firestore actions
  ADDED = '[User] added',
  MODIFIED = '[User] modified',
  REMOVED = '[User] removed',

  // App actions
  QUERY = '[User] query users',
  UPDATE = '[User] update',
  UPDATE_SUCCESS = '[User] update success',
  UPDATE_FAILED = '[User] update failed',
  CREATE = '[User] create',
  CREATE_SUCCESS = '[User] create success',
  CREATE_FAILED = '[User] create failed',
  DELETE = '[User] delete',
  DELETE_SUCCESS = '[User] delete success',
  DELETE_FAILED = '[User] delete failed',
  SELECT = '[User] select',
  SELECT_SUCCESS = '[User] select success'
}

export type UserListActions =
  | UserQueryAction
  | UserAddedAction
  | UserModifiedAction
  | UserRemovedAction
  | UserUpdateAction
  | UserUpdateSuccessAction
  | UserUpdateFailedAction
  | UserCreateAction
  | UserCreateSuccessAction
  | UserCreateFailedAction
  | UserDeleteAction
  | UserDeleteSuccessAction
  | UserDeleteFailedAction
  | UserSelectAction
  | UserSelectSuccessAction;
