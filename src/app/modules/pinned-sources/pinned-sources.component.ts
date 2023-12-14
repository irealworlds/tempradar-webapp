import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

type TSourceType = { name: string, path: string };

@Component({
  selector: 'app-pinned-sources',
  templateUrl: './pinned-sources.component.html'
})
export class PinnedSourcesComponent implements AfterViewInit {
  @ViewChild("tabSelect") tabSelect?: ElementRef<HTMLSelectElement>;

  sourceTypes: TSourceType[] = [
    {
      name: $localize `Cities`,
      path: './cities'
    },
    {
      name: $localize `Sensors`,
      path: './sensors'
    },
  ];

  /**
   * PinnedSourcesComponent constructor method.
   *
   * @param _router
   * @param _activatedRoute
   */
  constructor(
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
  ) {
  }

  /** @inheritDoc */
  ngAfterViewInit(): void {
    // Set the active tab in the select
    if (this.tabSelect) {
      for (const sourceType of this.sourceTypes) {
        if (this.routeIsActive(sourceType.path)) {
          this.tabSelect.nativeElement.value = sourceType.path;
        }
      }
    }
  }

  /**
   * Redirect to a source type's path.
   *
   * @param path
   */
  async redirectToSourceType(path: string): Promise<void> {
    await this._router.navigate([path], {
      relativeTo: this._activatedRoute
    });
  }

  /**
   * Check if a path is active as the current route.
   *
   * @param path
   */
  routeIsActive(path: string): boolean {
    const url = this._router.createUrlTree([path], {
      relativeTo: this._activatedRoute
    }).toString();

    return url === this._router.url;
  }
}
