import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AirQuality } from "@tempradar/modules/cities/city-details/city-air-quality-card/air-quality.model";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: 'app-city-air-quality-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './city-air-quality-card.component.html',
})
export class CityAirQualityCardComponent {
  @Input() airQuality?: AirQuality;
}
