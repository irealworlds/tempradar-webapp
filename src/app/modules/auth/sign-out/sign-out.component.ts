import { Component, OnInit } from "@angular/core";
import { IdentityService } from "@tempradar/core/identity/services/identity.service";
import { interval, lastValueFrom, takeWhile } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html'
})
export class SignOutComponent implements OnInit {
  state: 'pending'|'success'|'failed' = 'pending';

  redirectTimeLeft = 5;

  /**
   * SignOutComponent constructor method.
   *
   * @param _identityService
   * @param _router
   */
  constructor(
    private readonly _identityService: IdentityService,
    private readonly _router: Router
  ) {
  }

  /**
   * @inheritDoc
   */
  ngOnInit() {
    this.signOut().then();
  }

  /**
   * Signs out the user.
   *
   * @returns {Promise<void>} A promise that resolves when the sign-out operation is complete.
   */
  async signOut(): Promise<void> {
    this.state = "pending";
    try {
      await lastValueFrom(this._identityService.signOut());
      this.state = "success";

      interval(1000).pipe(
        takeWhile(() => this.redirectTimeLeft > 0)
      ).subscribe({
        next: () => {
          --this.redirectTimeLeft;
        },
        complete: async () => {
          await this._router.navigate(['/']);
        }
      });
    } catch (e) {
      this.state = "failed";
    }
  }
}
