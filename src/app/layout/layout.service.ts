import { afterRender, Injectable } from "@angular/core";
import { ActivatedRoute, Data, NavigationEnd, Router } from "@angular/router";
import { BehaviorSubject, filter, map, Observable, startWith, switchMap } from "rxjs";
import { EnvironmentConfig } from "@tempradar/core/environment/environment-config.model";
import { Layout } from "@tempradar/layout/layouts.enum";

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private _layout: BehaviorSubject<Layout>;

  /**
   * LayoutService constructor method.
   *
   * @param _environment
   * @param _router
   * @param _activatedRoute
   */
  constructor(
    private readonly _environment: EnvironmentConfig,
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute
  ) {
    this._layout = new BehaviorSubject(_environment.defaultLayout);
    afterRender(() => {
      const layout = window.localStorage.getItem('layout');
      if (layout) {
        this._layout.next(layout as unknown as Layout);
      }
    });
  }

  /**
   * Get the current layout, as an observable.
   */
  get layout$(): Observable<any> {
    return this._layout.asObservable().pipe(
      switchMap(setLayout => this.routeData$.pipe(
        map((data: Data) => {
          let preferredLayout = this._environment.defaultLayout;
          const dataLayout = data['layout'];  // eslint-disable-line

          if (dataLayout !== undefined) {
            preferredLayout = dataLayout;
          } else if (setLayout) {
            preferredLayout = setLayout;
          }

          // If the preferred layout actually exists, that is the one that should be used
          if (Object.values(Layout).includes(preferredLayout)) {
            return preferredLayout;
          }
          return this._environment.defaultLayout;
        })
      ))
    );
  }

  /**
   * Set a new preferred layout.
   *
   * @param value
   */
  set layout(value: Layout) {
    window.localStorage.setItem('layout', value.toString());
    this._layout.next(value);
  }

  /**
   * Get the current route data.
   */
  get routeData$(): Observable<Data> {
    return this._router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      startWith(null),
      switchMap(() => {
        let route = this._activatedRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route.data;
      })
    );
  }
}
