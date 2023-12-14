import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PinnedSensorDto } from "@tempradar/modules/sensors/dtos/pinned-sensor.dto";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-pinned-sensor-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatDividerModule, MatIconModule, RouterLink],
  templateUrl: './pinned-sensor-card.component.html'
})
export class PinnedSensorCardComponent {
  @Input() sensor?: PinnedSensorDto;
}
