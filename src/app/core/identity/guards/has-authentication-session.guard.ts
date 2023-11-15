import { CanActivateFn, Router } from "@angular/router";
import { inject } from "@angular/core";
import { IdentityService } from "@tempradar/core/identity/services/identity.service";
import { toObservable } from "@angular/core/rxjs-interop";
import { filter, map, take, tap } from "rxjs";

export const hasAuthenticationSessionGuard: CanActivateFn = () => {
  const identityService = inject(IdentityService);
  const router = inject(Router);

  return toObservable(identityService.currentIdentity).pipe(
    // Don't take into account undefined values, because that means that the current auth status is unknown yet
    filter(identity => identity !== undefined),

    // Only take the first value
    take(1),

    // Cast the identity to a boolean
    map(identity => !!identity),

    // If not authenticated, redirect the user to the sign-in page
    tap(async authenticated => {
      if (!authenticated) {
        await router.navigate(['/auth/sign-in']);
      }
    })
  );
};
