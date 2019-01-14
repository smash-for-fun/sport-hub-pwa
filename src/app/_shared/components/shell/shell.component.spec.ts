import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppState } from '@app/app.state';
import { ScreenState, SharedState } from '@app/_shared/store';
import { Store } from '@ngrx/store';
import { MockStore, TestingModule } from '@testing/utils';
import { ShellComponent } from './shell.component';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  let store: MockStore<AppState>;

  const screenState: ScreenState = {
    desktop: true,
    mobile: false,
    tablet: false
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [ShellComponent]
    }).compileComponents();

    store = TestBed.get(Store);
    store.setState({ _shared: { screen: screenState } } as AppState);
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
