export const backendUrl = "http://localhost:3000/api";

export enum FrontendErrors {
  AccessDenied = "AccessDenied",
  UserWithTheSameEmailAlreadyExists = "UserWithTheSameEmailAlreadyExists",
}

export enum BackendErrors {
  InternalServerError = "InternalServerError", // непредвиденная ошибка
  BadGateway = "BadGateway",
}
