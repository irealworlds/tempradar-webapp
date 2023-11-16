import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PinnedSourcesComponent } from "./pinned-sources.component";

describe('PinnedSourcesComponent', () => {
  let component: PinnedSourcesComponent;
  let fixture: ComponentFixture<PinnedSourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PinnedSourcesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinnedSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
