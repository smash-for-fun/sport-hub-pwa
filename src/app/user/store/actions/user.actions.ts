import { UserAddedAction } from './user.added.action';
import { UserModifiedAction } from './user.modified.action';
import { UserRemovedAction } from './user.removed.action';
import { UserQueryAction } from './user.query.action';
import { UserUpdateAction } from './user.update.action';
import { UserUpdateSuccessAction } from './user.update-success.action';
import { UserCreateAction } from './user.create.action';
import { UserUpdateFailedAction } from './user.update-failed.action';
import { UserCreateSuccessAction } from './user.create-success.action';
import { UserCreateFailedAction } from './user.create-failed.action';

export enum UserActionTypes {
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
}

export type UserActions =
  UserQueryAction |
  UserAddedAction |
  UserModifiedAction |
  UserRemovedAction |
  UserUpdateAction |
  UserUpdateSuccessAction |
  UserUpdateFailedAction |
  UserCreateAction |
  UserCreateSuccessAction |
  UserCreateFailedAction
  ;
