import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { sharedReducers } from './shared.store';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature('_shared', sharedReducers)]
})
export class SharedStoreModule {}
