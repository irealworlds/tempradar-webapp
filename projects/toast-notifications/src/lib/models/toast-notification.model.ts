import { ToastType } from "../enums/toast-type.enum";

export class ToastNotification {
  protected readonly id = Symbol();

  title?: string;
  message?: string;
  type: ToastType = ToastType.Information;
  autoCloseTimeout?: number;
  dismissable = true;

  /**
   * Constructor for ToastNotification class.
   *
   * @param {Partial<ToastNotification>} initial - Optional initial values for the ToastNotification object.
   */
  constructor(initial?: Partial<ToastNotification>) {
    if (initial) {
      Object.assign(this, initial);
    }
  }

  /**
   * Compares the current object with the provided target object for equality.
   *
   * @param {any} target - The target object to compare with.
   * @returns {boolean} - Returns true if the objects are equal, otherwise returns false.
   */
  equals(target: any): boolean {
    if (typeof target === "object") {
      if (target.hasOwnProperty("id")) {
        return this.id === target.id;
      }
    }
    return false;
  }
}
