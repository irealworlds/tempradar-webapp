import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PinnedSensorsListComponent } from "./pinned-sensors-list.component";

describe('PinnedSensorsListComponent', () => {
  let component: PinnedSensorsListComponent;
  let fixture: ComponentFixture<PinnedSensorsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PinnedSensorsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinnedSensorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
