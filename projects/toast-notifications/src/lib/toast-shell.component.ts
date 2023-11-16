import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToastService } from "./toast.service";
import { notificationAnimation } from "./animations/notification.animation";
import { SimpleNotificationComponent } from "./components/simple-notification.component";

@Component({
  selector: 'lib-toast',
  standalone: true,
  imports: [CommonModule, SimpleNotificationComponent],
  templateUrl: './toast-shell.component.html',
  styleUrl: './assets/tailwind.scss',
  animations: [notificationAnimation]
})
export class ToastShellComponent {
  public readonly toasts = this._toastService.toasts;

  constructor(
    private readonly _toastService: ToastService
  ) {
  }
}
