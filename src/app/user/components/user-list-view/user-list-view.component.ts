import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserModel } from '../../models';

@Component({
  selector: 'app-user-list-view',
  templateUrl: './user-list-view.component.html',
  styleUrls: ['./user-list-view.component.scss']
})
export class UserListViewComponent {
  @Input()
  user: UserModel;
  @Output()
  ageUpdate = new EventEmitter();

  makeOlder() {
    this.ageUpdate.emit({ user: this.user.uid, age: this.user.age + 1 });
  }

  makeYounger() {
    this.ageUpdate.emit({ user: this.user.uid, age: this.user.age - 1 });
  }
}
