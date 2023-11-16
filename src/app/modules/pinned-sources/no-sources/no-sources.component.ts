import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-no-sources',
  standalone: true,
    imports: [CommonModule, MatCardModule, RouterLink],
  templateUrl: './no-sources.component.html'
})
export class NoSourcesComponent {

}
