export class SignInRequest {
  email?: string;
  password?: string;

  constructor(initial?: Partial<SignInRequest>) {
    if (initial) {
      Object.assign(this, initial);
    }
  }
}
