import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CityWeatherCardComponent } from "./city-weather-card.component";

describe('CityTemperatureComponent', () => {
  let component: CityWeatherCardComponent;
  let fixture: ComponentFixture<CityWeatherCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityWeatherCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityWeatherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
