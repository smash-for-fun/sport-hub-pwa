import { NgModule } from "@angular/core";
import { ClubDetailComponent } from "./pages/club-detail/club-detail.component";
import { ClubComponent } from "./pages/club.component";
import { CommonModule } from "@angular/common";
import { ClubRoutingModule } from "./club-routing.module";
import { SharedModule } from "../_shared/shared.module";
import { StoreModule } from "@ngrx/store";
import { reducers } from "src/app/auth/store/auth.store";
import { EffectsModule } from "@ngrx/effects";
import { ClubEffects } from "./store";
import { MatListModule } from "@angular/material";



const materialModules = [
    MatListModule,
]

@NgModule({
    imports: [
        CommonModule,
        ClubRoutingModule,
        SharedModule,

        ...materialModules,

        StoreModule.forFeature('club', reducers),
        EffectsModule.forFeature([ClubEffects])
    ],
    declarations: [ClubComponent, ClubDetailComponent]
})
export class ClubModule {

}