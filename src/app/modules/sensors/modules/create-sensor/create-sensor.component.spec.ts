import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CreateSensorComponent } from "./create-sensor.component";

describe('CreateSensorComponent', () => {
  let component: CreateSensorComponent;
  let fixture: ComponentFixture<CreateSensorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSensorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
