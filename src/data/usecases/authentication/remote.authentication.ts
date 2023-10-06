import { HttpPostCLient } from "@/data/protocols/http/http.post.client";

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClientSpy: HttpPostCLient
  ) {}

  async auth(): Promise<void> {
    await this.httpPostClientSpy.post(this.url);
  }
}
