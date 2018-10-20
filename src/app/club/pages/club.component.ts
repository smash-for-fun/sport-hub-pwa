import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss']
})
export class ClubComponent {

  constructor(private router: Router) {
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }
}
