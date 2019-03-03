import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from './user.store';
import { UserEffects } from './list';
import { PreferencesEffects } from './prefrences';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    StoreModule.forFeature('user', userReducer),
    EffectsModule.forFeature([UserEffects, PreferencesEffects])
  ]
})
export class UserStoreModule {}
