import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PinnedSensorCardComponent } from "./pinned-sensor-card.component";

describe('PinnedSensorCardComponent', () => {
  let component: PinnedSensorCardComponent;
  let fixture: ComponentFixture<PinnedSensorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PinnedSensorCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinnedSensorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
