import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '@app/app.state';
import { AuthState, loginSelector } from '@app/auth';
import { selectCurrentUser, UserListState, UserSelectAction } from '@app/user/store';
import { environment } from '@env/environment';
import { select, Store } from '@ngrx/store';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user$ = this.store.pipe(select(selectCurrentUser));
  auth$ = this.store.pipe(select(loginSelector));

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        filter(r => r.has('id')),
        map(param => this.store.dispatch(new UserSelectAction({ uid: param.get('id') })))
      )
      .subscribe();
  }

  sendTestMail() {
    this.http.get(`${environment.api}/testmail`).subscribe(
      success => {
        console.log(success);
      },
      error => {
        console.error(error);
      }
    );
  }
}
