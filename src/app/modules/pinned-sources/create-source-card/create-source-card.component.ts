import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-create-source-card',
  standalone: true,
    imports: [CommonModule, MatCardModule, RouterLink],
  templateUrl: './create-source-card.component.html'
})
export class CreateSourceCardComponent {
  @Input() firstSource = false;

}
