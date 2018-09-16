import { Component, OnInit } from '@angular/core';
import * as fromUser from '../../../user/store';
import * as fromAuth from '../../../auth/store';
import { select, Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { UserSelectAction } from '../../store/list/actions/user.select.action';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

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
    private route: ActivatedRoute,
    private http: HttpClient
  ) {

  }

  ngOnInit() {
    this.route.paramMap.pipe(
      filter(r => r.has('id')),
      map(param => this.userStore.dispatch(new UserSelectAction({ uid: param.get('id') })))
    ).subscribe();
  }


  sendTestMail() {
    this.http.get(`${environment.api }/testmail`).subscribe(r => {
      console.log(r);
    }, e => {
      console.error(e);
    });
  }

}
