import { Injectable } from "@angular/core";
import { EnvironmentConfig } from "@tempradar/core/environment/environment-config.model";
import { HttpClient } from "@angular/common/http";
import { SignUpRequest } from "@tempradar/modules/auth/sign-up/sign-up.request";
import { map, Observable, switchMap } from "rxjs";
import { SignInService } from "@tempradar/modules/auth/sign-in/sign-in.service";

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
   /**
    * Creates a new instance of the constructor.
    *
    * @param {EnvironmentConfig} _environment - The environment configuration.
    * @param {HttpClient} _http - The HTTP client.
    * @param _signInService
    */
  constructor(
    private readonly _environment: EnvironmentConfig,
    private readonly _http: HttpClient,
    private readonly _signInService: SignInService
  ) { }

  /**
   * Sends a POST request to the specified endpoint for user registration.
   */
  public sendRequest(data: SignUpRequest): Observable<void> {
    const endpointUri = this._environment.api.baseUri + '/register';
    return this._http.post<void>(endpointUri, data).pipe(
      switchMap(() => this._signInService.sendRequest(data.toSignInRequest()).pipe(map(() => {})))
    );
  }
}
