import { UserStatus } from "./types";
import { userStoreActions, userReducer } from "./userSlice";

describe("userSlice", () => {
  it("Возвращает дефолтный стейт, когда передаём пустой экшен.", () => {
    const result = userReducer(undefined, { type: "" }); // Первый аргумент - это стейт, второй - экшен
    expect(result).toEqual({
      status: UserStatus.UnAuthorized,
    });
  });

  it("Разлогинивает юзера после logout-экшена", () => {
    const action = { type: userStoreActions.logout.type };
    const result = userReducer(
      { status: UserStatus.Authorized, jwt: "" },
      action
    );

    expect(result).toEqual({
      status: UserStatus.UnAuthorized,
    });
  });
});
