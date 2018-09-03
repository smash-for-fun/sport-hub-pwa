import { Component, OnDestroy, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, tap } from 'rxjs/operators';
import { ScreenService } from './shared/services/screen/screen.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Sport hub';

  private resize$;

  constructor(
    updates: SwUpdate,
    snackBar: MatSnackBar,
    private screenService: ScreenService,
  ) {
    updates.available.subscribe(event => {
      updates.activateUpdate().then(() => {
        snackBar.open('New version available', 'refresh').onAction().subscribe(() => {
          document.location.reload();
        });
      });
    });
  }

  ngOnInit(): void {
    this.resize$ = fromEvent(window, 'resize')
      .pipe(
        debounceTime(200),
        map(() => window.innerWidth),
        distinctUntilChanged(),
        startWith(window.innerWidth),
        tap(width => this.screenService.setWindowWidth(width)),
      ).subscribe();
  }

  ngOnDestroy(): void {
    this.resize$.unsubscribe();
  }

}
