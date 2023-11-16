import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToastNotification } from "../models/toast-notification.model";
import { ToastType } from "../enums/toast-type.enum";
import { ToastService } from "../toast.service";

@Component({
  selector: 'lib-simple-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simple-notification.component.html',
  styleUrl: '../assets/tailwind.scss'
})
export class SimpleNotificationComponent {
  @Input() toast?: ToastNotification;
  types = ToastType;

  /**
   * Creates a new instance of the constructor.
   *
   * @param {ToastService} _toastService - The toast service to be used.
   */
  constructor(
    private readonly _toastService: ToastService
  ) {
  }

  /**
   * Dismisses the notification. Throws an error if no notification is set for this component.
   *
   * @return {void}
   * @throws {Error} If no notification is set for this component
   */
  dismissNotification(): void {
    if (!this.toast) {
      throw new Error("No notification set for this component.");
    }

    this._toastService.dismiss(this.toast);
  }
}
