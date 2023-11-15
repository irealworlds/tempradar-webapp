import { Routes } from "@angular/router";
import { identityFetchedGuard } from "@tempradar/core/identity/guards/identity-fetched.guard";
import { hasAuthenticationSessionGuard } from "@tempradar/core/identity/guards/has-authentication-session.guard";
import {
  withoutAuthenticationSessionGuard
} from "@tempradar/core/identity/guards/without-authentication-session.guard";

export const routes: Routes = [
  // Redirect requests to '/' to the home page
  { path: '', redirectTo: 'home', pathMatch: "full" },

  // Application routes
  {
    path: '',
    canActivate: [identityFetchedGuard],
    children: [
      // Routes that require the user to be authenticated
      {
        path: '',
        canActivate: [hasAuthenticationSessionGuard],
        runGuardsAndResolvers: "always",
        children: [
          { path: "home", loadChildren: () => import("@tempradar/modules/home/home.module").then(m => m.HomeModule) },
          { path: 'auth/sign-out', loadChildren: () => import("@tempradar/modules/auth/sign-out/sign-out.module").then(m => m.SignOutModule) },
        ]
      },

      // Routes that require the user to be a guest
      {
        path: '',
        canActivate: [withoutAuthenticationSessionGuard],
        runGuardsAndResolvers: "always",
        children: [
          { path: 'auth/sign-up', loadChildren: () => import("@tempradar/modules/auth/sign-up/sign-up.module").then(m => m.SignUpModule) },
          { path: 'auth/sign-in', loadChildren: () => import("@tempradar/modules/auth/sign-in/sign-in.module").then(m => m.SignInModule) },
        ]
      },

      // Routes accessible regardless of authentication status
      {
        path: '',
        children: [

        ]
      },
    ]
  },

  {
    path: '**',
    pathMatch: "full",
    loadChildren: () => import('@tempradar/modules/errors/page-not-found/page-not-found.module').then(c => c.PageNotFoundModule)
  },
];
