import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, map } from 'rxjs/operators';
import * as fromAuth from '../../../auth/store';
import * as fromUser from '../../../user/store';
import { UserSelectAction } from '../../../user/store/list/actions/user.select.action';

@Component({
    selector: 'app-club-detail',
    templateUrl: './club-detail.component.html',
    styleUrls: ['./club-detail.component.scss']
  })
  export class ClubDetailComponent implements OnInit {
    constructor(
        private userStore: Store<fromUser.UserState>,
        private route: ActivatedRoute,
      ) {

      }
    ngOnInit() {
        this.route.paramMap.pipe(
          filter(r => r.has('id')),
          map(param => this.userStore.dispatch(new UserSelectAction({ uid: param.get('id') })))
        ).subscribe();
      }
  }
