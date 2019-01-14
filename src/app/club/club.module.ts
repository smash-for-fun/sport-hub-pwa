import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material';
import { authReducers } from '@app/auth';
import { SharedModule } from '@app/_shared';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ClubRoutingModule } from './club-routing.module';
import { ClubComponent, ClubDetailComponent } from './pages';
import { ClubEffects } from './store';

const materialModules = [MatListModule];

@NgModule({
  imports: [
    CommonModule,
    ClubRoutingModule,
    SharedModule,

    ...materialModules,

    StoreModule.forFeature('club', authReducers),
    EffectsModule.forFeature([ClubEffects])
  ],
  declarations: [ClubComponent, ClubDetailComponent]
})
export class ClubModule {}
