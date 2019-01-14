import { Injectable } from '@angular/core';
import { screenSelector, SetScreen } from '@app/_shared/store';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { AppState } from '@app/app.state';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  mobile$ = this.screenStore.pipe(
    select(screenSelector),
    map(screen => screen.mobile)
  );
  tablet$ = this.screenStore.pipe(
    select(screenSelector),
    map(screen => screen.tablet)
  );
  desktop$ = this.screenStore.pipe(
    select(screenSelector),
    map(screen => screen.tablet)
  );

  constructor(private screenStore: Store<AppState>) {}

  setWindowWidth(windowWidth: number): void {
    this.screenStore.dispatch(new SetScreen(windowWidth));
  }
}
