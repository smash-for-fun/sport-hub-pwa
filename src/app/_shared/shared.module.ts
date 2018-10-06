import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule, MatMenuModule } from '@angular/material';
import { ShellComponent } from './components/shell/shell.component';
import { ShellContentComponent } from './components/shell/shell-content/shell-content.component';
import { ShellSidebarComponent } from './components/shell/shell-sidebar/shell-sidebar.component';
import { ShellHeaderComponent } from './components/shell/shell-header/shell-header.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,

    StoreModule.forFeature('_shared', reducers)
  ],
  declarations: [ShellComponent, ShellContentComponent, ShellSidebarComponent, ShellHeaderComponent],
  exports: [ShellComponent, ShellContentComponent, ShellSidebarComponent, ShellHeaderComponent]
})
export class SharedModule {
}
