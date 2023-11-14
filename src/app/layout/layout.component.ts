import { Component, OnDestroy, OnInit } from "@angular/core";
import { AsyncPipe } from "@angular/common";
import { Observable, Subject, takeUntil } from "rxjs";
import { Layout } from "@tempradar/layout/layouts.enum";
import { LayoutService } from "@tempradar/layout/layout.service";
import { NavbarLayoutComponent } from "@tempradar/layout/navbar-layout/navbar-layout.component";
import { BlankLayoutComponent } from "@tempradar/layout/blank-layout/blank-layout.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [AsyncPipe, NavbarLayoutComponent, BlankLayoutComponent],
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit, OnDestroy {
  layout$?: Observable<Layout>;
  layouts = Layout;

  private _unsubscribeAll = new Subject<void>();

  /**
   * LayoutComponent constructor method.
   *
   * @param _layoutService
   */
  constructor(private readonly _layoutService: LayoutService) {
  }

  /**
   * On component initialisation.
   */
  ngOnInit(): void {
    this.layout$ = this._layoutService.layout$.pipe(
      takeUntil(this._unsubscribeAll)
    );
  }

  /**
   * On component destruction.
   */
  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
