import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { select, Store } from '@ngrx/store';
import * as fromBase from '../../store';
import { UserQueryAction, UserUpdateAction } from '../../store/list';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users: Observable<UserModel[]> = this.userStore.pipe(select(fromBase.selectAllUsers));
  search: string;

  constructor(private userStore: Store<fromBase.ListState>) {}

  searchUser() {
    console.log('Hello', this.search);
    this.userStore.dispatch(new UserQueryAction({ query: this.search }));
  }

  updateUser(update: { uuid: string; age: number }) {
    this.userStore.dispatch(new UserUpdateAction(update.uuid, { age: update.age }));
  }
}
