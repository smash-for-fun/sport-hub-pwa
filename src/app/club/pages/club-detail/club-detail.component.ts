import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { UserSelectAction } from '../../../user/store/list/actions/user.select.action';
import * as fromUser from '../../../user/store';
import * as fromAuth from '../../../auth/store';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-club-detail',
    templateUrl: './club-detail.component.html',
    styleUrls: ['./club-detail.component.scss']
  })
  export class ClubDetailComponent implements OnInit {
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
  }
