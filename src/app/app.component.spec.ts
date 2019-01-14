import { async, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from '@app/app.component';
import { ScreenState } from '@app/_shared';
import { Store } from '@ngrx/store';
import { MockStore, TestingModule } from '@testing/utils';
import { AppState } from './app.state';

describe('AppComponent', () => {
  let store: MockStore<AppState>;

  const screenState: ScreenState = {
    desktop: true,
    mobile: false,
    tablet: false
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        MatSnackBarModule,
        TestingModule,
        ServiceWorkerModule.register('', { enabled: false })
      ]
    }).compileComponents();

    store = TestBed.get(Store);
    store.setState({ _shared: { screen: screenState } } as AppState);
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

  function createState(screenstate: ScreenState) {
    return {
      ...screenstate
    } as ScreenState;
  }
});
