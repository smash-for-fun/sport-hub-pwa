import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SetScreen } from '../../store/screen/actions';
import * as fromShared from '../../store';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  mobile$ = this.screenStore.pipe(select(fromShared.screenSelector), map(screen => screen.mobile));
  tablet$ = this.screenStore.pipe(select(fromShared.screenSelector), map(screen => screen.tablet));
  desktop$ = this.screenStore.pipe(select(fromShared.screenSelector), map(screen => screen.tablet));

  constructor(private screenStore: Store<fromShared.ScreenState>) {
  }

  setWindowWidth(windowWidth: number): void {
    this.screenStore.dispatch(new SetScreen(windowWidth));
  }
}
