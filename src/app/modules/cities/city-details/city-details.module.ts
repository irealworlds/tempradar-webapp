import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CityDetailsComponent } from "@tempradar/modules/cities/city-details/city-details.component";
import { CityDetailsRoutingModule } from "@tempradar/modules/cities/city-details/city-details-routing.module";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { CanvasJSAngularChartsModule } from "@canvasjs/angular-charts";


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
    CanvasJSAngularChartsModule,
  ]
})
export class CityDetailsModule { }
