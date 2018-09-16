import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from './services';
import { AuthGuard } from './guards';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './store/login/effects/login.effects';

@NgModule({
  imports: [
    AngularFireAuthModule,
    AngularFirestoreModule,

    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([LoginEffects])
  ],
  providers: [AuthService, AuthGuard]
})
export class AuthModule {
}
