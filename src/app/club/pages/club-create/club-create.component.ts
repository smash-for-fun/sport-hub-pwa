import { ClubModel } from './../../models/club.model';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromBase from '../../store';
import { ClubCreateAction } from '../../store';

@Component({
  selector: 'app-club-create',
  templateUrl: './club-create.component.html',
  styleUrls: ['./club-create.component.scss']
})
export class ClubCreateComponent {
  constructor(private clubStore: Store<fromBase.ClubListState>) {}

  createClub(club: ClubModel) {
    this.clubStore.dispatch(new ClubCreateAction(club));
  }
}
