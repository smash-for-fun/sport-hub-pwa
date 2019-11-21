import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'user', loadChildren: () => import('@app/user').then(m => m.UserModule) },
  { path: 'club', loadChildren: () => import('@app/club').then(m => m.ClubModule) },
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes/*, { useHash: true}*/)]
})
export class AppRoutingModule { }
