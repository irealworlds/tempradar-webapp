import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SensorHumidityHistoryCardComponent } from "./sensor-humidity-history-card.component";

describe('SensorHumidityHistoryCardComponent', () => {
  let component: SensorHumidityHistoryCardComponent;
  let fixture: ComponentFixture<SensorHumidityHistoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SensorHumidityHistoryCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensorHumidityHistoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
