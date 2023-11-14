import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './blank-layout.component.html',
})
export class BlankLayoutComponent {

}
