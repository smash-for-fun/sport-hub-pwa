import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { PreferencesEffects } from './preferences.effects';



describe('PreferencesEffects', () => {
  // tslint:disable-next-line:prefer-const
  let actions$: Observable<any>;
  let effects: PreferencesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PreferencesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(PreferencesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
