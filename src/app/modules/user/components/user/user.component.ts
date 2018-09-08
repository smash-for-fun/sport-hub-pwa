import { Component } from '@angular/core';
import { User } from '../../models/user';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';


import * as fromBase from '../../store/base';
import { UserCreateAction, UserDeleteAction, UserQueryAction, UserUpdateAction } from '../../store/base/actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  users: Observable<User[]>;

  constructor(private userStore: Store<fromBase.BaseState>) {
    this.users = this.userStore.pipe(select(fromBase.selectAll));
    this.userStore.dispatch(new UserQueryAction());
  }

  createUser() {
    this.userStore.dispatch(new UserCreateAction(new User()));
  }

  updateUser(id: string, age: number) {
    this.userStore.dispatch(new UserUpdateAction(id, {age}));
  }

  deleteUser(id: string) {
    this.userStore.dispatch(new UserDeleteAction(id));
  }

}
