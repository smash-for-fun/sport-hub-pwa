import { MatCardModule } from '@angular/material';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingModule, MockStore } from '@testing/utils';
import { UserListComponent } from './user-list.component';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.state';
import { UserState } from '@app/user';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  let store: MockStore<AppState>;

  const userState: UserState = {
    list: {
      selectedUser: null,
      entities: null,
      ids: []
    },
    preferences: {
      somethingAwesome: true
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule, MatCardModule],
      declarations: [UserListComponent]
    }).compileComponents();

    store = TestBed.get(Store);
    store.setState({ user: userState } as AppState);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
