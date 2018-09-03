import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { ShellComponent } from './components/shell/shell.component';
import { ShellContentComponent } from './components/shell/shell-content/shell-content.component';
import { ShellSidebarComponent } from './components/shell/shell-sidebar/shell-sidebar.component';
import { ShellHeaderComponent } from './components/shell/shell-header/shell-header.component';
import { StoreModule } from '@ngrx/store';
import { screenReducer } from './store/screen/reducers/screen.reducer';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,

    StoreModule.forFeature('screen', screenReducer),
  ],
  declarations: [ShellComponent, ShellContentComponent, ShellSidebarComponent, ShellHeaderComponent],
  exports: [ShellComponent, ShellContentComponent, ShellSidebarComponent, ShellHeaderComponent]
})
export class SharedModule {
}
