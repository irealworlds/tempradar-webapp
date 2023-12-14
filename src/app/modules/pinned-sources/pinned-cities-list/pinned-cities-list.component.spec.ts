import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PinnedCitiesListComponent } from "./pinned-cities-list.component";

describe('PinnedCitiesListComponent', () => {
  let component: PinnedCitiesListComponent;
  let fixture: ComponentFixture<PinnedCitiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PinnedCitiesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinnedCitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
