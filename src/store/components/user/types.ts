export enum UserErrorCode {
  SignUpError = "SignUpError",
  SignInError = "SignInError",
}

export enum UserStatus {
  Authorized = "Authorized",
  UnAuthorized = " UnAuthorized",
}

export type JsonWebToken = string;

export type UserState =
  | {
      status: UserStatus.UnAuthorized;
    }
  | {
      status: UserStatus.Authorized;
      jwt: JsonWebToken;
    };

export enum AuthType {
  SignIn = "SignIn",
  SignUp = "SignUp",
}

export interface UserCredentials {
  email: string;
  password: string;
}

export interface UserAuthData {
  authType: AuthType;
  userCredentials: UserCredentials;
}
