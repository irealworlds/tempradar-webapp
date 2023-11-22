import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GbDefraIndex } from "@tempradar/modules/cities/city-details/gb-defra-index-card/gb-defra-index.model";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-gb-defra-index-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './gb-defra-index-card.component.html'
})
export class GbDefraIndexCardComponent {
  @Input() defraIndex?: GbDefraIndex;

  /**
   * Retrieves the corresponding icon based on the value of `usEpaIndex`.
   *
   * @returns {string} The icon name.
   */
  get icon(): string {
    switch (this.defraIndex?.gbDefraIndex) {
      case 1: return "check_circle";
      case 2: return "check_circle";
      case 3: return "check_circle";
      case 4: return "warning";
      case 5: return "warning";
      case 6: return "warning";
      case 7: return "error";
      case 8: return "error";
      case 9: return "error";
      case 10: return "error";
      default: return "cloud";
    }
  }
}
