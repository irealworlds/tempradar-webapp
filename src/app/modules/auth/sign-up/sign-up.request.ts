import { SignInRequest } from "@tempradar/modules/auth/sign-in/sign-in.request";

export class SignUpRequest {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;

  constructor(initial?: Partial<SignUpRequest>) {
    if (initial) {
      Object.assign(this, initial);
    }
  }

  /**
   * Creates a sign-in request.
   *
   * @returns {SignInRequest} The sign-in request object.
   */
  toSignInRequest(): SignInRequest {
    return new SignInRequest(this);
  }
}
