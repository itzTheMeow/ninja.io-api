import axios from "axios";

import IndexResponse from "./responses/index";

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
};

export default class NinjaAPIClient {
  private url: string;
  private version: string;

  constructor(config: NinjaAPIClientOptions = {}) {
    this.url = config.url || defaultConfig.url;
    if (this.url.endsWith("/")) this.url = this.url.substring(0, this.url.length - 1);
    this.version = config.clientVersion || defaultConfig.clientVersion;
  }
  private async fetch(route: string) {
    console.log(`${this.url}${route}`);
    try {
      return (
        await axios.get(`${this.url}${route}`, {
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
}
