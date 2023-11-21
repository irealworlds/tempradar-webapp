import { Injectable, Signal } from "@angular/core";
import { fromEvent, map, startWith } from "rxjs";
import { toSignal } from "@angular/core/rxjs-interop";

export type TColorSchemePreference = "dark" | "light" | undefined;

@Injectable({
  providedIn: 'root'
})
export class ColorSchemeService {
  systemPreference: Signal<TColorSchemePreference>;

  constructor() {
    // Create a signal that holds the current system preference.
    this.systemPreference = toSignal(
      fromEvent(window.matchMedia('(prefers-color-scheme: dark)'), "change").pipe(
        map((event: any) => event.matches ? "dark" : "light"),
        startWith(window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches ? 'dark' : 'light'),
        map((preference: string) => preference as TColorSchemePreference)
      )
    );
  }
}
