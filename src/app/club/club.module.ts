import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule
} from '@angular/material';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../_shared/shared.module';
import { ClubRoutingModule } from './club-routing.module';
import { ClubCreateFormComponent, ClubListViewComponent } from './components';
import { ClubCreateComponent, ClubDetailComponent, ClubListComponent } from './pages';
import { ClubComponent } from './pages/club.component';
import { ClubEffects, reducers } from './store';

const materialModules = [
  MatButtonModule,
  MatListModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatCardModule
];

@NgModule({
  imports: [
    CommonModule,
    ClubRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,

    ...materialModules,

    StoreModule.forFeature('club', reducers),
    EffectsModule.forFeature([ClubEffects])
  ],
  declarations: [
    ClubComponent,
    ClubDetailComponent,
    ClubListViewComponent,
    ClubListComponent,
    ClubCreateComponent,
    ClubCreateFormComponent
  ]
})
export class ClubModule {}
