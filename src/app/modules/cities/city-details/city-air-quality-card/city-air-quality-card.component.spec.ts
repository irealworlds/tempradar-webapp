import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CityAirQualityCardComponent } from "./city-air-quality-card.component";

describe('CityAirQualityCardComponent', () => {
  let component: CityAirQualityCardComponent;
  let fixture: ComponentFixture<CityAirQualityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityAirQualityCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityAirQualityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
