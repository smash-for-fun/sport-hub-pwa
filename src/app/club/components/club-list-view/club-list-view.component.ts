import { Component, Input } from '@angular/core';

import { ClubModel } from './../../models/club.model';

@Component({
  selector: 'app-club-list-view',
  templateUrl: './club-list-view.component.html',
  styleUrls: ['./club-list-view.component.scss']
})
export class ClubListViewComponent {
  @Input()
  club: ClubModel;
}
