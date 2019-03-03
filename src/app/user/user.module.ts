import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatListModule } from '@angular/material';
import { SharedModule } from '@app/_shared';
import { LoginComponent, UserComponent, UserDetailComponent, UserListComponent } from './pages';
import { UserStoreModule } from './store/user-store.module';
import { UserRoutingModule } from './user-routing.module';

const materialModules = [MatButtonModule, MatCardModule, MatListModule];

@NgModule({
  imports: [CommonModule, SharedModule, UserRoutingModule, UserStoreModule, ...materialModules],
  declarations: [UserComponent, UserDetailComponent, UserListComponent, LoginComponent]
})
export class UserModule {}
