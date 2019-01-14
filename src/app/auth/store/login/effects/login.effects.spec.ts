import { TestBed } from '@angular/core/testing';
import { AppState } from '@app/app.state';
import { UserState } from '@app/user';
import { AuthService } from '@app/auth';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store } from '@ngrx/store';
import { MockStore } from '@testing/utils';
import { Observable, of, from } from 'rxjs';
import { LoginEffects } from './login.effects';

xdescribe('LoginEffects', () => {
  // tslint:disable-next-line:prefer-const
  let actions$: Observable<any>;
  let effects: LoginEffects;

  let store: MockStore<AppState>;

  const userState: UserState = {
    list: {
      selectedUser: null,
      entities: null,
      ids: null
    },
    preferences: null
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoginEffects,
        provideMockActions(() => actions$),
        { provide: AuthService, useValue: {} as any }
      ]
    });

    effects = TestBed.get(LoginEffects);

    store = TestBed.get(Store);
    store.setState({ user: userState } as AppState);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
