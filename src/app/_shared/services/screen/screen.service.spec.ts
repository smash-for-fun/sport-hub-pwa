import { inject, TestBed } from '@angular/core/testing';
import { TestingModule, MockStore } from '@testing/utils';
import { ScreenService } from './screen.service';
import { AppState } from '@app/app.state';
import { ScreenState } from '@app/_shared';
import { Store } from '@ngrx/store';

describe('ScreenService', () => {
  let store: MockStore<AppState>;

  const screenState: ScreenState = {
    desktop: true,
    mobile: false,
    tablet: false
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      providers: [ScreenService]
    }).compileComponents();

    store = TestBed.get(Store);
    store.setState({ _shared: { screen: screenState } } as AppState);
  });

  it('should be created', inject([ScreenService], (service: ScreenService) => {
    expect(service).toBeTruthy();
  }));
});
