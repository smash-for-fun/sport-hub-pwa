import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'user', loadChildren: 'src/app/user/user.module#UserModule' },
  { path: 'club', loadChildren: 'src/app/club/club.module#ClubModule' },
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes/*, { useHash: true}*/)]
})
export class AppRoutingModule { }
