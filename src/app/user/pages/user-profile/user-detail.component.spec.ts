import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppState } from '@app/app.state';
import { UserDetailComponent } from '@app/user';
import { UserState } from '@app/user/store';
import { Store } from '@ngrx/store';
import { MockStore, TestingModule } from '@testing/utils';
import { AuthState } from '@app/auth';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  let store: MockStore<AppState>;

  const authState: AuthState = {
    login: { loggedIn: false, user: null }
  };
  const userState: UserState = {
    list: {
      selectedUser: null,
      entities: null,
      ids: null
    },
    preferences: null
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [UserDetailComponent]
    }).compileComponents();

    store = TestBed.get(Store);
    store.setState({ auth: authState, user: userState } as AppState);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
