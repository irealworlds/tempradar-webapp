import { TestBed } from "@angular/core/testing";
import { ToastService } from "./toast.service";

describe('ToastNotificationsService', () => {
  let service: ToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
