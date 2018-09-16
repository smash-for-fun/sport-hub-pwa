export class UserModel {
  public age = 0;

  public updatedAt: Date;
  public createdAt: Date;

  public isAdmin = false;

  public uid: string;
  public email: string;
  public photoUrl?: string;
  public displayName?: string;
  public favoriteColor?: string;

  public providers: {providerId: string, uid: string}[];
}
