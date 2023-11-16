import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NoSourcesComponent } from "./no-sources.component";

describe('NoSourcesComponent', () => {
  let component: NoSourcesComponent;
  let fixture: ComponentFixture<NoSourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoSourcesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
