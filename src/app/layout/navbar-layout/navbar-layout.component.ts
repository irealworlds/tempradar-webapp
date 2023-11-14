import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-navbar-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-layout.component.html'
})
export class NavbarLayoutComponent {
  navbarItems = [
    {
      name: 'Home',
      uri: '/home',
    }
  ];

}
