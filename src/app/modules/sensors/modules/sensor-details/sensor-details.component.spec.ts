import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SensorDetailsComponent } from "./sensor-details.component";

describe('PinnedSensorDetailsComponent', () => {
  let component: SensorDetailsComponent;
  let fixture: ComponentFixture<SensorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SensorDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
