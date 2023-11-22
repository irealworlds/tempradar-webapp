import { ComponentFixture, TestBed } from "@angular/core/testing";

import { GbDefraIndexCardComponent } from "./gb-defra-index-card.component";

describe('GbDefraIndexCardComponent', () => {
  let component: GbDefraIndexCardComponent;
  let fixture: ComponentFixture<GbDefraIndexCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GbDefraIndexCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GbDefraIndexCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
