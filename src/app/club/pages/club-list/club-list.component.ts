import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ClubModel } from '../../models';
import * as fromBase from '../../store';
import { ClubQueryAction } from '../../store';

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.scss']
})
export class ClubListComponent {
  clubs: Observable<ClubModel[]> = this.clubStore.pipe(select(fromBase.selectAllClubs));
  search: any;

  constructor(private clubStore: Store<fromBase.ClubListState>) {}

  searchClub() {
    this.clubStore.dispatch(new ClubQueryAction({query: this.search}));
  }

}
