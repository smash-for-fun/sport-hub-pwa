import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-profile/user-detail.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '', component: UserComponent, children: [
      { path: '', component: UserListComponent },
      { path: ':id', component: UserDetailComponent },
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
