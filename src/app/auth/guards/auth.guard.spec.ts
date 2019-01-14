import { inject, TestBed } from '@angular/core/testing';
import { TestingModule } from '@testing/utils';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      providers: [AuthGuard]
    }).compileComponents();
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
