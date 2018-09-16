import { Component, OnInit } from '@angular/core';
import * as fromUser from '../../../user/store';
import * as fromAuth from '../../../auth/store';
import { select, Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { filter, map, tap } from 'rxjs/operators';
import { UserSelectAction } from '../../store/list/actions/user.select.action';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user$ = this.userStore.pipe(select(fromUser.selectCurrentUser));
  auth$ = this.authStore.pipe(select(fromAuth.loginSelector));

  constructor(
    private userStore: Store<fromUser.UserState>,
    private authStore: Store<fromAuth.AuthState>,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.paramMap.pipe(
      filter(r => r.has('id')),
      map(param => this.userStore.dispatch(new UserSelectAction({ uid: param.get('id') })))
    ).subscribe();
  }
}
