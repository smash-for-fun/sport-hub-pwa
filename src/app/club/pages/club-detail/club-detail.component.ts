import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UserListState, UserSelectAction } from '@app/user';
import { AppState } from '@app/app.state';

@Component({
  selector: 'app-club-detail',
  templateUrl: './club-detail.component.html',
  styleUrls: ['./club-detail.component.scss']
})
export class ClubDetailComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.paramMap
      .pipe(
        filter(r => r.has('id')),
        map(param => this.store.dispatch(new UserSelectAction({ uid: param.get('id') })))
      )
      .subscribe();
  }
}
