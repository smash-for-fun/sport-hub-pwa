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

  constructor(private userStore: Store<fromBase.ListState>) {
    this.userStore.dispatch(new UserQueryAction());
  }

  updateUser(id: string, age: number) {
    this.userStore.dispatch(new UserUpdateAction(id, { age }));
  }
}
