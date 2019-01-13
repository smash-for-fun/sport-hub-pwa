import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { MockStore, TestingModule } from 'src/testing/utils';
import * as fromAuth from '../../../auth/store';
import * as fromUser from '../../store';
import { UserDetailComponent } from './user-detail.component';



class UserStore extends MockStore<fromUser.UserState> {}
class AuthStore extends MockStore<fromAuth.AuthState> {}

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule,
        StoreModule.forFeature('user', fromUser.reducers)
      ],
      declarations: [UserDetailComponent]
    }).compileComponents();
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
