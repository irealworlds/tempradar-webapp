import { Injectable, Signal } from "@angular/core";
import { fromEvent, map, startWith, tap } from "rxjs";
import { toSignal } from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: 'root'
})
export class ColorSchemeService {
  systemPreference: Signal<"dark" | "light"|undefined>;

  constructor() {
    this.systemPreference = toSignal(
      fromEvent(window.matchMedia('(prefers-color-scheme: dark)'), "change").pipe(
        startWith(window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches ? 'dark' : 'light'),
        tap(console.debug),
        map((event: any) => event.matches ? "dark" : "light"),
      )
    );
  }
}
