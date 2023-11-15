import { Injectable, signal } from "@angular/core";
import { IdentityModule } from "@tempradar/core/identity/identity.module";
import { Identity } from "@tempradar/core/identity/models/identity.model";
import { HttpClient } from "@angular/common/http";
import { EnvironmentConfig } from "@tempradar/core/environment/environment-config.model";
import { catchError, Observable, of, tap } from "rxjs";

@Injectable({
  providedIn: IdentityModule
})
export class IdentityService {
  /**
   * Holds the current identity value.
   */
  currentIdentity = signal<Identity|null|undefined>(undefined);

  constructor(
    private readonly _http: HttpClient,
    private readonly _environment: EnvironmentConfig,
  ) { }

  /**
   * Fetches identity information from the server.
   *
   * @returns {Observable<Identity|null>} An observable that emits the identity information.
   */
  fetchIdentityInfo(): Observable<Identity|null> {
    const endpointUri = new URL('/manage/info', this._environment.api.baseUri);
    return this._http.get<Identity|null>(endpointUri.toString(), {
      headers: {
        'Accept': 'application/json'
      },
    }).pipe(
      catchError(() => of(null)),
      tap(identity => this.currentIdentity.set(identity))
    );
  }

  /**
   * Signs out the user.
   *
   * @returns {Observable<void>}
   */
  signOut(): Observable<void> {
    const endpointUri = new URL('/signout', this._environment.api.baseUri);
    return this._http.post<void>(endpointUri.toString(), {}).pipe(
      tap(() => this.currentIdentity.set(null))
    );
  }
}
