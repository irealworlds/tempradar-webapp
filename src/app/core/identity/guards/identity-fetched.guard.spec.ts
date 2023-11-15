import { TestBed } from "@angular/core/testing";
import { CanActivateFn } from "@angular/router";

import { identityFetchedGuard } from "app/core/identity/guards/identity-fetched.guard";

describe('identityFetchedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => identityFetchedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
