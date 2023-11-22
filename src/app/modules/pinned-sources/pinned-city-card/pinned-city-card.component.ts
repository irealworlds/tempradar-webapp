import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { City } from "@tempradar/modules/cities/city.model";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-pinned-city-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './pinned-city-card.component.html',
  styleUrl: './pinned-city-card.component.scss'
})
export class PinnedCityCardComponent {
  @Input() city?: City;

}
