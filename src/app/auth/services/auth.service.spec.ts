import { inject, TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { Store, StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { MockStore, TestingModule } from 'src/testing/utils';
import * as fromAuth from '../store';
import * as fromLogin from '../store/login';
import { AuthService } from './auth.service';

const mockAngularFireAuth: any = { authState: of(null) };

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      providers: [
        AuthService,
        { provide: AngularFireAuth, useValue: mockAngularFireAuth },
        StoreModule.forFeature('auth', fromAuth.reducers)

      ]
    }).compileComponents();
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  function createState(login: fromLogin.LoginState) {
    return {
      login
    } as fromAuth.AuthState;
  }
});
