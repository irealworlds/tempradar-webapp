import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SensorCurrentReadingComponent } from "./sensor-current-reading.component";

describe('SensorCurrentReadingComponent', () => {
  let component: SensorCurrentReadingComponent;
  let fixture: ComponentFixture<SensorCurrentReadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SensorCurrentReadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensorCurrentReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
