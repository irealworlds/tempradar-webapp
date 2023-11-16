import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-logo-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo-icon.component.svg'
})
export class LogoIconComponent {
  @Input() width = "100%";
  @Input() height = "100%";
  @Input() circleColor?: string;
}
