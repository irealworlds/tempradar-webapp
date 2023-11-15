import { CanActivateFn } from "@angular/router";
import { inject } from "@angular/core";
import { IdentityService } from "@tempradar/core/identity/services/identity.service";
import { map } from "rxjs";


/**
 * identityFetchedGuard is a guard function that implements CanActivateFn interface.
 * It checks if the identity information is fetched using IdentityService.
 * If the information is fetched, it returns true.
 */
export const identityFetchedGuard: CanActivateFn = () => {
  const identityService = inject(IdentityService);

  return identityService.fetchIdentityInfo().pipe(
    map(() => true)
  );
};
