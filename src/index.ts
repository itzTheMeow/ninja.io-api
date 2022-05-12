import axios from "axios";
import GenericResponse from "./responses/GenericResponse";

import IndexResponse from "./responses/index";
import UserLoginResponse from "./responses/user/login";

interface NinjaAPIClientOptions {
  url?: string;
  clientVersion?: string;
}
const defaultConfig = {
  url: "https://api.ninja.io",
  clientVersion: "0.2.0",
};

const NinjaAPIRoutes = {
  status: "/",
  serverList: "/server",
  mapList: "/map",
  login: "/user/login",
};

export default class NinjaAPIClient {
  public credential: string;
  private url: string;
  private version: string;

  constructor(config: NinjaAPIClientOptions = {}) {
    this.url = config.url || defaultConfig.url;
    if (this.url.endsWith("/")) this.url = this.url.substring(0, this.url.length - 1);
    this.version = config.clientVersion || defaultConfig.clientVersion;
  }
  private async fetch(route: string, body?: Object) {
    try {
      return (
        body
          ? await axios.post(`${this.url}${route}`, body, {
              headers: {
                "Client-Version": this.version,
              },
            })
          : await axios.get(`${this.url}${route}`, {
              headers: {
                "Client-Version": this.version,
              },
            })
      ).data as any;
    } catch (err) {
      throw err;
    }
  }
  public async status(): Promise<IndexResponse> {
    return await this.fetch(NinjaAPIRoutes.status);
  }

  public async login(name: string, password: string, save = true) {
    const res = (await this.fetch(NinjaAPIRoutes.login, {
      name,
      password,
    })) as UserLoginResponse | GenericResponse;
    if (save && (res as UserLoginResponse).id) this.credential = (res as UserLoginResponse).id;
    return res;
  }
}
