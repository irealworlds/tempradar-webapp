import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CreateSourceCardComponent } from "./create-source-card.component";

describe('NoSourcesComponent', () => {
  let component: CreateSourceCardComponent;
  let fixture: ComponentFixture<CreateSourceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSourceCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSourceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
