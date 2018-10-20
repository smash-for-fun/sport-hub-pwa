import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubListViewComponent } from './club-list-view.component';

describe('ClubListViewComponent', () => {
  let component: ClubListViewComponent;
  let fixture: ComponentFixture<ClubListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
