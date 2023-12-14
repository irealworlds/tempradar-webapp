import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SensorTemperatureHistoryCardComponent } from "./sensor-temperature-history-card.component";

describe('SensorTemperatureHistoryCardComponent', () => {
  let component: SensorTemperatureHistoryCardComponent;
  let fixture: ComponentFixture<SensorTemperatureHistoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SensorTemperatureHistoryCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensorTemperatureHistoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
