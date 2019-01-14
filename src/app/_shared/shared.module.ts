import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { sharedReducers } from './store';
import {
  ShellComponent,
  ShellContentComponent,
  ShellSidebarComponent,
  ShellHeaderComponent
} from './components';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,

    StoreModule.forFeature('_shared', sharedReducers)
  ],
  declarations: [
    ShellComponent,
    ShellContentComponent,
    ShellSidebarComponent,
    ShellHeaderComponent
  ],
  exports: [ShellComponent, ShellContentComponent, ShellSidebarComponent, ShellHeaderComponent]
})
export class SharedModule {}
