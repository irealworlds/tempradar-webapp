import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UsEpaIndexCardComponent } from "./us-epa-index-card.component";

describe('UsEpaIndexCardComponent', () => {
  let component: UsEpaIndexCardComponent;
  let fixture: ComponentFixture<UsEpaIndexCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsEpaIndexCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsEpaIndexCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
