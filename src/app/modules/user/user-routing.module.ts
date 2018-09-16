import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '', component: UserComponent, children: [
      { path: '', component: UserListComponent },
      { path: ':id', component: UserProfileComponent },
      { path: 'login', component: LoginComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
