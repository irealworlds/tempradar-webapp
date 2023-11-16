import { ApplicationRef, ComponentRef, createComponent, Inject, Injectable, signal, } from "@angular/core";
import { ToastConfiguration } from "./models/toast-configuration.model";
import { ToastShellComponent } from "./toast-shell.component";
import { ToastNotification } from "./models/toast-notification.model";
import { ToastType } from "./enums/toast-type.enum";
import { timer } from "rxjs";
import { DOCUMENT } from "@angular/common";

@Injectable()
export class ToastService {
  /**
   * The identifier of the container element that will hold toast notifications.
   */
  static ContainerElementId: string = "toast-notifications-shell-container";

  /**
   * Represents a signal that emits ToastNotification[].
   */
  toasts = signal<ToastNotification[]>([]);

  /**
   * Represents a reference to the component instance of ToastShellComponent.
   *
   * @property {ComponentRef<ToastShellComponent>} [_toastShellComponentRef] - The reference to the component instance of ToastShellComponent.
   */
  private _toastShellComponentRef?: ComponentRef<ToastShellComponent>;

  /**
   * Creates a new instance of the Constructor class.
   *
   * @param {Document} _document - The reference to the browser's Document object.
   * @param {ToastConfiguration} _configuration - The configuration object for the Toast component.
   * @param {ApplicationRef} _applicationRef - The reference to the Angular ApplicationRef.
   */
  constructor(
    @Inject(DOCUMENT) private readonly _document: Document,
    private readonly _configuration: ToastConfiguration,
    private readonly _applicationRef: ApplicationRef
  ) {}

  showToast(notification: ToastNotification): void;
  showToast(title: string, message: string, type: ToastType): void;
  showToast(message: string, type: ToastType): void;
  showToast(firstArg: string | ToastNotification, secondArg?: string | ToastType, thirdArg?: ToastType) {
    let toast: ToastNotification;

    // Determine which overload is being used
    if (firstArg instanceof ToastNotification) {
      toast = firstArg;
    } else if (thirdArg && Object.values(ToastType).includes(thirdArg)) {
      toast = new ToastNotification({
        title: firstArg,
        message: secondArg as string,
        type: thirdArg,
      });
    } else {
      toast = new ToastNotification({
        message: firstArg as string,
        type: secondArg as ToastType,
      });
    }

    if (!this._toastShellComponentRef) {
      this.createToastComponent();
    }

    this.toasts.update(toasts => [...toasts, toast]);

    const autoCloseTimeout = toast.autoCloseTimeout ?? this._configuration.autoCloseTimeout;
    if (autoCloseTimeout) {
      timer(autoCloseTimeout).subscribe(() => {
        this.dismiss(toast);
      })
    }
  }

  /**
   * Removes a specific toast from the toasts array and updates the toast component accordingly.
   * @param {any} toast - The toast to be removed.
   * @returns {ToastNotification}
   */
  dismiss(toast: ToastNotification): void {
    this.toasts.update(toasts => {
      return toasts.filter(t => !t.equals(toast));
    });

    if (this.toasts().length === 0) {
      this.clearToastComponent();
    }
  }

  /**
   * Creates the toast component.
   *
   * @private
   * @returns {void}
   */
  private createToastComponent(): void {
    const hostElement = this._document.getElementById(ToastService.ContainerElementId) ?? this._document.createElement("div");
    hostElement.setAttribute("id", ToastService.ContainerElementId)
    this._document.body.appendChild(hostElement);
    const environmentInjector = this._applicationRef.injector;

    this._toastShellComponentRef = createComponent(ToastShellComponent, { hostElement, environmentInjector });

    this._applicationRef.attachView(this._toastShellComponentRef.hostView);
    this._toastShellComponentRef.changeDetectorRef.detectChanges();
  }

  /**
   * Clears the toast component by detaching the view and destroying the reference.
   *
   * @returns {void}
   */
  private clearToastComponent(): void {
    if (this._toastShellComponentRef) {
      this._applicationRef.detachView(this._toastShellComponentRef.hostView);
      this._toastShellComponentRef.destroy();
      this._toastShellComponentRef = undefined;
    }
  }
}
