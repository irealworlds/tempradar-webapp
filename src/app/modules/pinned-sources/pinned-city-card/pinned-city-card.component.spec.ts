import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PinnedCityCardComponent } from "./pinned-city-card.component";

describe('PinnedCityCardComponent', () => {
  let component: PinnedCityCardComponent;
  let fixture: ComponentFixture<PinnedCityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PinnedCityCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinnedCityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
