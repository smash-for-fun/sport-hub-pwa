import { Component } from '@angular/core';
import { ScreenService } from '../../services/screen/screen.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {
  mobile$: Observable<boolean>;
  sidebarOpened = false;

  constructor(screenService: ScreenService) {
    this.mobile$ = screenService.mobile$;
    this.mobile$.pipe().subscribe(isMobile => {
      this.sidebarOpened = !isMobile;
    });
  }
}
