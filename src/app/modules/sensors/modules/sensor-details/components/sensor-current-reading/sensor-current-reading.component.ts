import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SensorReadingDto } from "@tempradar/modules/sensors/dtos/sensor-reading.dto";
import { MatCardModule } from "@angular/material/card";
import { SensorService } from "@tempradar/modules/sensors/services/sensor.service";
import { SensorAirQualityLevel } from "@tempradar/modules/sensors/enums/sensor-air-quality-level.enum";

@Component({
  selector: 'app-sensor-current-reading',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './sensor-current-reading.component.html'
})
export class SensorCurrentReadingComponent {
  @Input() reading?: SensorReadingDto|null;

  airQualityLevels = SensorAirQualityLevel;

  get airQualityLevel(): SensorAirQualityLevel | undefined {
    if (!this.reading) {
      return undefined;
    }
    return this._sensorService.getAirQualityLevelFromReading(this.reading.airQuality);
  }

  constructor(
    private readonly _sensorService: SensorService
  ) {
  }
}
