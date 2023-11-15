import { HTTP_INTERCEPTORS, HttpClient } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { EnvironmentConfig } from "@tempradar/core/environment/environment-config.model";
import {
  EnableCredentialsOnApiInterceptor
} from "app/core/identity/interceptors/enable-credentials-on-api.interceptor";

describe('EnableCredentialsOnApiInterceptor', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: EnableCredentialsOnApiInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        EnableCredentialsOnApiInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: EnableCredentialsOnApiInterceptor,
          multi: true,
        },
        {
          provide: EnvironmentConfig,
          useValue: {
            api: { baseUri: 'http://localhost/api' }
          }
        }
      ]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(EnableCredentialsOnApiInterceptor);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should add credentials flag to API request', () => {
    const testUrl = 'http://localhost/api/data';

    httpClient.get(testUrl).subscribe();

    const req = httpTestingController.expectOne(testUrl);

    req.flush(null, { status: 200, statusText: 'Ok' });

    expect(req.request.withCredentials).toBeTrue();
  });

  it('should not add credentials flag to non API request', () => {
    const testUrl = 'http://localhost/assets/data.json';

    httpClient.get(testUrl).subscribe();

    const req = httpTestingController.expectOne(testUrl);

    req.flush(null, { status: 200, statusText: 'Ok' });

    expect(req.request.withCredentials).toBeFalse();
  });
});
