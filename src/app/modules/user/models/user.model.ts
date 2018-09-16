export class UserModel {
  public age = 0;

  public updatedAt: Date;
  public createdAt: Date;

  public isAdmin = false;

  public uid: string;
  public email: string;
  public photoURL?: string;
  public displayName?: string;
  public favoriteColor?: string;
}
