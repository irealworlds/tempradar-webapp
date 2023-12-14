import { TestBed } from "@angular/core/testing";

import { PinnedSensorService } from "./pinned-sensor.service";

describe('PinnedSensorService', () => {
  let service: PinnedSensorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PinnedSensorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
