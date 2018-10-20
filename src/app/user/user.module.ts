import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule } from '@angular/material';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../_shared/shared.module';
import { UserListViewComponent } from './components/user-list-view/user-list-view.component';
import { LoginComponent, UserDetailComponent, UserListComponent } from './pages';
import { UserComponent } from './pages/user.component';
import { reducers } from './store';
import { UserEffects } from './store/list/effects';
import { UserRoutingModule } from './user-routing.module';



const materialModules = [
  MatButtonModule,
  MatListModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule
];

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    FormsModule,

    ...materialModules,

    StoreModule.forFeature('user', reducers),
    EffectsModule.forFeature([UserEffects])
  ],
  declarations: [UserComponent, UserDetailComponent, UserListComponent, LoginComponent, UserListViewComponent]
})
export class UserModule {
}
