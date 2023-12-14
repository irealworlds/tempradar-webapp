import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SensorCardComponent } from "./sensor-card.component";

describe('SensorCardComponent', () => {
  let component: SensorCardComponent;
  let fixture: ComponentFixture<SensorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SensorCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
