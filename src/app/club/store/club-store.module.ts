import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { clubReducers } from './club.store';
import { ClubEffects } from './clubs/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    StoreModule.forFeature('club', clubReducers),
    EffectsModule.forFeature([ClubEffects])
  ]
})
export class ClubStoreModule {}
