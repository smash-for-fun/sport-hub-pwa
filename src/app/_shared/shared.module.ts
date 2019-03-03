import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';


import {
  ShellComponent,
  ShellContentComponent,
  ShellSidebarComponent,
  ShellHeaderComponent
} from './components';
import { SharedStoreModule } from './store/shared-store.module';

@NgModule({
  imports: [
    CommonModule,

    SharedStoreModule,

    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
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
