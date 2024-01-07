const ACCESS_TOKEN = "accessToken";

class AccessToken {
  private static instance: AccessToken;

  private constructor() {}

  public static getInstance(): AccessToken {
    if (!AccessToken.instance) {
      AccessToken.instance = new AccessToken();
    }

    return AccessToken.instance;
  }

  public getToken(): string | null {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    return accessToken;
  }

  public setToken(token: string) {
    localStorage.setItem(ACCESS_TOKEN, token);
  }

  public deleteToken() {
    localStorage.removeItem(ACCESS_TOKEN);
  }
}

const accessToken = AccessToken.getInstance();

export default accessToken;
