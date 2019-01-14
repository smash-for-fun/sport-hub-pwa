import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestingModule } from './../../../../../testing/utils';
import { ShellHeaderComponent } from './shell-header.component';

describe('ShellHeaderComponent', () => {
  let component: ShellHeaderComponent;
  let fixture: ComponentFixture<ShellHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      providers: [ShellHeaderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
