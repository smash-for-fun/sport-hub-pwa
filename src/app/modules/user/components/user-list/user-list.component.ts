import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { select, Store } from '@ngrx/store';
import * as fromBase from '../../store/base';
import { UserCreateAction, UserDeleteAction, UserQueryAction, UserUpdateAction } from '../../store/base';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users: Observable<User[]>;

  constructor(private userStore: Store<fromBase.BaseState>) {
    this.users = this.userStore.pipe(select(fromBase.selectAll));
    this.userStore.dispatch(new UserQueryAction());
  }

  createUser() {
    this.userStore.dispatch(new UserCreateAction(new User()));
  }

  updateUser(id: string, age: number) {
    this.userStore.dispatch(new UserUpdateAction(id, { age }));
  }

  deleteUser(id: string) {
    this.userStore.dispatch(new UserDeleteAction(id));
  }

}
