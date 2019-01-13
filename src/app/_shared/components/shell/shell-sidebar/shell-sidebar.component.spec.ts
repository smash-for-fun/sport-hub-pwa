import { TestingModule } from './../../../../../testing/utils';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellSidebarComponent } from './shell-sidebar.component';

describe('ShellSidebarComponent', () => {
  let component: ShellSidebarComponent;
  let fixture: ComponentFixture<ShellSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
