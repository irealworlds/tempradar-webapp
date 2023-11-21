import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CanvasJS, CanvasJSAngularChartsModule, CanvasJSChart } from "@canvasjs/angular-charts";
import { MatCardModule } from "@angular/material/card";
import { BehaviorSubject, Observable, Subject, takeUntil, tap } from "rxjs";
import { toObservable } from "@angular/core/rxjs-interop";
import { ColorSchemeService, TColorSchemePreference } from "@tempradar/core/color-scheme/color-scheme.service";
import {
  TCityWeatherHistory
} from "@tempradar/modules/cities/city-details/city-temperature-history-graph/city-temperature-history.type";

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
    title: $localize `Temperature`
  },
  data: [],
};

@Component({
  selector: 'app-city-temperature-history-graph',
  standalone: true,
  imports: [CommonModule, CanvasJSAngularChartsModule, MatCardModule],
  templateUrl: './city-temperature-history-graph.component.html'
})
export class CityTemperatureHistoryGraphComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @Input() history?: TCityWeatherHistory;
  chart?: CanvasJSChart;

  systemScheme$: Observable<TColorSchemePreference>;

  private readonly _chartOptions = new BehaviorSubject<ChartOptions>(initialChartOptions);
  private readonly _unsubscribeAll = new Subject<void>();

  /**
   * CityTemperatureHistoryGraphComponent constructor method.
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
    if ('history' in changes) {
      if (this.history) {
        this._setChartData(this.history);
      }
    }
  }

  /** @inheritDoc */
  ngAfterViewInit() {
    this.chart = new CanvasJS.Chart("chartContainer", this._chartOptions.getValue());
  }

  /** @inheritDoc */
  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  /**
   * Populates the graph with temperature data from the given history.
   *
   * @param {TCityWeatherHistory} history - The temperature history of a city.
   * @return {void}
   */
  private _setChartData(history: TCityWeatherHistory): void {
    // Clear previous data
    const data = [];

    // Assign maximum temperature values
    data.push({
      type: "column",
      name: $localize `Maximum Temperature`,
      showInLegend: true,
      yValueFormatString: "#.## ºC",
      dataPoints: history.map(day => ({
        x: new Date(day.date),
        y: day.maximumTemperature
      }))
    });

    // Assign minimum temperature values
    data.push({
      type: "column",
      name: $localize `Minimum Temperature`,
      showInLegend: true,
      yValueFormatString: "#.## ºC",
      dataPoints: history.map(day => ({
        x: new Date(day.date),
        y: day.minimumTemperature
      }))
    });

    // Assign average temperature values
    data.push({
      type: "line",
      indexLabelFontSize: 16,
      name: $localize `Average Temperature`,
      showInLegend: true,
      yValueFormatString: "#.## ºC",
      dataPoints: history.map(day => ({
        x: new Date(day.date),
        y: day.averageTemperature
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
