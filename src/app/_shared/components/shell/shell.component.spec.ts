import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestingModule } from 'src/testing/utils';
import { ShellComponent } from './shell.component';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from '../../store';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      providers: [ShellComponent, StoreModule.forFeature('auth', fromAuth.reducers)]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
