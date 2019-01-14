import { inject, TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { provideMockStore, TestingModule } from '@testing/utils';
import { of } from 'rxjs';
import { AuthService } from './auth.service';
import { LoginState, AuthState } from '../store';

const mockAngularFireAuth: any = { authState: of(null) };

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      providers: [
        AuthService,
        { provide: AngularFireAuth, useValue: mockAngularFireAuth },
        provideMockStore()
      ]
    }).compileComponents();
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  function createState(login: LoginState) {
    return {
      login
    } as AuthState;
  }
});
