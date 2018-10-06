import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubComponent } from './components/club.component';
import { ClubDetailComponent } from './components/club-detail/club-detail.component';

const routes: Routes = [
    {
      path: '', component: ClubComponent, children: [
        { path: '', component: ClubDetailComponent },
      ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class ClubRoutingModule {}
