import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material';
import { SharedModule } from '@app/_shared';
import { ClubRoutingModule } from './club-routing.module';
import { ClubComponent, ClubDetailComponent } from './pages';
import { ClubStoreModule } from './store/club-store.module';

const materialModules = [MatListModule];

@NgModule({
  imports: [CommonModule, SharedModule, ClubRoutingModule, ClubStoreModule, ...materialModules],
  declarations: [ClubComponent, ClubDetailComponent]
})
export class ClubModule {}
