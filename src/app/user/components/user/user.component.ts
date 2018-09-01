import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';


import * as fromUser from '../../store/reducers/user.reducer';
import { UserAddedAction } from '../../store/actions/user.added.action';
import { UserQueryAction } from '../../store/actions/user.query.action';
import { UserUpdateAction } from '../../store/actions/user.update.action';
import { UserCreateAction } from '../../store/actions/user.create.action';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: Observable<User[]>;

  constructor(private userStore: Store<fromUser.State>) {
    this.users = this.userStore.pipe(select(fromUser.selectAll));
    this.userStore.dispatch(new UserQueryAction())
  }

  ngOnInit() {
  }

  createUser() {

    this.userStore.dispatch(new UserCreateAction(new User()));
  }

  updateUser(id: string, age: number) {
    this.userStore.dispatch(new UserUpdateAction(id, {age}));
  }

  deleteUser(id: string) {
  }

}
