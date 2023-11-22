import { Component, computed, ElementRef, HostListener, ViewChild } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { IdentityService } from "@tempradar/core/identity/services/identity.service";
import { lastValueFrom } from "rxjs";
import { MatButtonModule } from "@angular/material/button";
import { LogoIconComponent } from "@tempradar/modules/common/logo/logo-icon/logo-icon.component";

@Component({
  selector: 'app-navbar-layout',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, MatButtonModule, NgOptimizedImage, LogoIconComponent],
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

  currentIdentity$ = this._identityService.currentIdentity;
  profileImageUri$ = computed(() => {
    const name = this.currentIdentity$()?.firstName + ' ' + this.currentIdentity$()?.lastName;
    return `https://ui-avatars.com/api/?background=random&name=${name}`;
  });

  navbarItems = [
    {
      name: $localize `Home`,
      uri: '/home',
    }
  ];

  mobileMenuOpen = false;
  userDropdownOpen = false;

  constructor(
    private readonly _identityService: IdentityService
  ) {
  }

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

  /**
   * Signs out the user.
   *
   * @returns {Promise<void>} A Promise that resolves when the sign-out process is complete.
   */
  async signOut(): Promise<void> {
    return await lastValueFrom(this._identityService.signOut());
  }
}
