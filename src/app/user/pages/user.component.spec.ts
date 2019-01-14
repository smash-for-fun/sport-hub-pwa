import { AuthState } from './../../auth/store/login/models/auth.state.model';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatListModule } from '@angular/material';
import { AppState } from '@app/app.state';
import {
  ScreenState,
  ShellComponent,
  ShellContentComponent,
  ShellHeaderComponent,
  ShellSidebarComponent
} from '@app/_shared';
import { Store } from '@ngrx/store';
import { MockStore, TestingModule } from '@testing/utils';
import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  let store: MockStore<AppState>;

  const screenState: ScreenState = {
    desktop: true,
    mobile: false,
    tablet: false
  };

  const authState: AuthState = {
    login: {
      loggedIn: false,
      user: null
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule, MatListModule],
      declarations: [
        UserComponent,
        ShellComponent,
        ShellHeaderComponent,
        ShellSidebarComponent,
        ShellContentComponent
      ]
    }).compileComponents();

    store = TestBed.get(Store);
    store.setState({ _shared: { screen: screenState }, auth: authState } as AppState);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
