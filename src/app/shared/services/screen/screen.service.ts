import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SetScreen } from '../../store/screen/actions/screen.set.action';
import * as fromScreen from '../../store/screen/reducers/screen.reducer';


@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  mobile$ = this.screenStore.pipe(select((state: any) => state.screen.mobile));
  tablet$ = this.screenStore.pipe(select((state: any) => state.screen.tablet));
  desktop$ = this.screenStore.pipe(select((state: any) => state.screen.desktop));

  constructor(private screenStore: Store<fromScreen.ScreenState>) {
  }

  setWindowWidth(windowWidth: number): void {
    this.screenStore.dispatch(new SetScreen(windowWidth));
  }
}
