import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NavbarLayoutComponent } from "./navbar-layout.component";

describe('NavbarLayoutComponent', () => {
  let component: NavbarLayoutComponent;
  let fixture: ComponentFixture<NavbarLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
