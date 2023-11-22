import { TestBed } from "@angular/core/testing";

import { PinnedCityWeatherService } from "./pinned-city-weather.service";

describe('PinnedCityWeatherService', () => {
  let service: PinnedCityWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PinnedCityWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
