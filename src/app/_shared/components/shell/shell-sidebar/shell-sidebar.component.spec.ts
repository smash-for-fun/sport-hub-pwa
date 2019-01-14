import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestingModule } from '@testing/utils';
import { ShellSidebarComponent } from './shell-sidebar.component';

describe('ShellSidebarComponent', () => {
  let component: ShellSidebarComponent;
  let fixture: ComponentFixture<ShellSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShellSidebarComponent],
      imports: [TestingModule]
    }).compileComponents();
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
