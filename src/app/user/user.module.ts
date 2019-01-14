import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatListModule } from '@angular/material';
import { SharedModule } from '@app/_shared';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LoginComponent, UserComponent, UserDetailComponent, UserListComponent } from './pages';
import { PreferencesEffects, UserEffects, userReducer } from './store';
import { UserRoutingModule } from './user-routing.module';


const materialModules = [MatButtonModule, MatCardModule, MatListModule];

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,

    ...materialModules,

    StoreModule.forFeature('user', userReducer),
    EffectsModule.forFeature([UserEffects, PreferencesEffects])
  ],
  declarations: [UserComponent, UserDetailComponent, UserListComponent, LoginComponent]
})
export class UserModule {}
