import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ScreenService } from '@app/_shared/services';

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
