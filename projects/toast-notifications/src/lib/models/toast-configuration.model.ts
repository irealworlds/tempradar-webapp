export class ToastConfiguration {
  autoCloseTimeout?: number;

  constructor(initial?: Partial<ToastConfiguration>) {
    if (initial) {
      Object.assign(this, initial);
    }
  }
}
