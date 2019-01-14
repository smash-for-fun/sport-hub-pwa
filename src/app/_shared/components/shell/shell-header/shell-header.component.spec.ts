import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppState } from '@app/app.state';
import { LoginState } from '@app/auth';
import { Store } from '@ngrx/store';
import { MockStore, TestingModule } from '@testing/utils';
import { ShellHeaderComponent } from './shell-header.component';

describe('ShellHeaderComponent', () => {
  let component: ShellHeaderComponent;
  let fixture: ComponentFixture<ShellHeaderComponent>;

  let store: MockStore<AppState>;

  const loginState: LoginState = {
    loggedIn: false,
    user: null
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [ShellHeaderComponent]
    }).compileComponents();

    store = TestBed.get(Store);
    store.setState({ auth: { login: loginState } } as AppState);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
