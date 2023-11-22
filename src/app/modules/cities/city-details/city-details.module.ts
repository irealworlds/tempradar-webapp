import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CityDetailsComponent } from "@tempradar/modules/cities/city-details/city-details.component";
import { CityDetailsRoutingModule } from "@tempradar/modules/cities/city-details/city-details-routing.module";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import {
  CityWeatherCardComponent
} from "@tempradar/modules/cities/city-details/city-temperature-card/city-weather-card.component";
import {
  CityAirQualityCardComponent
} from "@tempradar/modules/cities/city-details/city-air-quality-card/city-air-quality-card.component";
import {
  CityTemperatureHistoryGraphComponent
} from "@tempradar/modules/cities/city-details/city-temperature-history-graph/city-temperature-history-graph.component";
import {
  UsEpaIndexCardComponent
} from "@tempradar/modules/cities/city-details/us-epa-index-card/us-epa-index-card.component";


@NgModule({
  declarations: [
    CityDetailsComponent
  ],
    imports: [
        CommonModule,
        CityDetailsRoutingModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        NgxSkeletonLoaderModule,
        NgxChartsModule,
        CityWeatherCardComponent,
        CityAirQualityCardComponent,
        CityTemperatureHistoryGraphComponent,
        UsEpaIndexCardComponent,
    ]
})
export class CityDetailsModule { }
