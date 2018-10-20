import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubCreateFormComponent } from './club-create-form.component';

describe('ClubCreateFormComponent', () => {
  let component: ClubCreateFormComponent;
  let fixture: ComponentFixture<ClubCreateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubCreateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
