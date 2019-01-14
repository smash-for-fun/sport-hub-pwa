import { Store } from '@ngrx/store';
import { inject, TestBed } from '@angular/core/testing';
import * as fromShared from '../../store';

import { ScreenService } from './screen.service';
import { MockStore, TestingModule } from 'src/testing/utils';

class ScreenStore extends MockStore<fromShared.ScreenState> {}

describe('ScreenService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      providers: [
        ScreenService,
      ]
    }).compileComponents();
  });

  it('should be created', inject([ScreenService], (service: ScreenService) => {
    expect(service).toBeTruthy();
  }));

});
