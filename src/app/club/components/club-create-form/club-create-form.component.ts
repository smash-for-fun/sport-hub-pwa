import { ClubModel } from './../../models/club.model';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-club-create-form',
  templateUrl: './club-create-form.component.html',
  styleUrls: ['./club-create-form.component.scss']
})
export class ClubCreateFormComponent {
  @Output()
  createClub = new EventEmitter<ClubModel>();

  createClubForm = new FormGroup({
    name: new FormControl('', [Validators.minLength(3), Validators.required]),
    abbreviation: new FormControl('')
  });

  onSubmit() {
    this.createClub.emit(Object.assign(new ClubModel(), this.createClubForm.value));
  }
}
