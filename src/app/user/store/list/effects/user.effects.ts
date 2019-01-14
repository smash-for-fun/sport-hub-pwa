import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {
  LoginActionTypes,
  LoginSignedInAction,
  LoginSignedInProviderAction,
  LoginSignUpAction
} from '@app/auth';
import {
  UserCreateAction,
  UserDeleteSuccessAction,
  UserListActionTypes,
  UserQueryAction,
  UserSelectSuccessAction,
  UserUpdateAction,
  UserUpdateSuccessAction
} from '../actions';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { from, Observable, of } from 'rxjs';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { UserModel } from '@app/user/models';

@Injectable()
export class UserEffects {
  location = 'users';
  @Effect()
  query$: Observable<Action> = this.actions$.pipe(
    ofType<UserQueryAction>(UserListActionTypes.QUERY),
    switchMap(action => {
      return this.afs.collection<UserModel>(this.location).stateChanges();
    }),
    mergeMap(actions => actions),
    map(action => {
      return {
        type: `[User] ${action.type}`,
        payload: {
          ...action.payload.doc.data(),
          uid: action.payload.doc.id
        }
      };
    })
  );
  // TODO: Catch errors ;)
  @Effect()
  update$: Observable<Action> = this.actions$.pipe(
    ofType<UserUpdateAction>(UserListActionTypes.UPDATE),
    switchMap(data => {
      const ref = this.afs.doc<UserModel>(`${this.location}/${data.uid}`);

      return from(ref.update(data.changes));
    }),
    // catchError( error => new UserUpdateFailedAction(error)),
    map(() => new UserUpdateSuccessAction())
  );
  // TODO: Catch errors ;)
  @Effect()
  create$: Observable<Action> = this.actions$.pipe(
    ofType<UserCreateAction>(UserListActionTypes.CREATE),
    switchMap(data => {
      return from(
        this.afs.doc(`${this.location}/${data.payload.uid}`).set({
          ...Object.assign(new UserModel(), {
            uid: data.payload.uid,
            email: data.payload.email,
            photoURL: data.payload.photoURL,
            displayName: data.payload.displayName
          })
          /*        updatedAt: this.timestamp,
                createdAt: this.timestamp*/
        })
      );
    }),
    // catchError( error => new UserUpdateFailedAction(error)),
    map(() => new UserUpdateSuccessAction())
  );
  // TODO: Catch errors ;)
  @Effect()
  delete$: Observable<Action> = this.actions$.pipe(
    ofType<UserUpdateAction>(UserListActionTypes.DELETE),
    switchMap(data => {
      const ref = this.afs.doc<UserModel>(`${this.location}/${data.uid}`);

      return from(ref.delete());
    }),
    // catchError( error => new UserUpdateFailedAction(error)),
    map(() => new UserDeleteSuccessAction())
  );
  // TODO: Catch errors ;)
  @Effect()
  select$: Observable<Action> = this.actions$.pipe(
    ofType<UserUpdateAction>(UserListActionTypes.SELECT),
    switchMap(data => {
      return this.afs.doc<UserModel>(`${this.location}/${data.uid}`).valueChanges();
    }),
    // catchError( error => new UserUpdateFailedAction(error)),
    map(user => new UserSelectSuccessAction({ user }))
  );
  @Effect()
  checkUserExists$: Observable<Action> = this.actions$.pipe(
    ofType<LoginSignedInProviderAction>(LoginActionTypes.SignedInProvider),
    switchMap(data => {
      return this.afs
        .doc<UserModel>(`${this.location}/${data.user.uid}`)
        .valueChanges()
        .pipe(
          map(r => {
            return {
              found: r != null,
              user: data.user
            };
          })
        );
    }),
    map(userCheck => {
      if (!userCheck.found) {
        return new LoginSignUpAction({ user: userCheck.user });
      } else {
        return new LoginSignedInAction({ club: userCheck.user as any });
      }
    })
  );
  @Effect()
  createUser$: Observable<Action> = this.actions$.pipe(
    ofType<LoginSignUpAction>(LoginActionTypes.SignUp),
    switchMap(data => of(new UserCreateAction(data.user)))
  );
  private const;

  constructor(private actions$: Actions, private afs: AngularFirestore) {}
}
