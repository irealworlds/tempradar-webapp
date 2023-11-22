import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CityTemperatureHistoryGraphComponent } from "./city-temperature-history-graph.component";

describe('CityTemperatureHistoryGraphComponent', () => {
  let component: CityTemperatureHistoryGraphComponent;
  let fixture: ComponentFixture<CityTemperatureHistoryGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityTemperatureHistoryGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityTemperatureHistoryGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
