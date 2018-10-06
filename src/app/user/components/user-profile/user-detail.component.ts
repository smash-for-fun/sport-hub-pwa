import { Component, OnInit } from '@angular/core';
import * as fromUser from '../../store';
import * as fromAuth from '../../../auth/store';
import { select, Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { UserSelectAction } from '../../store/list/actions/user.select.action';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
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
