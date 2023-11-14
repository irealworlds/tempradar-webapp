import { Component, ElementRef, HostListener, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { animate, state, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-navbar-layout',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar-layout.component.html',
  animations: [
    trigger('dropdownAnimation', [
      state('void', style({
        transform: 'scale(.95)',
        opacity: 0,
        display: 'none',
      })),
      state('*', style({
        transform: 'scale(1)',
        opacity: 100,
        display: 'block',
      })),
      transition('void => *', [
        animate('100ms ease-out')
      ]),
      transition('* => void', [
        animate('75ms ease-in')
      ])
    ])
  ]
})
export class NavbarLayoutComponent {
  @ViewChild('profileDropdownContainer')
  profileDropdownContainer?: ElementRef<HTMLDivElement>;

  navbarItems = [
    {
      name: $localize `Home`,
      uri: '/home',
    }
  ];

  mobileMenuOpen = false;
  userDropdownOpen = false;

  /**
   * Close the profile dropdown when the user clicks outside of it.
   * @param event
   */
  @HostListener('document:click', ['$event'])
  closeUserDropdownOnClickOutside(event: PointerEvent) {
    const target = event.target;
    if (target && !this.profileDropdownContainer?.nativeElement.contains(target as Node)) {
      this.userDropdownOpen = false;
    }
  }
}
