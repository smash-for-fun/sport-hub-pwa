import { AuthModule } from './auth.module';

describe('AuthModule', () => {
  let authModule: AuthModule;

  beforeEach(() => {
    authModule = new AuthModule(null);
  });

  it('should create an instance', () => {
    expect(authModule).toBeTruthy();
  });
});
