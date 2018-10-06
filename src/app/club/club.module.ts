import { NgModule } from "@angular/core";
import { ClubDetailComponent } from "./components/club-detail/club-detail.component";
import { ClubComponent } from "./components/club.component";
import { CommonModule } from "@angular/common";
import { ClubRoutingModule } from "./club-routing.module";
import { SharedModule } from "../_shared/shared.module";
import { StoreModule } from "@ngrx/store";
import { reducers } from "src/app/auth/store/auth.store";
import { EffectsModule } from "@ngrx/effects";
import { ClubEffects } from "./store";

@NgModule({
    imports: [
        CommonModule,
        ClubRoutingModule,
        SharedModule,


        StoreModule.forFeature('club', reducers),
        EffectsModule.forFeature([ClubEffects])
    ],
    declarations: [ClubComponent, ClubDetailComponent]
})
export class ClubModule {

}