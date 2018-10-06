import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './components/user.component';

import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/list/effects';
import { MatButtonModule, MatCardModule, MatListModule } from '@angular/material';
import { SharedModule } from '../_shared/shared.module';
import { UserDetailComponent } from './components/user-profile/user-detail.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,

    MatButtonModule,
    MatCardModule,
    MatListModule,

    StoreModule.forFeature('user', reducers),
    EffectsModule.forFeature([UserEffects])
  ],
  declarations: [UserComponent, UserDetailComponent, UserListComponent, LoginComponent]
})
export class UserModule {
}
