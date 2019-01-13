import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Injectable, NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ActionsSubject, ReducerManager, StateObservable, Store, StoreModule } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MockStore<T> extends Store<T> {
  private stateSubject = new BehaviorSubject<T>({} as T);

  constructor(
    state$: StateObservable,
    actionsObserver: ActionsSubject,
    reducerManager: ReducerManager
  ) {
    super(state$, actionsObserver, reducerManager);
    this.source = this.stateSubject.asObservable();
  }

  setState(nextState: T) {
    this.stateSubject.next(nextState);
  }
}

export function provideMockStore() {
  return {
    provide: Store,
    useClass: MockStore
  };
}

@NgModule({
  imports: [
    NoopAnimationsModule,
    RouterTestingModule,
    HttpClientTestingModule,
    StoreModule.forRoot({})
  ],
  exports: [NoopAnimationsModule, RouterTestingModule]
})
export class TestingModule {
  constructor() {}
}
