import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'user', loadChildren: '@app/user#UserModule' },
  { path: 'club', loadChildren: '@app/club#ClubModule' },
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes/*, { useHash: true}*/)]
})
export class AppRoutingModule { }
