import { ClubState } from '@app/club';
import { AuthState } from '@app/auth';
import { SharedState } from '@app/_shared';
import { UserState } from '@app/user';

export interface AppState {
  _shared?: SharedState;
  auth?: AuthState;
  club?: ClubState;
  user?: UserState;
}
