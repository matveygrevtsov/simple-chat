export enum UserErrorCode {
  SignUpError = "SignUpError",
  SignInError = "SignInError",
}

export interface UserErrorData {
  errorMessage: string;
  errorCode: UserErrorCode;
}

export enum UserStatus {
  Guest = "Guest",
  Loading = "Loading",
  Error = "Error",
  Client = "Client",
}

export type JsonWebToken = string;

export type UserState =
  | {
      status: UserStatus.Guest;
    }
  | {
      status: UserStatus.Loading;
    }
  | {
      status: UserStatus.Error;
      error: UserErrorData;
    }
  | {
      status: UserStatus.Client;
      jwt: JsonWebToken;
    };

export interface UserCredentials {
  email: string;
  password: string;
}
