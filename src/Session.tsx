var config = require("../../../../src/config.json");

export abstract class Session {
  static setToken = async (token: string) => {
    if (typeof localStorage !== "undefined")
      await localStorage.setItem(`@${config.appName}:token`, token);
  };

  static clear = async () => {
    if (typeof localStorage !== "undefined")
      await localStorage.removeItem(`@${config.appName}:token`);
  };
}
