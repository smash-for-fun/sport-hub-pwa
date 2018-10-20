import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubComponent, ClubDetailComponent, ClubListComponent } from './pages';
import { ClubCreateComponent } from './pages/club-create/club-create.component';

const routes: Routes = [
    {
      path: '', component: ClubComponent, children: [
        { path: '', component: ClubListComponent },
        { path: 'create', component: ClubCreateComponent },
        { path: ':id', component: ClubDetailComponent },
      ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class ClubRoutingModule {}
