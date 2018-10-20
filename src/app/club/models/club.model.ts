import { FirebaseObject } from '../../_shared';

export class ClubModel implements FirebaseObject {

  uid: string;
  name: string;
  abbreviation: string;
  updatedAt: Date;
  createdAt: Date;
}
