import { TestBed } from "@angular/core/testing";
import { CanActivateFn } from "@angular/router";

import { hasAuthenticationSessionGuard } from "app/core/identity/guards/has-authentication-session.guard";

describe('hasAuthenticationSessionGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => hasAuthenticationSessionGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
