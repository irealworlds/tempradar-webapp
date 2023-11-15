import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { EnvironmentConfig } from "@tempradar/core/environment/environment-config.model";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class EnableCredentialsOnApiInterceptor implements HttpInterceptor {
  constructor(
    private readonly _environment: EnvironmentConfig
  ) {
  }

  /** @inheritDoc */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.startsWith(this._environment.api.baseUri)) {
      const requestWithCredentials = req.clone({
        withCredentials: true
      });
      return next.handle(requestWithCredentials);
    }

    return next.handle(req);
  }
}
