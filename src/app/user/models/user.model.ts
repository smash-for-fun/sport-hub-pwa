import { FirebaseObject } from '../../_shared';

export class UserModel implements FirebaseObject {

  age = 0;

  isAdmin = false;

  uid: string;
  email: string;
  photoUrl?: string;
  displayName?: string;
  favoriteColor?: string;

  updatedAt: Date;
  createdAt: Date;

  providers: { providerId: string; uid: string }[];
}
