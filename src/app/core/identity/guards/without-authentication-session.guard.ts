import { CanActivateFn } from "@angular/router";
import { inject } from "@angular/core";
import { IdentityService } from "@tempradar/core/identity/services/identity.service";
import { toObservable } from "@angular/core/rxjs-interop";
import { filter, map, take } from "rxjs";

export const withoutAuthenticationSessionGuard: CanActivateFn = () => {
  const identityService = inject(IdentityService);

  return toObservable(identityService.currentIdentity).pipe(
    // Don't take into account undefined values, because that means that the current auth status is unknown yet
    filter(identity => identity !== undefined),

    // Only take the first value
    take(1),

    // Cast the identity to a boolean
    map(identity => !identity)
  );
};
