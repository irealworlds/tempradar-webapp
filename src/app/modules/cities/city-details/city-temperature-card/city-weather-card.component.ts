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

  /**
   * Returns the CSS class for the ultraviolet value based on the weather's ultraviolet index.
   *
   * @returns {string} The CSS class for the ultraviolet value.
   */
  get ultravioletClass(): string {
    switch (this.weather?.ultravioletIndex) {
      case 1:
      case 2:
        return "bg-lime-500 text-white dark:border-lime-500 dark:bg-lime-500/20 dark:text-lime-500";
      case 3:
      case 4:
      case 5:
        return "bg-yellow-400 text-white dark:border-yellow-400 dark:bg-yellow-400/20 dark:text-yellow-400";
      case 6:
      case 7:
        return "bg-orange-400 text-white dark:border-orange-400 dark:bg-orange-400/20 dark:text-orange-400";
      case 8:
      case 9:
      case 10:
        return "bg-orange-600 text-white dark:border-orange-600 dark:bg-orange-600/20 dark:text-orange-600";
      default:
        return "bg-purple-500 text-white dark:border-purple-500 dark:bg-purple-500/20 dark:text-purple-500";
    }
  }
}
