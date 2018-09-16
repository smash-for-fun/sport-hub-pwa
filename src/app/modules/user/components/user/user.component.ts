import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  constructor(private router: Router) {
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }
}
