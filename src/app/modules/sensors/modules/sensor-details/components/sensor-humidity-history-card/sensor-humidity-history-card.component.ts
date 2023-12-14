import { Component, Input, SimpleChanges } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { CanvasJS, CanvasJSChart } from "@canvasjs/angular-charts";
import { BehaviorSubject, Observable, Subject, takeUntil, tap } from "rxjs";
import { ColorSchemeService, TColorSchemePreference } from "@tempradar/core/color-scheme/color-scheme.service";
import { toObservable } from "@angular/core/rxjs-interop";
import { SensorHistoricalHumidityDto } from "@tempradar/modules/sensors/dtos/sensor-historical-humidity.dto";

interface ChartOptions {
  zoomEnabled: boolean;
  animationEnabled: boolean;
  exportEnabled: boolean;
  theme: "dark1"|"dark2"|"light1"|"light2";
  toolTip: {
    shared: boolean;
  };
  axisX:{
    title: string;
  };
  axisY: {
    title: string;
  };
  data: any[];
}

const initialChartOptions: ChartOptions = {
  animationEnabled: true,
  exportEnabled: true,
  zoomEnabled: true,
  theme: "dark1",
  toolTip: {
    shared: true,
  },
  axisX:{
    title: $localize `Date`
  },
  axisY: {
    title: $localize `Humidity`
  },
  data: [],
};

@Component({
  selector: 'app-sensor-humidity-history-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './sensor-humidity-history-card.component.html',
})
export class SensorHumidityHistoryCardComponent {
  @Input() humidities: SensorHistoricalHumidityDto[] = [];
  chart?: CanvasJSChart;

  systemScheme$: Observable<TColorSchemePreference>;

  private readonly _chartOptions = new BehaviorSubject<ChartOptions>(initialChartOptions);
  private readonly _unsubscribeAll = new Subject<void>();

  /**
   * SensorHumidityHistoryCardComponent constructor method.
   *
   * @param _colorSchemeService
   */
  constructor(
    private readonly _colorSchemeService: ColorSchemeService,
  ) {
    this.systemScheme$ = toObservable(this._colorSchemeService.systemPreference).pipe(
      tap(value => console.debug('x,', value))
    );
  }

  /** @inheritDoc */
  ngOnInit(): void {
    // When the options change, update the chart
    this._chartOptions.asObservable().pipe(
      takeUntil(this._unsubscribeAll)
    ).subscribe(options => {
      if (!this.chart) {
        console.warn("Ignoring chart options change", options);
        return;
      }

      this.chart.options = options;
      this.chart.shouldUpdateChart = true;
      (this.chart as any).render();
    });

    // When the system theme changes, update the chart theme to match
    this.systemScheme$.pipe(
      takeUntil(this._unsubscribeAll)
    ).subscribe(preference => {
      this._updateChartOptions({
        theme: preference === "dark" ? "dark2" : "light2"
      });
    });
  }

  /** @inheritDoc */
  ngOnChanges(changes: SimpleChanges): void {
    if ('humidities' in changes) {
      if (this.humidities) {
        this._setChartData(this.humidities);
      }
    }
  }

  /** @inheritDoc */
  ngAfterViewInit() {
    this.chart = new CanvasJS.Chart("humidityChartContainer", this._chartOptions.getValue());
  }

  /** @inheritDoc */
  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  /**
   * Populates the graph with humidity data from the given history.
   *
   * @return {void}
   * @param humidities
   */
  private _setChartData(humidities: SensorHistoricalHumidityDto[]): void {
    // Clear previous data
    const data = [];

    // Assign humidity values
    data.push({
      type: "line",
      indexLabelFontSize: 16,
      name: $localize `Humidity`,
      showInLegend: true,
      yValueFormatString: "#.## %",
      dataPoints: humidities.map(reading => ({
        x: reading.recordedAt,
        y: reading.humidity
      }))
    });

    // Update the chart
    this._updateChartOptions({ data });
  }

  /**
   * Updates the chart options.
   *
   * @param {Partial<ChartOptions>} options - The partial chart options to update.
   * @return {void}
   */
  private _updateChartOptions(options: Partial<ChartOptions>): void {
    this._chartOptions.next({
      ...this._chartOptions.value,
      ...options
    });
  }
}
