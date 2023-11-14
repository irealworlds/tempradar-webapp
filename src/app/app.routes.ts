import { Routes } from "@angular/router";

export const routes: Routes = [
  // Redirect requests to '/' to the home page
  { path: '', redirectTo: 'home', pathMatch: "full" },

  {
    path: "home",
    loadChildren: () => import("@tempradar/modules/home/home.module").then(m => m.HomeModule),
  }
];
