import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ToastShellComponent } from "./toast-shell.component";

describe('ToastComponent', () => {
  let component: ToastShellComponent;
  let fixture: ComponentFixture<ToastShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastShellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToastShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
