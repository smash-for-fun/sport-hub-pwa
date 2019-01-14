import { async, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material';
import { ServiceWorkerModule } from '@angular/service-worker';
import { Store } from '@ngrx/store';
import { MockStore, TestingModule, provideMockStore } from 'src/testing/utils';
import { AppComponent } from './app.component';
import { ScreenService } from './_shared';
import * as fromShared from './_shared/store';

fdescribe('AppComponent', () => {
  let store: MockStore<fromShared.ScreenState>;
  let state: fromShared.ScreenState;

  const screenState = { desktop: true, mobile: false, tablet: false };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        MatSnackBarModule,
        TestingModule,
        ServiceWorkerModule.register('', { enabled: false })
      ],
      providers: [provideMockStore()]
    }).compileComponents();
    store = TestBed.get(Store);
    state = createState(screenState);
    store.setState(state);
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Sport hub'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Sport hub');
  }));

  function createState(screenstate: fromShared.ScreenState) {
    return {
      ...screenstate
    } as fromShared.ScreenState;
  }
});
