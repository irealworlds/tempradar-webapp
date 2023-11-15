import { TestBed } from "@angular/core/testing";
import { CanActivateFn } from "@angular/router";

import { withoutAuthenticationSessionGuard } from "app/core/identity/guards/without-authentication-session.guard";

describe('withoutAuthenticationSessionGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => withoutAuthenticationSessionGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
