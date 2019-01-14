import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubComponent, ClubDetailComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: ClubComponent,
    children: [{ path: '', component: ClubDetailComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClubRoutingModule {}
