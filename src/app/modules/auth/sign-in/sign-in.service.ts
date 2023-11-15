import { Injectable } from "@angular/core";
import { EnvironmentConfig } from "@tempradar/core/environment/environment-config.model";
import { HttpClient } from "@angular/common/http";
import { map, Observable, switchMap } from "rxjs";
import { SignInRequest } from "@tempradar/modules/auth/sign-in/sign-in.request";
import { IdentityService } from "@tempradar/core/identity/services/identity.service";

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  /**
   * Creates a new instance of the constructor.
   *
   * @param {EnvironmentConfig} _environment - The environment configuration.
   * @param {HttpClient} _http - The HTTP client.
   * @param _identityService
   */
  constructor(
    private readonly _environment: EnvironmentConfig,
    private readonly _http: HttpClient,
    private readonly _identityService: IdentityService,
  ) { }

  /**
   * Sends a POST request to the specified endpoint for user registration.
   */
  public sendRequest(data: SignInRequest): Observable<void> {
    const endpointUri = new URL('login', this._environment.api.baseUri);
    endpointUri.searchParams.append('useCookies', 'true');
    endpointUri.searchParams.append('useSessionCookies', 'true');
    return this._http.post<void>(endpointUri.toString(), data).pipe(
      switchMap(() => this._identityService.fetchIdentityInfo().pipe(map((() => {}))))
    );
  }
}
