import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsEpaIndex } from "@tempradar/modules/cities/city-details/us-epa-index-card/us-epa-index.model";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-us-epa-index-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './us-epa-index-card.component.html'
})
export class UsEpaIndexCardComponent {
  @Input() epaIndex?: UsEpaIndex;

  /**
   * Retrieves the corresponding icon based on the value of `usEpaIndex`.
   *
   * @returns {string} The icon name.
   */
  get icon(): string {
    switch (this.epaIndex?.usEpaIndex) {
      case 1: return "check_circle";
      case 2: return "warning";
      case 3: return "warning";
      case 4: return "warning";
      case 5: return "error";
      case 6: return "error";
      default: return "cloud";
    }
  }
}
