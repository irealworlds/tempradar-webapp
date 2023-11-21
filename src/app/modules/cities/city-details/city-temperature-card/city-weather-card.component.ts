import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { CityWeather } from "@tempradar/modules/cities/city-details/city-temperature-card/city-weather.model";

@Component({
  selector: 'app-city-weather-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './city-weather-card.component.html',
})
export class CityWeatherCardComponent {
  @Input() weather?: CityWeather;
}
