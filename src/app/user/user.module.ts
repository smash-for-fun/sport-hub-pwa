import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './pages/user.component';

import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/list/effects';
import { MatButtonModule, MatCardModule, MatListModule } from '@angular/material';
import { SharedModule } from '../_shared/shared.module';
import { UserDetailComponent } from './pages';
import { UserListComponent } from './pages';
import { LoginComponent } from './pages';

const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatListModule,
]

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,

    ...materialModules,

    StoreModule.forFeature('user', reducers),
    EffectsModule.forFeature([UserEffects])
  ],
  declarations: [UserComponent, UserDetailComponent, UserListComponent, LoginComponent]
})
export class UserModule {
}
